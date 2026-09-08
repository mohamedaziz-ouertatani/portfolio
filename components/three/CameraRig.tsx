'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Vector3 } from 'three';
import { damp, environment } from '@/lib/three/scrollStore';

/** Focal position the camera settles into for each of the six zones. */
const ZONE_POSITIONS: [number, number, number][] = [
  [0, 0, 15], // 01 identity — inside the network
  [2.4, 0.6, 12.5], // 02 work — drifting toward the project clusters
  [-2.2, -0.4, 11], // 03 stack — closer, the graph fills the frame
  [1.4, 1.2, 16], // 04 experience — pulled back along the timeline
  [0, 0.8, 21], // 05 about — the environment thins out
  [0, 0, 26], // 06 contact — distant, quiet, almost empty
];

interface CameraRigProps {
  pointerParallax: boolean;
  reducedMotion: boolean;
}

/**
 * Interpolates the camera between zone anchors and adds a small pointer
 * parallax. Every value is damped, so scrolling quickly or flicking the
 * pointer never snaps the view.
 */
export function CameraRig({ pointerParallax, reducedMotion }: CameraRigProps) {
  const { camera } = useThree();
  const target = useRef(new Vector3(0, 0, 15));
  const lookAt = useRef(new Vector3(0, 0, 0));

  useFrame((_, rawDelta) => {
    // A backgrounded tab can hand back a multi-second delta; clamping keeps
    // the damping stable when the reader returns.
    const delta = Math.min(rawDelta, 0.1);

    const zone = environment.activeZone;
    const from = ZONE_POSITIONS[zone] ?? ZONE_POSITIONS[0];
    const to = ZONE_POSITIONS[zone + 1] ?? from;
    const t = environment.zoneProgress;

    let x = from[0] + (to[0] - from[0]) * t;
    let y = from[1] + (to[1] - from[1]) * t;
    const z = from[2] + (to[2] - from[2]) * t;

    if (pointerParallax && !reducedMotion) {
      x += environment.pointerX * 1.1;
      y += environment.pointerY * 0.7;
    }

    target.current.set(x, y, z);

    const lambda = reducedMotion ? 8 : 1.6;
    camera.position.x = damp(camera.position.x, x, lambda, delta);
    camera.position.y = damp(camera.position.y, y, lambda, delta);
    camera.position.z = damp(camera.position.z, z, lambda, delta);

    // The camera always looks slightly ahead of itself into the structure,
    // which reads as travelling through the space rather than orbiting it.
    lookAt.current.set(x * 0.25, y * 0.25, -6);
    camera.lookAt(lookAt.current);
  });

  return null;
}
