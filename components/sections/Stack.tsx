'use client';

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Section } from '@/components/ui/Section';
import skillsData from '@/lib/skills';
import { relatedSkills } from '@/lib/stackGraph';

interface Connector {
  id: string;
  d: string;
}

/**
 * The engineering graph.
 *
 * Drawing every edge at once produced a mess: with categories laid out as
 * columns, most relationships span the full width, so the lines crossed each
 * other and ran straight through the labels they were meant to connect.
 *
 * So the resting state has no edges at all — just a legible grid of what I
 * work with. Connectors are drawn only for the technology under the pointer or
 * keyboard focus, which is at most a handful of curves and actually answers
 * the question the graph exists to answer: what does this sit next to?
 *
 * Positions are measured from the live DOM rather than computed from a fixed
 * layout, so the connectors follow the responsive grid instead of forcing a
 * fixed-width canvas and a horizontal scrollbar.
 */
export function Stack() {
  const [active, setActive] = useState<string | null>(null);
  const [connectors, setConnectors] = useState<Connector[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef(new Map<string, HTMLElement>());

  const relatedToActive = active ? new Set(relatedSkills(active)) : null;

  const draw = useCallback(() => {
    const container = containerRef.current;
    if (!container || !active) {
      setConnectors([]);
      return;
    }

    const base = container.getBoundingClientRect();
    const centreOf = (name: string) => {
      const el = itemRefs.current.get(name);
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return {
        x: rect.left - base.left + rect.width / 2,
        y: rect.top - base.top + rect.height / 2,
      };
    };

    const from = centreOf(active);
    if (!from) {
      setConnectors([]);
      return;
    }

    const next: Connector[] = [];
    for (const name of relatedSkills(active)) {
      const to = centreOf(name);
      if (!to) continue;

      // Bow each curve perpendicular to its own run so that connectors
      // sharing endpoints stay distinguishable instead of overlapping.
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const length = Math.hypot(dx, dy) || 1;
      const bow = Math.min(length * 0.16, 40);
      const cx = (from.x + to.x) / 2 + (-dy / length) * bow;
      const cy = (from.y + to.y) / 2 + (dx / length) * bow;

      next.push({
        id: `${active}--${name}`,
        d: `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`,
      });
    }
    setConnectors(next);
  }, [active]);

  useLayoutEffect(draw, [draw]);

  useEffect(() => {
    if (!active) return;
    window.addEventListener('resize', draw);
    return () => window.removeEventListener('resize', draw);
  }, [active, draw]);

  // Anchors are the bullets, not the buttons. Terminating a connector at the
  // centre of a full-width button drags the curve straight across the label it
  // is pointing at; ending it on the bullet keeps every line in the gutter.
  const registerAnchor = (name: string) => (el: HTMLSpanElement | null) => {
    if (el) itemRefs.current.set(name, el);
    else itemRefs.current.delete(name);
  };

  return (
    <Section
      id="stack"
      index="03"
      label="Stack"
      heading="How I build it"
      caption="The tools I actually reach for. Select any one of them to see what it works with."
    >
      <div ref={containerRef} className="relative">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        >
          {connectors.map((connector) => (
            <path
              key={connector.id}
              d={connector.d}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1.25"
              strokeLinecap="round"
              opacity="0.5"
            />
          ))}
        </svg>

        <div className="relative grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillsData.map((category) => (
            <div key={category.key}>
              <h3 className="label-mono mb-4">{category.label}</h3>
              <ul>
                {category.items.map((item) => {
                  const isActive = active === item.name;
                  const isRelated = relatedToActive?.has(item.name) ?? false;
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
                        // Hover is for mice only. On a touch screen the
                        // synthetic mouse-enter fires first and a toggling
                        // click would immediately switch the selection back
                        // off, so taps select rather than toggle and the
                        // selection clears on blur.
                        onPointerEnter={(event) => {
                          if (event.pointerType === 'mouse') {
                            setActive(item.name);
                          }
                        }}
                        onPointerLeave={(event) => {
                          if (event.pointerType === 'mouse') setActive(null);
                        }}
                        onFocus={() => setActive(item.name)}
                        onBlur={() => setActive(null)}
                        onClick={() => setActive(item.name)}
                        className={`flex w-full items-center gap-2.5 rounded-sm py-1 text-left text-sm transition-opacity duration-200 ${
                          isDimmed ? 'opacity-25' : 'opacity-100'
                        } ${
                          isActive
                            ? 'text-accent'
                            : isRelated
                              ? 'text-foreground'
                              : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <span
                          ref={registerAnchor(item.name)}
                          aria-hidden="true"
                          className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                            isActive || isRelated
                              ? 'bg-accent'
                              : 'bg-border-strong'
                          }`}
                        />
                        {item.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Reserves its own line so activating a technology never shifts the
          layout underneath the pointer. */}
      <p className="mt-10 min-h-[1.5rem] border-t border-border pt-6 text-sm text-muted-foreground">
        {active ? (
          <>
            <span className="text-accent">{active}</span>
            {relatedSkills(active).length > 0 ? (
              <> works with {relatedSkills(active).join(', ')}.</>
            ) : (
              <> stands on its own here.</>
            )}
          </>
        ) : (
          <span className="text-faint">
            Hover or focus a technology to trace its connections.
          </span>
        )}
      </p>
    </Section>
  );
}
