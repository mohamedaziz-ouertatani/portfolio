'use client';

import { useFrame } from '@react-three/fiber';
import { useLayoutEffect, useMemo, useRef } from 'react';
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  Points,
} from 'three';
import { ACCENT_STREAM_PATHS } from '@/lib/three/streams';
import { ACCENT } from '@/lib/three/palette';
import { environment } from '@/lib/three/scrollStore';

/**
 * Packets travelling along fixed routes through the environment. Movement is
 * directional and looping rather than random, so it reads as data flowing
 * through a pipeline instead of drifting noise.
 */
export function DataStreams({
  count,
  animate,
}: {
  count: number;
  animate: boolean;
}) {
  const pointsRef = useRef<Points>(null);

  const { geometry, offsets, routes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const assigned = new Uint8Array(count);

    for (let i = 0; i < count; i += 1) {
      assigned[i] = i % ACCENT_STREAM_PATHS.length;
      speeds[i] = 0.06 + ((i * 37) % 100) / 900;
    }

    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(positions, 3));
    return { geometry: geo, offsets: speeds, routes: assigned };
  }, [count]);

  useLayoutEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((state) => {
    if (!animate || environment.hidden || count === 0) return;
    const attribute = geometry.getAttribute('position') as BufferAttribute;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i += 1) {
      const path = ACCENT_STREAM_PATHS[routes[i]];
      // Each packet runs the same route at its own pace, wrapping at the end.
      const t = (time * offsets[i] + i / count) % 1;
      const [ax, ay, az] = path.from;
      const [bx, by, bz] = path.to;
      attribute.setXYZ(
        i,
        ax + (bx - ax) * t,
        ay + (by - ay) * t + Math.sin(t * Math.PI) * path.arc,
        az + (bz - az) * t
      );
    }
    attribute.needsUpdate = true;
    geometry.computeBoundingSphere();
  });

  if (count === 0) return null;

  return (
    <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        size={0.14}
        color={new Color(ACCENT)}
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}
