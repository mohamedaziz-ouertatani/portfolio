'use client';

import { useEffect, useRef } from 'react';

/**
 * Replaces the native pointer with a small glowing dot, matching the
 * reference look (solid center, soft radial bloom). Only activates for
 * fine-pointer input so touch devices keep native behavior untouched.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    document.documentElement.classList.add('custom-cursor-active');

    const dot = dotRef.current;
    if (!dot) return;

    let raf = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      });
    };

    const show = () => dot.style.setProperty('opacity', '1');
    const hide = () => dot.style.setProperty('opacity', '0');

    window.addEventListener('pointermove', move);
    document.addEventListener('mouseleave', hide);
    document.addEventListener('mouseenter', show);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      document.removeEventListener('mouseleave', hide);
      document.removeEventListener('mouseenter', show);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="custom-cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] opacity-0"
    />
  );
}
