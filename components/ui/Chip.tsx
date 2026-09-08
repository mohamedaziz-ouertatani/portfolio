import type { ReactNode } from 'react';

export function Chip({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border border-border bg-background-elevated px-2.5 py-1 font-mono text-xs font-medium text-muted-foreground ${className}`}
    >
      {children}
    </span>
  );
}
