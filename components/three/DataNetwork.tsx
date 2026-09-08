'use client';

import { useFrame } from '@react-three/fiber';
import { useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  InstancedMesh,
  LineSegments,
  Object3D,
} from 'three';
import { ACCENT, SECONDARY } from '@/lib/three/palette';
import { environment } from '@/lib/three/scrollStore';

interface DataNetworkProps {
  nodeCount: number;
  linkCount: number;
  animate: boolean;
}

interface NetworkGeometry {
  positions: Float32Array;
  /** Per-node phase offset so the drift never looks synchronised. */
  phases: Float32Array;
  scales: Float32Array;
  colors: Float32Array;
  links: Uint16Array;
}

/**
 * Deterministic pseudo-random source. A seeded generator keeps the structure
 * identical between the server and client and across reloads, so the network
 * reads as a specific place rather than noise that is different every visit.
 */
function seeded(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

/**
 * Builds a clustered point cloud and links each node to its nearest
 * neighbours, which produces recognisable communities rather than a uniform
 * ball of dots.
 */
function buildNetwork(nodeCount: number, linkCount: number): NetworkGeometry {
  const random = seeded(20270201);
  const positions = new Float32Array(nodeCount * 3);
  const phases = new Float32Array(nodeCount);
  const scales = new Float32Array(nodeCount);
  const colors = new Float32Array(nodeCount * 3);

  const clusterCount = 5;
  const clusters: [number, number, number][] = [];
  for (let c = 0; c < clusterCount; c += 1) {
    clusters.push([
      (random() - 0.5) * 18,
      (random() - 0.5) * 10,
      (random() - 0.5) * 16,
    ]);
  }

  const accent = new Color(ACCENT);
  const secondary = new Color(SECONDARY);
  const tint = new Color();

  for (let i = 0; i < nodeCount; i += 1) {
    const cluster = clusters[i % clusterCount];
    const spread = 2.6 + random() * 2.4;
    positions[i * 3] = cluster[0] + (random() - 0.5) * spread * 2;
    positions[i * 3 + 1] = cluster[1] + (random() - 0.5) * spread;
    positions[i * 3 + 2] = cluster[2] + (random() - 0.5) * spread * 2;

    phases[i] = random() * Math.PI * 2;
    // A few hub nodes carry most of the visual weight.
    scales[i] =
      random() > 0.88 ? 0.13 + random() * 0.1 : 0.035 + random() * 0.05;

    tint.copy(accent).lerp(secondary, random() * 0.55);
    colors[i * 3] = tint.r;
    colors[i * 3 + 1] = tint.g;
    colors[i * 3 + 2] = tint.b;
  }

  // Link each node to its nearest unconnected neighbour until the budget is
  // spent; short links keep clusters legible instead of webbing everything.
  const pairs: number[] = [];
  const seen = new Set<string>();
  for (let i = 0; i < nodeCount && pairs.length / 2 < linkCount; i += 1) {
    const candidates: { index: number; distance: number }[] = [];
    for (let j = 0; j < nodeCount; j += 1) {
      if (i === j) continue;
      const dx = positions[i * 3] - positions[j * 3];
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
      candidates.push({ index: j, distance: dx * dx + dy * dy + dz * dz });
    }
    candidates.sort((a, b) => a.distance - b.distance);

    const degree = scales[i] > 0.12 ? 4 : 2;
    for (let k = 0; k < degree && pairs.length / 2 < linkCount; k += 1) {
      const j = candidates[k]?.index;
      if (j === undefined) break;
      const key = i < j ? `${i}:${j}` : `${j}:${i}`;
      if (seen.has(key)) continue;
      seen.add(key);
      pairs.push(i, j);
    }
  }

  return { positions, phases, scales, colors, links: Uint16Array.from(pairs) };
}

export function DataNetwork({
  nodeCount,
  linkCount,
  animate,
}: DataNetworkProps) {
  const meshRef = useRef<InstancedMesh>(null);
  const linesRef = useRef<LineSegments>(null);
  const dummy = useMemo(() => new Object3D(), []);
  const network = useMemo(
    () => buildNetwork(nodeCount, linkCount),
    [nodeCount, linkCount]
  );

  const linkGeometry = useMemo(() => {
    const geometry = new BufferGeometry();
    geometry.setAttribute(
      'position',
      new BufferAttribute(new Float32Array(network.links.length * 3), 3)
    );
    return geometry;
  }, [network.links.length]);

  // Three keeps no reference to a geometry we build by hand, so it has to be
  // released explicitly when the quality tier changes and this remounts.
  useLayoutEffect(() => () => linkGeometry.dispose(), [linkGeometry]);

  // Instance colours never change, so they are written once rather than
  // re-uploaded every frame.
  useLayoutEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const color = new Color();
    for (let i = 0; i < nodeCount; i += 1) {
      color.setRGB(
        network.colors[i * 3],
        network.colors[i * 3 + 1],
        network.colors[i * 3 + 2]
      );
      mesh.setColorAt(i, color);
    }
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [network, nodeCount]);

  // Reused across frames — allocating this inside the loop would hand the
  // garbage collector a new buffer sixty times a second.
  const livePositions = useMemo(
    () => new Float32Array(nodeCount * 3),
    [nodeCount]
  );

  const writeFrame = useCallback(
    (time: number) => {
      const mesh = meshRef.current;
      if (!mesh) return;

      const linkPositions = linkGeometry.getAttribute(
        'position'
      ) as BufferAttribute;
      const drift = animate ? 0.28 : 0;
      const current = livePositions;

      for (let i = 0; i < nodeCount; i += 1) {
        const phase = network.phases[i];
        const x =
          network.positions[i * 3] + Math.sin(time * 0.32 + phase) * drift;
        const y =
          network.positions[i * 3 + 1] + Math.cos(time * 0.27 + phase) * drift;
        const z =
          network.positions[i * 3 + 2] + Math.sin(time * 0.21 + phase) * drift;

        current[i * 3] = x;
        current[i * 3 + 1] = y;
        current[i * 3 + 2] = z;

        dummy.position.set(x, y, z);
        const pulse = animate ? 1 + Math.sin(time * 1.1 + phase) * 0.16 : 1;
        dummy.scale.setScalar(network.scales[i] * pulse);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      }

      mesh.instanceMatrix.needsUpdate = true;

      for (let l = 0; l < network.links.length; l += 1) {
        const node = network.links[l];
        linkPositions.setXYZ(
          l,
          current[node * 3],
          current[node * 3 + 1],
          current[node * 3 + 2]
        );
      }
      linkPositions.needsUpdate = true;
      linkGeometry.computeBoundingSphere();
    },
    [animate, dummy, linkGeometry, livePositions, network, nodeCount]
  );

  // One static write so the structure is correct on the very first frame,
  // including when motion is reduced and nothing animates afterwards.
  useLayoutEffect(() => {
    writeFrame(0);
  }, [writeFrame]);

  useFrame((state) => {
    if (!animate || environment.hidden) return;
    const time = state.clock.elapsedTime;
    writeFrame(time);

    const group = linesRef.current?.parent;
    if (group) {
      // Slow enough to read as drift rather than rotation.
      group.rotation.y = time * 0.018 + environment.progress * 0.9;
      group.rotation.x = Math.sin(time * 0.05) * 0.04;
    }
  });

  return (
    <group>
      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, nodeCount]}
        frustumCulled={false}
      >
        <sphereGeometry args={[1, 10, 10]} />
        <meshStandardMaterial
          emissive={ACCENT}
          emissiveIntensity={1.05}
          color="#0b1116"
          roughness={0.45}
          metalness={0.1}
          toneMapped={false}
        />
      </instancedMesh>

      <lineSegments
        ref={linesRef}
        geometry={linkGeometry}
        frustumCulled={false}
      >
        <lineBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.12}
          blending={AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </lineSegments>
    </group>
  );
}

export { buildNetwork, seeded };
export type { NetworkGeometry };
