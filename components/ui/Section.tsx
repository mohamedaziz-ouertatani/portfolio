import type { ReactNode } from 'react';
import { SectionLabel } from './SectionLabel';

interface SectionProps {
  id: string;
  index: string;
  label: string;
  heading: string;
  caption?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Shared shell for every zone: the monospace index, the heading and the
 * spacing rhythm are defined once so the page reads as one continuous
 * environment rather than a stack of separately designed pages.
 */
export function Section({
  id,
  index,
  label,
  heading,
  caption,
  children,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`py-24 md:py-32 ${className}`}
    >
      <SectionLabel index={index} className="mb-6">
        {label}
      </SectionLabel>
      <h2
        id={`${id}-heading`}
        className="max-w-3xl text-3xl font-bold text-foreground sm:text-4xl md:text-5xl"
      >
        {heading}
      </h2>
      {caption && (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {caption}
        </p>
      )}
      <div className="mt-14">{children}</div>
    </section>
  );
}
