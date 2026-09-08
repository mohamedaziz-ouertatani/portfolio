'use client';

import { Canvas } from '@react-three/fiber';
import { ResearchBridgeScene } from './scenes/ResearchBridgeScene';
import { EstateMindScene } from './scenes/EstateMindScene';
import { SceneErrorBoundary } from './SceneErrorBoundary';
import { ProjectWorldFallback } from './ProjectWorldFallback';
import { useRenderCapability } from '@/hooks/useEnvironment';

export interface ProjectWorldCanvasProps {
  slug: string;
  /** False while the card is off screen, which stops the render loop. */
  active: boolean;
  /** Fired once the renderer exists, so the static fallback can be removed. */
  onReady?: () => void;
}

/**
 * A project's miniature environment. Kept to a single small canvas per card,
 * with the loop stopped whenever the card is not visible.
 */
export default function ProjectWorldCanvas({
  slug,
  active,
  onReady,
}: ProjectWorldCanvasProps) {
  const { settings, webgl, reducedMotion, ready } = useRenderCapability();

  if (!ready || !webgl || !settings)
    return <ProjectWorldFallback slug={slug} />;

  const animate = active && !reducedMotion;

  return (
    <SceneErrorBoundary fallback={<ProjectWorldFallback slug={slug} />}>
      <Canvas
        dpr={settings.dpr}
        onCreated={onReady}
        events={undefined}
        camera={{ position: [0, 1.6, 6.2], fov: 42 }}
        // Without an active card there is nothing to animate, so the loop is
        // parked rather than idling at 60fps behind the viewport.
        frameloop={animate ? 'always' : 'demand'}
        gl={{
          antialias: settings.tier === 'high',
          powerPreference: 'low-power',
          alpha: true,
          stencil: false,
        }}
      >
        {slug === 'estate-mind' ? (
          <EstateMindScene animate={animate} />
        ) : (
          <ResearchBridgeScene animate={animate} />
        )}
      </Canvas>
    </SceneErrorBoundary>
  );
}
