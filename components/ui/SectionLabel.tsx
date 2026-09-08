import type { ReactNode } from 'react';

interface SectionLabelProps {
  /** Two-digit zone index, e.g. "02". */
  index?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Small monospace zone marker used above every section heading. Keeps the
 * "instrument panel" register of the site consistent across pages.
 */
export function SectionLabel({
  index,
  children,
  className = '',
}: SectionLabelProps) {
  return (
    <p className={`label-mono flex items-center gap-3 ${className}`}>
      {index && (
        <>
          <span className="text-accent">{index}</span>
          <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
        </>
      )}
      <span>{children}</span>
    </p>
  );
}
