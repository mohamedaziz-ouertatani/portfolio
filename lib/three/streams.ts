export interface StreamPath {
  from: [number, number, number];
  to: [number, number, number];
  /** Height of the arc at the midpoint; keeps routes from reading as straight lines. */
  arc: number;
}

/**
 * Fixed routes through the environment. Six is enough to suggest a system
 * without the space becoming busy.
 */
export const ACCENT_STREAM_PATHS: StreamPath[] = [
  { from: [-14, -3, -8], to: [12, 2, 4], arc: 1.6 },
  { from: [10, 5, -10], to: [-8, -4, 6], arc: -1.2 },
  { from: [-6, 6, 8], to: [8, -5, -12], arc: 2.1 },
  { from: [14, -2, 6], to: [-12, 4, -6], arc: -1.8 },
  { from: [0, -7, -14], to: [2, 7, 10], arc: 1.1 },
  { from: [-10, 1, 12], to: [11, -1, -9], arc: -0.9 },
];
