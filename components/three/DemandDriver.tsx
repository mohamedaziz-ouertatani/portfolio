'use client';

import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { subscribeToZone } from '@/lib/three/scrollStore';

/**
 * Under reduced motion the canvas runs on `frameloop="demand"`, so no frames
 * are drawn unless something asks for them. Crossing into a new zone asks for
 * a short burst, which lets the camera settle to the new anchor and then stop
 * — the scene repositions without ever running a continuous animation.
 */
export function DemandDriver() {
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    let raf = 0;
    let until = 0;

    const pump = () => {
      invalidate();
      if (performance.now() < until) {
        raf = requestAnimationFrame(pump);
      } else {
        raf = 0;
      }
    };

    const unsubscribe = subscribeToZone(() => {
      until = performance.now() + 700;
      if (!raf) raf = requestAnimationFrame(pump);
    });

    return () => {
      unsubscribe();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [invalidate]);

  return null;
}
