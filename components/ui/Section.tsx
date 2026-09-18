import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  heading: string;
  caption?: string;
  children: ReactNode;
  /** Plaster reads; cobalt is the wall itself, set into the page as a band. */
  tone?: 'plaster' | 'cobalt';
  className?: string;
}

/**
 * Shared shell for every zone. The heading carries its own weight, so there
 * is no kicker or index above it. Each section owns its full-bleed ground and
 * its own container, which is what lets cobalt bands cut across the page.
 */
export function Section({
  id,
  heading,
  caption,
  children,
  tone = 'plaster',
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`${tone === 'cobalt' ? 'zone-cobalt field-deep' : ''} ${className}`}
    >
      <div className="container mx-auto px-4 py-20 md:py-28">
        <h2
          id={`${id}-heading`}
          className="max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          {heading}
        </h2>
        {caption && (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            {caption}
          </p>
        )}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
