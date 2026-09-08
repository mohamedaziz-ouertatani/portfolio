'use client';

import dynamic from 'next/dynamic';
import { SceneFallback } from './SceneFallback';
import { useDeferredMount, useRenderCapability } from '@/hooks/useEnvironment';

/**
 * Loader boundary for the whole 3D layer.
 *
 * The gate has to live here, outside the lazily-loaded component: `dynamic`
 * starts fetching its chunk as soon as the component renders, so deferring
 * inside SceneCanvas would still have pulled three.js down during the initial
 * load, competing for bandwidth with the fonts that the headline needs. By
 * holding the render until the page has loaded and the main thread is idle,
 * the chunk is not even requested until the reader has the content.
 */
const SceneCanvas = dynamic(() => import('./SceneCanvas'), {
  ssr: false,
  loading: () => null,
});

export function Environment3D({ className = '' }: { className?: string }) {
  const ready = useDeferredMount();
  const { webgl, reducedMotion } = useRenderCapability();

  // Reduced motion gets the static environment outright: there is nothing for
  // a near-frozen scene to add that the fallback does not already convey.
  if (!ready || !webgl || reducedMotion) {
    return (
      <div className={`absolute inset-0 ${className}`} aria-hidden="true">
        <SceneFallback />
      </div>
    );
  }

  return <SceneCanvas className={className} />;
}
