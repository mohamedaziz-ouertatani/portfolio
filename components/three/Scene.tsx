'use client';

import { CameraRig } from './CameraRig';
import { DataNetwork } from './DataNetwork';
import { DataStreams } from './DataStreams';
import { Lighting } from './Lighting';
import { ParticleField } from './ParticleField';
import { TechnicalGrid } from './TechnicalGrid';
import { BACKGROUND } from '@/lib/three/palette';
import type { QualitySettings } from '@/lib/three/quality';

interface SceneProps {
  settings: QualitySettings;
  reducedMotion: boolean;
}

/**
 * Contents of the persistent environment. Each system is independent and
 * reads shared scroll state directly, so nothing here re-renders on scroll.
 */
export function Scene({ settings, reducedMotion }: SceneProps) {
  const animate = !reducedMotion;

  return (
    <>
      {/* Fog does the heavy lifting for depth: distant structure dissolves
          into the page background rather than ending at a visible edge. */}
      <fog attach="fog" args={[BACKGROUND, 18, 52]} />
      <color attach="background" args={[BACKGROUND]} />

      <Lighting />
      <CameraRig
        pointerParallax={settings.pointerParallax}
        reducedMotion={reducedMotion}
      />

      <DataNetwork
        nodeCount={settings.nodeCount}
        linkCount={settings.linkCount}
        animate={animate}
      />
      <ParticleField count={settings.particleCount} animate={animate} />
      <DataStreams count={settings.streamCount} animate={animate} />
      {settings.grid && <TechnicalGrid animate={animate} />}
    </>
  );
}
