'use client';

import dynamic from 'next/dynamic';
import { SceneFallback } from './SceneFallback';

/**
 * Loader boundary for the whole 3D layer.
 *
 * `ssr: false` plus a dynamic import is what keeps three.js, R3F and drei out
 * of the initial JavaScript for every route: the page's own HTML and the
 * static fallback render first, and the 3D chunk is fetched afterwards.
 */
const SceneCanvas = dynamic(() => import('./SceneCanvas'), {
  ssr: false,
  loading: () => <SceneFallback />,
});

export function Environment3D({ className = '' }: { className?: string }) {
  return <SceneCanvas className={className} />;
}
