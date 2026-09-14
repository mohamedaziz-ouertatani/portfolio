'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

/**
 * The portrait carries the very first frame; the 3D environment underneath
 * takes over as the reader scrolls past the hero. Opacity is written
 * directly to the DOM on a rAF-throttled scroll listener rather than through
 * React state, matching the render-loop pattern in lib/three/scrollStore —
 * this fades every frame without re-rendering the tree.
 */
export function HeroImage() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.getElementById('identity');
    if (!hero) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const height = hero.offsetHeight || window.innerHeight;
      const fadeDistance = height * 0.7;
      const opacity = Math.max(0, 1 - window.scrollY / fadeDistance);
      if (layerRef.current) layerRef.current.style.opacity = String(opacity);
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2]"
    >
      <Image
        src="/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
    </div>
  );
}
