/**
 * The 3D layer cannot read CSS custom properties from inside the render loop,
 * so the design tokens it needs are mirrored here. These must stay in step
 * with the `--color-*` values in app/globals.css.
 */
export const BACKGROUND = '#08090b';
export const ACCENT = '#45d9e8';
export const ACCENT_DIM = '#1c6b75';
export const SECONDARY = '#8b7cff';
export const FOREGROUND = '#edece8';

/** Per-project scene identities, drawn from the same two accents. */
export const PROJECT_COLORS = {
  researchbridge: ACCENT,
  'estate-mind': SECONDARY,
} as const;
