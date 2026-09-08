export type QualityTier = 'high' | 'medium' | 'low';

export interface QualitySettings {
  tier: QualityTier;
  /** Upper bound on device pixel ratio. */
  dpr: [number, number];
  /** Nodes in the data network. */
  nodeCount: number;
  /** Connections drawn between nodes. */
  linkCount: number;
  /** Points in the atmospheric field. */
  particleCount: number;
  /** Particles travelling along connections. */
  streamCount: number;
  grid: boolean;
  /** Whether the pointer parallax rig is active. */
  pointerParallax: boolean;
}

const PRESETS: Record<QualityTier, QualitySettings> = {
  high: {
    tier: 'high',
    // Beyond ~1.75 the extra fragments buy nothing visible on this content but
    // cost fill rate quadratically, so the ratio is clamped rather than raw.
    dpr: [1, 1.75],
    nodeCount: 90,
    linkCount: 130,
    particleCount: 900,
    streamCount: 30,
    grid: true,
    pointerParallax: true,
  },
  medium: {
    tier: 'medium',
    dpr: [1, 1.4],
    nodeCount: 55,
    linkCount: 75,
    particleCount: 450,
    streamCount: 16,
    grid: true,
    pointerParallax: true,
  },
  low: {
    tier: 'low',
    dpr: [1, 1],
    nodeCount: 38,
    linkCount: 48,
    particleCount: 260,
    streamCount: 0,
    grid: false,
    pointerParallax: false,
  },
};

/**
 * Picks a tier from what the browser will actually tell us. There is no
 * reliable GPU benchmark available synchronously, so this is deliberately
 * conservative: coarse pointers and small viewports drop to `low` because
 * those are overwhelmingly phones.
 */
export function detectQualityTier(): QualityTier {
  if (typeof window === 'undefined') return 'medium';

  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as Navigator & { deviceMemory?: number })
    .deviceMemory;
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const width = window.innerWidth;

  if (coarsePointer || width < 768) return 'low';
  if (cores <= 4 || (memory !== undefined && memory <= 4)) return 'medium';
  if (width < 1280) return 'medium';
  return 'high';
}

export function qualitySettings(tier: QualityTier): QualitySettings {
  return PRESETS[tier];
}

interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: string;
}

/**
 * Whether this connection should be spared the 3D bundle entirely.
 *
 * The environment costs a few hundred kilobytes of JavaScript and a shader
 * compile. On a metered or genuinely slow connection that is a bad trade for
 * decoration the reader did not ask for, and the static fallback carries the
 * same idea for free. Save-Data is an explicit request from the reader and is
 * always honoured.
 */
export function prefersLightweight(): boolean {
  if (typeof navigator === 'undefined') return false;
  const connection = (
    navigator as Navigator & { connection?: NetworkInformation }
  ).connection;
  if (!connection) return false;
  if (connection.saveData) return true;
  return (
    connection.effectiveType === 'slow-2g' ||
    connection.effectiveType === '2g' ||
    connection.effectiveType === '3g'
  );
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * A context-loss-free capability probe. The throwaway canvas is released
 * immediately; keeping it alive would consume one of the browser's limited
 * WebGL contexts for the life of the page.
 */
export function supportsWebGL(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2') ??
      canvas.getContext('webgl') ??
      canvas.getContext('experimental-webgl');
    if (!gl) return false;
    const lose = (gl as WebGLRenderingContext).getExtension(
      'WEBGL_lose_context'
    );
    lose?.loseContext();
    return true;
  } catch {
    return false;
  }
}
