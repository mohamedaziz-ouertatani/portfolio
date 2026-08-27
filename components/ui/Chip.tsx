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
      className={`inline-flex items-center rounded-full bg-muted px-3 py-1 font-mono text-xs font-medium text-muted-foreground ${className}`}
    >
      {children}
    </span>
  );
}
