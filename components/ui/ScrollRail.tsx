'use client';

import { zones } from '@/lib/sections';
import { useActiveZone } from '@/hooks/useEnvironment';

/**
 * Section index down the left edge.
 *
 * Only the two-digit marker is shown at rest; the label expands on hover or
 * focus. A permanently expanded rail is wide enough to collide with the
 * centred content column at common desktop widths, and a progress indicator
 * that overlaps the headline is worse than no progress indicator.
 */
export function ScrollRail() {
  const active = useActiveZone();

  return (
    <nav
      aria-label="Sections"
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ol className="space-y-5">
        {zones.map((zone, index) => {
          const isActive = index === active;
          return (
            <li key={zone.id}>
              <a
                href={`#${zone.id}`}
                aria-current={isActive ? 'true' : undefined}
                className="group flex items-center gap-2.5"
              >
                <span
                  aria-hidden="true"
                  className={`h-px transition-all duration-500 ease-cine ${
                    isActive
                      ? 'w-5 bg-accent'
                      : 'w-2.5 bg-border-strong group-hover:bg-muted-foreground'
                  }`}
                />
                <span
                  className={`font-mono text-[10px] tracking-[0.16em] transition-colors ${
                    isActive
                      ? 'text-accent'
                      : 'text-faint group-hover:text-muted-foreground'
                  }`}
                >
                  {zone.index}
                </span>
                <span
                  className={`max-w-0 overflow-hidden whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] opacity-0 transition-all duration-300 ease-cine group-hover:max-w-[8rem] group-hover:opacity-100 group-focus-visible:max-w-[8rem] group-focus-visible:opacity-100 ${
                    isActive ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  {zone.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
