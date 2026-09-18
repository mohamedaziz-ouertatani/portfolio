import type { ReactNode } from 'react';

/** A small cut tile: a technology or tag. */
export function Chip({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-sm bg-background-elevated px-2.5 py-1 text-xs font-semibold text-muted-foreground [box-shadow:inset_0_0_0_1px_var(--color-border)] ${className}`}
    >
      {children}
    </span>
  );
}
