'use client';

import { useMemo, useState } from 'react';
import { Section } from '@/components/ui/Section';
import skillsData from '@/lib/skills';
import { relatedSkills, validStackEdges } from '@/lib/stackGraph';

/**
 * The engineering graph.
 *
 * Built as SVG rather than WebGL: it has to stay legible, keyboard-navigable
 * and readable by assistive technology, and the relationships are the point —
 * not the rendering. Hovering or focusing a technology dims everything it is
 * not connected to, so the graph answers "what does this sit next to?".
 */
export function Stack() {
  const [active, setActive] = useState<string | null>(null);

  const { nodes, edges, width, height } = useMemo(() => {
    // Categories become columns; skills stack within them. A deterministic
    // layout beats a force simulation here — it is stable, cheap, and the
    // grouping is exactly the information we want to convey.
    const columnWidth = 200;
    const rowHeight = 46;
    const positions = new Map<string, { x: number; y: number }>();

    const columns = skillsData.map((category, columnIndex) => {
      const x = columnIndex * columnWidth + 100;
      const items = category.items.map((item, rowIndex) => {
        const y = rowIndex * rowHeight + 70;
        positions.set(item.name, { x, y });
        return { name: item.name, x, y };
      });
      return { label: category.label, x, items };
    });

    const maxRows = Math.max(...skillsData.map((c) => c.items.length));

    return {
      nodes: columns,
      edges: validStackEdges
        .map(([from, to]) => ({
          from,
          to,
          a: positions.get(from)!,
          b: positions.get(to)!,
        }))
        .filter((edge) => edge.a && edge.b),
      width: skillsData.length * columnWidth + 100,
      height: maxRows * rowHeight + 110,
    };
  }, []);

  const highlighted = useMemo(() => {
    if (!active) return null;
    return new Set([active, ...relatedSkills(active)]);
  }, [active]);

  const isDimmed = (name: string) =>
    highlighted !== null && !highlighted.has(name);

  return (
    <Section
      id="stack"
      index="03"
      label="Stack"
      heading="How I build it"
      caption="The tools I actually reach for, and how they connect. Select a technology to see what it works with."
    >
      <div className="bg-surface/50 overflow-x-auto rounded-lg border border-border p-4">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          className="min-w-full"
          role="img"
          aria-label="Graph of technologies grouped by category, with lines connecting related tools."
        >
          <g>
            {edges.map((edge) => {
              const dim =
                highlighted !== null &&
                !(highlighted.has(edge.from) && highlighted.has(edge.to));
              return (
                <line
                  key={`${edge.from}-${edge.to}`}
                  x1={edge.a.x}
                  y1={edge.a.y}
                  x2={edge.b.x}
                  y2={edge.b.y}
                  stroke="var(--color-accent)"
                  strokeWidth={dim ? 0.5 : 1.2}
                  opacity={dim ? 0.06 : 0.4}
                  className="transition-all duration-300"
                />
              );
            })}
          </g>

          {nodes.map((column) => (
            <g key={column.label}>
              <text
                x={column.x}
                y={34}
                textAnchor="middle"
                className="fill-[var(--color-faint-foreground)] font-mono text-[10px] uppercase tracking-[0.16em]"
              >
                {column.label}
              </text>
              {column.items.map((item) => {
                const dim = isDimmed(item.name);
                const isActive = active === item.name;
                return (
                  <g
                    key={item.name}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    aria-label={`${item.name}. ${
                      relatedSkills(item.name).length
                    } related technologies.`}
                    className="cursor-pointer outline-none transition-opacity duration-300 focus-visible:opacity-100"
                    opacity={dim ? 0.28 : 1}
                    onMouseEnter={() => setActive(item.name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(item.name)}
                    onBlur={() => setActive(null)}
                  >
                    <circle
                      cx={item.x}
                      cy={item.y}
                      r={isActive ? 5.5 : 3.5}
                      fill={
                        isActive
                          ? 'var(--color-accent-strong)'
                          : 'var(--color-accent)'
                      }
                      className="transition-all duration-300"
                    />
                    <text
                      x={item.x}
                      y={item.y + 18}
                      textAnchor="middle"
                      className={`font-mono text-[10px] transition-colors ${
                        isActive
                          ? 'fill-[var(--color-accent)]'
                          : 'fill-[var(--color-muted-foreground)]'
                      }`}
                    >
                      {item.name}
                    </text>
                  </g>
                );
              })}
            </g>
          ))}
        </svg>
      </div>

      {/* The same information as plain text, for anyone not using the graph. */}
      <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((category) => (
          <div key={category.key}>
            <h3 className="label-mono mb-3">{category.label}</h3>
            <ul className="space-y-1.5">
              {category.items.map((item) => (
                <li key={item.name} className="text-sm text-muted-foreground">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
