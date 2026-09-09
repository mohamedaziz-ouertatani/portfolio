'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ProjectWorldFallback } from './ProjectWorldFallback';
import { useInView } from '@/hooks/useInView';

const ProjectWorldCanvas = dynamic(() => import('./ProjectWorldCanvas'), {
  ssr: false,
  loading: () => null,
});

/**
 * Mounts a project's 3D world only once the card approaches the viewport.
 *
 * The static fallback is painted underneath and removed the moment the canvas
 * reports itself live — the canvas is transparent, so leaving both in place
 * superimposes two different drawings of the same project.
 */
export function ProjectWorld({ slug }: { slug: string }) {
  const { ref, inView } = useInView<HTMLDivElement>('300px');
  const [canvasLive, setCanvasLive] = useState(false);

  return (
    <div ref={ref} className="absolute inset-0">
      {!canvasLive && <ProjectWorldFallback slug={slug} />}
      {inView && (
        <div className="absolute inset-0">
          <ProjectWorldCanvas
            slug={slug}
            active={inView}
            onReady={() => setCanvasLive(true)}
          />
        </div>
      )}
    </div>
  );
}
