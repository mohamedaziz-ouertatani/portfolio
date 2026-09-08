'use client';

import { useFrame } from '@react-three/fiber';
import { useLayoutEffect, useMemo, useRef } from 'react';
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  Group,
  InstancedMesh,
  Mesh,
  Object3D,
} from 'three';
import { ACCENT } from '@/lib/three/palette';

const DOCUMENTS = 46;

/**
 * ResearchBridge as a retrieval system: scattered document nodes on the
 * outside, a reasoning core at the centre, and evidence links that only exist
 * between the core and the documents it has actually pulled in.
 *
 * The motion is a slow ingest — documents spiral inward, the ones nearest the
 * core brighten, and the structure settles. It says "retrieval into
 * reasoning", not "spinning object".
 */
export function ResearchBridgeScene({ animate }: { animate: boolean }) {
  const docsRef = useRef<InstancedMesh>(null);
  const coreRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);
  const dummy = useMemo(() => new Object3D(), []);

  const layout = useMemo(() => {
    const radii = new Float32Array(DOCUMENTS);
    const angles = new Float32Array(DOCUMENTS);
    const heights = new Float32Array(DOCUMENTS);
    const speeds = new Float32Array(DOCUMENTS);

    for (let i = 0; i < DOCUMENTS; i += 1) {
      // Golden-angle placement spreads the documents evenly instead of
      // clumping them the way uniform random would.
      angles[i] = i * 2.39996;
      radii[i] = 1.5 + (i / DOCUMENTS) * 2.9;
      heights[i] = ((i % 7) - 3) * 0.28;
      speeds[i] = 0.1 + (i % 5) * 0.035;
    }
    return { radii, angles, heights, speeds };
  }, []);

  const linkGeometry = useMemo(() => {
    const geo = new BufferGeometry();
    geo.setAttribute(
      'position',
      new BufferAttribute(new Float32Array(DOCUMENTS * 2 * 3), 3)
    );
    return geo;
  }, []);

  useLayoutEffect(() => () => linkGeometry.dispose(), [linkGeometry]);

  const write = (time: number) => {
    const mesh = docsRef.current;
    if (!mesh) return;
    const links = linkGeometry.getAttribute('position') as BufferAttribute;

    for (let i = 0; i < DOCUMENTS; i += 1) {
      const angle = layout.angles[i] + time * layout.speeds[i] * 0.35;
      // A slow breathing radius reads as documents being drawn in and
      // released rather than orbiting at a fixed distance.
      const radius =
        layout.radii[i] * (0.86 + Math.sin(time * 0.3 + i) * 0.075);
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = layout.heights[i] + Math.sin(time * 0.4 + i) * 0.1;

      dummy.position.set(x, y, z);
      dummy.scale.setScalar(0.055 + (i % 4) * 0.012);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);

      // Only the closest ring is wired to the core: evidence, not noise.
      const linked = radius < 2.6;
      links.setXYZ(i * 2, 0, 0, 0);
      links.setXYZ(i * 2 + 1, linked ? x : 0, linked ? y : 0, linked ? z : 0);
    }

    mesh.instanceMatrix.needsUpdate = true;
    links.needsUpdate = true;
    linkGeometry.computeBoundingSphere();
  };

  useLayoutEffect(() => {
    write(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame((state) => {
    if (!animate) return;
    const time = state.clock.elapsedTime;
    write(time);
    if (coreRef.current) {
      const pulse = 1 + Math.sin(time * 1.4) * 0.06;
      coreRef.current.scale.setScalar(pulse);
    }
    if (groupRef.current) groupRef.current.rotation.y = time * 0.055;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 4]} intensity={18} color={ACCENT} />

      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial
          color="#0a1418"
          emissive={ACCENT}
          emissiveIntensity={0.9}
          roughness={0.3}
          metalness={0.2}
          flatShading
          toneMapped={false}
        />
      </mesh>

      <instancedMesh
        ref={docsRef}
        args={[undefined, undefined, DOCUMENTS]}
        frustumCulled={false}
      >
        <boxGeometry args={[1, 1.35, 0.12]} />
        <meshStandardMaterial
          color="#101a1f"
          emissive={ACCENT}
          emissiveIntensity={0.75}
          roughness={0.5}
          toneMapped={false}
        />
      </instancedMesh>

      <lineSegments geometry={linkGeometry} frustumCulled={false}>
        <lineBasicMaterial
          color={new Color(ACCENT)}
          transparent
          opacity={0.22}
          blending={AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </lineSegments>
    </group>
  );
}
