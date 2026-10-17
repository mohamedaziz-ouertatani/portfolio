'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import skillsData from '@/lib/skills';
import { relatedSkills } from '@/lib/stackGraph';

/**
 * The stack as a table: one ruled row per category, technologies set as plain
 * words. Pointing at or focusing one marks it, underlines its real neighbours
 * in viridis teal and dims everything else, which answers the question the
 * table exists to answer: what does this work with? Edges come from
 * lib/stackGraph.ts, where only defensible relationships are recorded.
 */
export function Stack() {
  const [active, setActive] = useState<string | null>(null);
  const related = active ? new Set(relatedSkills(active)) : null;

  return (
    <Section
      id="stack"
      heading="How I build it"
      caption="The tools I actually reach for. Point at any one of them to see what it works with."
    >
      <figure aria-labelledby="fig-2-caption">
        <div className="border-b border-foreground">
          {skillsData.map((category) => (
            <div
              key={category.key}
              className="grid gap-x-10 gap-y-2 border-t border-border py-4 first:border-foreground md:grid-cols-12"
            >
              <h3 className="text-sm font-medium text-foreground md:col-span-3 md:pt-0.5">
                {category.label}
              </h3>
              <ul className="flex flex-wrap gap-x-5 gap-y-1.5 md:col-span-9">
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
                          if (event.pointerType === 'mouse')
                            setActive(item.name);
                        }}
                        onPointerLeave={(event) => {
                          if (event.pointerType === 'mouse') setActive(null);
                        }}
                        onFocus={() => setActive(item.name)}
                        onBlur={() => setActive(null)}
                        onClick={() => setActive(item.name)}
                        className={`py-0.5 text-left text-[0.9375rem] underline-offset-[0.3em] transition-[color,opacity] duration-200 ease-cine ${
                          isActive
                            ? 'font-medium text-foreground underline decoration-highlight decoration-[3px]'
                            : isRelated
                              ? 'text-stage-2 underline decoration-stage-2 decoration-1'
                              : 'text-muted-foreground hover:text-foreground'
                        } ${isDimmed ? 'opacity-25' : 'opacity-100'}`}
                      >
                        {item.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Reserves its own lines so pointing never shifts the layout under
            the pointer. */}
        <figcaption
          id="fig-2-caption"
          aria-live="polite"
          className="caption mt-5 min-h-[3rem] max-w-[72ch]"
        >
          <span className="font-medium text-foreground">Fig. 2</span>{' '}
          {active ? (
            <>
              <strong className="font-medium text-foreground">{active}</strong>
              {relatedSkills(active).length > 0 ? (
                <> works with {relatedSkills(active).join(', ')}.</>
              ) : (
                <> stands on its own here.</>
              )}
            </>
          ) : (
            <>Point at or focus a technology to trace its connections.</>
          )}
        </figcaption>
      </figure>
    </Section>
  );
}
