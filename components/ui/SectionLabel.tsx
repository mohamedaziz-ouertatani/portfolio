import type { ReactNode } from 'react';

/**
 * A quiet small-caps label for a sub-block inside a page (for example
 * "Problem" or "Key decisions"). Never used as an eyebrow above a heading.
 */
export function SectionLabel({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`label ${className}`}>{children}</p>;
}
