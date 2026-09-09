'use client';

import { useFrame } from '@react-three/fiber';
import { useLayoutEffect, useMemo, useRef } from 'react';
import { Color, GridHelper, LineBasicMaterial } from 'three';
import { ACCENT_DIM } from '@/lib/three/palette';
import { environment } from '@/lib/three/scrollStore';

/**
 * A far-below floor plane that establishes scale and horizon. It is kept very
 * dim on purpose: its job is to tell the eye how far away things are, not to
 * be looked at.
 */
export function TechnicalGrid({ animate }: { animate: boolean }) {
  const gridRef = useRef<GridHelper>(null);

  const grid = useMemo(() => {
    const helper = new GridHelper(120, 60, ACCENT_DIM, ACCENT_DIM);
    const material = helper.material as LineBasicMaterial;
    material.transparent = true;
    material.opacity = 0.16;
    material.depthWrite = false;
    material.color = new Color(ACCENT_DIM);
    return helper;
  }, []);

  useLayoutEffect(() => {
    const helper = grid;
    return () => {
      helper.geometry.dispose();
      (helper.material as LineBasicMaterial).dispose();
    };
  }, [grid]);

  useFrame(() => {
    if (!animate || environment.hidden || !gridRef.current) return;
    // Drifting the floor beneath a mostly static camera sells forward travel
    // without actually moving the reader's frame of reference.
    gridRef.current.position.z = ((environment.progress * 40) % 4) - 2;
  });

  return <primitive ref={gridRef} object={grid} position={[0, -9, 0]} />;
}
