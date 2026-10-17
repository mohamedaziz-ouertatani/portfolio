import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  heading: string;
  caption?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Shared shell for every home section. A hairline rule opens it, the heading
 * carries its own weight with nothing above it, and the caption reads like a
 * figure caption: one sentence on what the section shows.
 */
export function Section({
  id,
  heading,
  caption,
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={className}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="border-t border-foreground pb-20 pt-10 md:pb-28 md:pt-12">
          <div className="grid gap-x-10 gap-y-4 lg:grid-cols-12">
            <h2
              id={`${id}-heading`}
              className="text-3xl font-semibold leading-[1.08] text-foreground sm:text-4xl lg:col-span-5"
            >
              {heading}
            </h2>
            {caption && (
              <p className="max-w-[60ch] text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7 lg:pt-1.5">
                {caption}
              </p>
            )}
          </div>
          <div className="mt-12 md:mt-14">{children}</div>
        </div>
      </div>
    </section>
  );
}
