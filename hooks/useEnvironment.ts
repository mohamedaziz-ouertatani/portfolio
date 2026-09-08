'use client';

import { useEffect, useState } from 'react';
import {
  environment,
  startEnvironmentTracking,
  subscribeToZone,
} from '@/lib/three/scrollStore';
import {
  detectQualityTier,
  prefersReducedMotion,
  qualitySettings,
  supportsWebGL,
  type QualitySettings,
} from '@/lib/three/quality';

/** Starts the shared scroll/pointer listeners for as long as this is mounted. */
export function useEnvironmentTracking(): void {
  useEffect(() => startEnvironmentTracking(), []);
}

/** Re-renders only when the reader crosses into a different zone. */
export function useActiveZone(): number {
  const [zone, setZone] = useState(environment.activeZone);

  useEffect(() => {
    const stopTracking = startEnvironmentTracking();
    setZone(environment.activeZone);
    const unsubscribe = subscribeToZone(setZone);
    return () => {
      unsubscribe();
      stopTracking();
    };
  }, []);

  return zone;
}

export interface RenderCapability {
  /** Null until the capability probe has run on the client. */
  settings: QualitySettings | null;
  webgl: boolean;
  reducedMotion: boolean;
  /** False during SSR and the first paint. */
  ready: boolean;
}

/**
 * Resolves render capability after mount. Deliberately not resolved during
 * render so the server and the first client paint agree, and so the WebGL
 * probe never runs on the critical path.
 */
export function useRenderCapability(): RenderCapability {
  const [capability, setCapability] = useState<RenderCapability>({
    settings: null,
    webgl: false,
    reducedMotion: false,
    ready: false,
  });

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const webgl = supportsWebGL();
    setCapability({
      settings: qualitySettings(detectQualityTier()),
      webgl,
      reducedMotion: reduced,
      ready: true,
    });

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () =>
      setCapability((prev) => ({ ...prev, reducedMotion: media.matches }));
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return capability;
}

/**
 * True once the browser has been idle after first paint. Used to defer
 * mounting the WebGL canvas until the page's own content has rendered.
 */
export function useDeferredMount(delay = 200): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const idle = (
      window as Window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      }
    ).requestIdleCallback;

    if (idle) {
      const handle = idle(() => setMounted(true), { timeout: 1200 });
      return () => {
        (
          window as Window & { cancelIdleCallback?: (h: number) => void }
        ).cancelIdleCallback?.(handle);
      };
    }

    const timer = window.setTimeout(() => setMounted(true), delay);
    return () => window.clearTimeout(timer);
  }, [delay]);

  return mounted;
}
