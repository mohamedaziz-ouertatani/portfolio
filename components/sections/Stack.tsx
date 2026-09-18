'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import skillsData from '@/lib/skills';
import { relatedSkills } from '@/lib/stackGraph';

/**
 * The stack wall.
 *
 * Every technology is one tile, grouped by category. Pointing at or focusing
 * a tile glazes it saffron and lifts its real neighbours to plaster while the
 * rest sit back, which answers the question the wall exists to answer: what
 * does this work with? Edges come from lib/stackGraph.ts, where only
 * defensible relationships are recorded. The wall is plain buttons in a plain
 * grid, so it reads the same at every width and needs no measuring.
 */
export function Stack() {
  const [active, setActive] = useState<string | null>(null);
  const related = active ? new Set(relatedSkills(active)) : null;

  return (
    <Section
      id="stack"
      tone="cobalt"
      heading="How I build it"
      caption="The tools I actually reach for. Point at any one of them to see what it works with."
    >
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((category, index) => (
          <Reveal key={category.key} from="pop" delay={index * 0.06}>
            <h3 className="label mb-4 !text-foreground">{category.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => {
                const isActive = active === item.name;
                const isRelated = related?.has(item.name) ?? false;
                const isDimmed = active !== null && !isActive && !isRelated;
                const connections = relatedSkills(item.name);

                return (
                  <li key={item.name}>
                    <button
                      type="button"
                      aria-pressed={isActive}
                      aria-label={
                        connections.length
                          ? `${item.name}, ${connections.length} related technologies`
                          : item.name
                      }
                      onPointerEnter={(event) => {
                        if (event.pointerType === 'mouse') setActive(item.name);
                      }}
                      onPointerLeave={(event) => {
                        if (event.pointerType === 'mouse') setActive(null);
                      }}
                      onFocus={() => setActive(item.name)}
                      onBlur={() => setActive(null)}
                      onClick={() => setActive(item.name)}
                      className={`tile tile-sm px-3.5 py-2 text-left text-sm font-semibold transition-[background-color,color,opacity] duration-200 ease-cine focus-visible:outline-none focus-visible:[outline-offset:-4px] focus-visible:[outline:2px_solid_var(--glaze-saffron)] ${
                        isActive
                          ? 'bg-glaze-saffron text-glaze-ink'
                          : isRelated
                            ? 'bg-glaze-plaster text-glaze-ink'
                            : 'bg-surface text-foreground hover:bg-surface-hover'
                      } ${isDimmed ? 'opacity-40' : 'opacity-100'}`}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* Reserves its own line so pointing at a tile never shifts the layout
          underneath the pointer. */}
      <p
        aria-live="polite"
        className="mt-12 min-h-[3rem] border-t-2 border-border pt-5 text-base text-muted-foreground"
      >
        {active ? (
          <>
            <strong className="font-bold text-accent">{active}</strong>
            {relatedSkills(active).length > 0 ? (
              <> works with {relatedSkills(active).join(', ')}.</>
            ) : (
              <> stands on its own here.</>
            )}
          </>
        ) : (
          <span>Point at or focus a technology to trace its connections.</span>
        )}
      </p>
    </Section>
  );
}
