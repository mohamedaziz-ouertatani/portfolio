'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether an element is on screen. Used to keep secondary canvases
 * unmounted until they are scrolled to, and to stop their render loops again
 * once they leave — several always-running canvases is the fastest way to
 * make a page like this stutter.
 */
export function useInView<T extends HTMLElement>(rootMargin = '200px') {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}
