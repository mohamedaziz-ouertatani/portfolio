import type { ReactNode } from 'react';

/** A technology or tag: hairline-framed, quiet, not interactive. */
export function Chip({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium text-muted-foreground [box-shadow:inset_0_0_0_1px_var(--color-border)] ${className}`}
    >
      {children}
    </span>
  );
}
