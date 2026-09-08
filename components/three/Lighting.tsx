'use client';

import { ACCENT, SECONDARY } from '@/lib/three/palette';

/**
 * Three sources only: a dim ambient so nothing is pure black, a cyan key from
 * the upper right, and a violet rim from behind-left to separate the network
 * from the background. Emissive node materials supply the rest.
 */
export function Lighting() {
  return (
    <>
      <ambientLight intensity={0.35} color="#cfd6de" />
      <directionalLight
        position={[8, 10, 6]}
        intensity={1.1}
        color={ACCENT}
      />
      <pointLight
        position={[-12, -4, -10]}
        intensity={26}
        distance={45}
        decay={2}
        color={SECONDARY}
      />
    </>
  );
}
