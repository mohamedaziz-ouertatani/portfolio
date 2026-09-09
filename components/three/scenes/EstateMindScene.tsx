'use client';

import { useFrame } from '@react-three/fiber';
import { useLayoutEffect, useMemo, useRef } from 'react';
import { Color, Group, InstancedMesh, Object3D } from 'three';
import { ACCENT, SECONDARY } from '@/lib/three/palette';
import { seeded } from '../DataNetwork';

const LISTINGS = 150;
const CLUSTERS = 4;

/**
 * Estate-Mind as a geographic analytics surface: listings sit on a ground
 * plane at positions clustered the way real markets cluster, and their height
 * encodes price. A prediction wave sweeps across the field, lifting each
 * column as it passes — the pipeline turning raw listings into estimates.
 *
 * Deliberately flatter and more grounded than ResearchBridge's orbiting
 * structure, so the two projects read as different kinds of system while
 * sharing one visual language.
 */
export function EstateMindScene({ animate }: { animate: boolean }) {
  const meshRef = useRef<InstancedMesh>(null);
  const groupRef = useRef<Group>(null);
  const dummy = useMemo(() => new Object3D(), []);

  const layout = useMemo(() => {
    const random = seeded(4242);
    const x = new Float32Array(LISTINGS);
    const z = new Float32Array(LISTINGS);
    const value = new Float32Array(LISTINGS);
    const colors = new Float32Array(LISTINGS * 3);

    const centres: [number, number][] = [];
    for (let c = 0; c < CLUSTERS; c += 1) {
      centres.push([(random() - 0.5) * 5.5, (random() - 0.5) * 4]);
    }

    const cheap = new Color(ACCENT);
    const dear = new Color(SECONDARY);
    const tint = new Color();

    for (let i = 0; i < LISTINGS; i += 1) {
      const centre = centres[i % CLUSTERS];
      const spread = 0.5 + random() * 1.15;
      x[i] = centre[0] + (random() - 0.5) * spread * 2;
      z[i] = centre[1] + (random() - 0.5) * spread * 2;

      // Long-tailed like real prices: most listings low, a few far above.
      value[i] = Math.pow(random(), 2.4) * 1.5 + 0.08;

      tint.copy(cheap).lerp(dear, Math.min(1, value[i] / 1.1));
      colors[i * 3] = tint.r;
      colors[i * 3 + 1] = tint.g;
      colors[i * 3 + 2] = tint.b;
    }

    return { x, z, value, colors };
  }, []);

  useLayoutEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const color = new Color();
    for (let i = 0; i < LISTINGS; i += 1) {
      color.setRGB(
        layout.colors[i * 3],
        layout.colors[i * 3 + 1],
        layout.colors[i * 3 + 2]
      );
      mesh.setColorAt(i, color);
    }
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [layout]);

  const write = (time: number) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    for (let i = 0; i < LISTINGS; i += 1) {
      // The wave travels along x, so columns rise in sequence rather than
      // pulsing together.
      const wave = animate
        ? 0.5 + 0.5 * Math.sin(time * 0.9 - layout.x[i] * 0.85)
        : 1;
      const height = layout.value[i] * (0.45 + wave * 0.55);

      dummy.position.set(layout.x[i], height / 2, layout.z[i]);
      dummy.scale.set(0.075, Math.max(height, 0.02), 0.075);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  };

  useLayoutEffect(() => {
    write(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame((state) => {
    if (!animate) return;
    write(state.clock.elapsedTime);
    if (groupRef.current) {
      groupRef.current.rotation.y = 0.5 + state.clock.elapsedTime * 0.035;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.32, 0.5, 0]} position={[0, -0.6, 0]}>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 6, 3]} intensity={1.3} color="#ffffff" />

      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, LISTINGS]}
        frustumCulled={false}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          roughness={0.35}
          metalness={0.15}
          emissiveIntensity={0.4}
          toneMapped={false}
        />
      </instancedMesh>

      {/* The ground the market sits on. */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[14, 11]} />
        <meshBasicMaterial color="#0b0d11" transparent opacity={0.85} />
      </mesh>
      <gridHelper args={[14, 28, SECONDARY, SECONDARY]}>
        <lineBasicMaterial attach="material" transparent opacity={0.1} />
      </gridHelper>
    </group>
  );
}
