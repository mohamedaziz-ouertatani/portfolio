'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Scene } from './Scene';
import { SceneFallback } from './SceneFallback';
import { SceneErrorBoundary } from './SceneErrorBoundary';
import { DemandDriver } from './DemandDriver';
import {
  useDeferredMount,
  useEnvironmentTracking,
  useRenderCapability,
} from '@/hooks/useEnvironment';

/**
 * The single persistent WebGL surface. It sits behind the page content and is
 * mounted only after the browser has gone idle, so the canvas never competes
 * with the hero's own text for the first paint.
 */
export default function SceneCanvas({
  className = '',
}: {
  className?: string;
}) {
  useEnvironmentTracking();
  const { settings, webgl, reducedMotion, ready } = useRenderCapability();
  const deferred = useDeferredMount();

  const canRender = ready && webgl && settings !== null && deferred;

  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true">
      {!canRender && <SceneFallback />}

      {canRender && (
        <SceneErrorBoundary fallback={<SceneFallback />}>
          <Canvas
            dpr={settings.dpr}
            // Nothing here is picked or hovered through the canvas, so the
            // raycaster and pointer events are pure overhead.
            events={undefined}
            camera={{ position: [0, 0, 15], fov: 55, near: 0.1, far: 120 }}
            frameloop={reducedMotion ? 'demand' : 'always'}
            gl={{
              antialias: settings.tier === 'high',
              powerPreference: 'high-performance',
              alpha: false,
              stencil: false,
              depth: true,
            }}
          >
            <Suspense fallback={null}>
              <Scene settings={settings} reducedMotion={reducedMotion} />
              {reducedMotion && <DemandDriver />}
            </Suspense>
          </Canvas>
        </SceneErrorBoundary>
      )}
    </div>
  );
}
