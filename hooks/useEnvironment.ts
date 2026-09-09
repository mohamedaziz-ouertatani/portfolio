'use client';

import { useEffect, useState } from 'react';
import {
  environment,
  startEnvironmentTracking,
  subscribeToZone,
} from '@/lib/three/scrollStore';
import {
  detectQualityTier,
  prefersLightweight,
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
    // A save-data or slow connection is treated exactly like no WebGL at all:
    // the static environment is shown and the 3D chunk is never fetched.
    const webgl = supportsWebGL() && !prefersLightweight();
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
 * True once the reader has actually engaged with the page — a pointer move, a
 * scroll, a touch or a key — and the main thread is idle.
 *
 * The 3D environment costs a few hundred kilobytes and a shader compile. Tying
 * it to engagement rather than to load means that cost is never on the
 * critical path: the static environment carries the first paint, and the live
 * one takes over on the reader's first gesture, which on a desktop is
 * effectively immediate and reads as the system responding to them.
 */
export function useDeferredMount(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let idleHandle: number | undefined;
    let timer: number | undefined;

    // Wait for the load event first, then for the main thread to go idle.
    // Mounting on idle alone still lands the WebGL compile inside the page's
    // own loading work on a slow machine, where it competes with the content
    // the reader is actually waiting for.
    const scheduleIdle = () => {
      const idle = (
        window as Window & {
          requestIdleCallback?: (
            cb: () => void,
            opts?: { timeout: number }
          ) => number;
        }
      ).requestIdleCallback;

      if (idle) {
        idleHandle = idle(() => setMounted(true), { timeout: 3000 });
      } else {
        timer = window.setTimeout(() => setMounted(true), 300);
      }
    };

    const events = [
      'pointermove',
      'pointerdown',
      'touchstart',
      'wheel',
      'scroll',
      'keydown',
    ] as const;

    const onEngage = () => {
      events.forEach((event) => window.removeEventListener(event, onEngage));
      scheduleIdle();
    };

    events.forEach((event) =>
      window.addEventListener(event, onEngage, { once: true, passive: true })
    );

    return () => {
      events.forEach((event) => window.removeEventListener(event, onEngage));
      if (idleHandle !== undefined) {
        (
          window as Window & { cancelIdleCallback?: (h: number) => void }
        ).cancelIdleCallback?.(idleHandle);
      }
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  return mounted;
}
