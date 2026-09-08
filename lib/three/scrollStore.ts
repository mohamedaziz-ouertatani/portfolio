import { zones } from '@/lib/sections';

/**
 * Scroll and pointer state shared between the DOM and the render loop.
 *
 * This is deliberately a plain mutable object rather than React state: the
 * render loop reads it every frame, and routing 60 updates per second through
 * React would re-render the whole tree for values only the GPU consumes.
 * The one thing React does subscribe to is `activeZone`, which changes at most
 * a handful of times per page.
 */
export interface EnvironmentState {
  /** Whole-document scroll progress, 0 at the top, 1 at the bottom. */
  progress: number;
  /** Index into `zones` of the section currently filling the viewport. */
  activeZone: number;
  /** Progress through the active zone, 0 to 1. */
  zoneProgress: number;
  /** Pointer position in normalised device coordinates, -1 to 1. */
  pointerX: number;
  pointerY: number;
  /** True while the tab is hidden, so the render loop can idle. */
  hidden: boolean;
}

export const environment: EnvironmentState = {
  progress: 0,
  activeZone: 0,
  zoneProgress: 0,
  pointerX: 0,
  pointerY: 0,
  hidden: false,
};

type ZoneListener = (zone: number) => void;

const zoneListeners = new Set<ZoneListener>();
let started = false;
let frame = 0;

function emitZone(next: number) {
  if (next === environment.activeZone) return;
  environment.activeZone = next;
  zoneListeners.forEach((listener) => listener(next));
}

function measure() {
  frame = 0;

  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - window.innerHeight;
  environment.progress =
    scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;

  // The active zone is the last registered section whose top has passed the
  // middle of the viewport — a stable rule that does not flicker at edges.
  const midpoint = window.innerHeight * 0.45;
  let active = 0;
  let activeTop = 0;
  let activeHeight = window.innerHeight;

  for (let i = 0; i < zones.length; i += 1) {
    const el = document.getElementById(zones[i].id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= midpoint) {
      active = i;
      activeTop = rect.top;
      activeHeight = rect.height || window.innerHeight;
    }
  }

  environment.zoneProgress = Math.min(
    1,
    Math.max(0, (midpoint - activeTop) / activeHeight)
  );
  emitZone(active);
}

function schedule() {
  if (frame) return;
  frame = requestAnimationFrame(measure);
}

function onPointerMove(event: PointerEvent) {
  environment.pointerX = (event.clientX / window.innerWidth) * 2 - 1;
  environment.pointerY = -((event.clientY / window.innerHeight) * 2 - 1);
}

function onVisibilityChange() {
  environment.hidden = document.hidden;
}

/**
 * Installs the single set of listeners the whole environment shares.
 * Returns a teardown, and is reference-counted so several components may
 * call it without duplicating listeners.
 */
let subscribers = 0;

export function startEnvironmentTracking(): () => void {
  subscribers += 1;

  if (!started) {
    started = true;
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);
    measure();
  }

  return () => {
    subscribers -= 1;
    if (subscribers > 0 || !started) return;
    started = false;
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
    window.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
}

export function subscribeToZone(listener: ZoneListener): () => void {
  zoneListeners.add(listener);
  return () => {
    zoneListeners.delete(listener);
  };
}

/** Frame-rate independent damping. Higher `lambda` converges faster. */
export function damp(
  current: number,
  target: number,
  lambda: number,
  delta: number
): number {
  return current + (target - current) * (1 - Math.exp(-lambda * delta));
}
