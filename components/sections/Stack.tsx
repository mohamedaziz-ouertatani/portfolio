'use client';

import { useEffect, useMemo, useState } from 'react';
import { Section } from '@/components/ui/Section';
import skillsData, { type SkillCategory } from '@/lib/skills';
import { relatedSkills, validStackEdges } from '@/lib/stackGraph';

interface Node {
  name: string;
  level: number;
  x: number;
  y: number;
  labelSide: 'left' | 'right';
}

// Percent-space (0-100 on both axes) constellation layout. Category anchors
// sit on a ring around the centre; each category's skills fan out further
// still, angled outward so their labels read away from the centre instead of
// colliding with it. Because positions are plain percentages, the whole
// graph — nodes, labels, edges — scales with the container for free; nothing
// here depends on measuring the live DOM.
const CATEGORY_RING = 20;
const ITEM_RING = 27;
const RADIUS_STEP = 4.4;
const MAX_CLUSTER_SPREAD_DEG = 42;
const DEG_PER_ITEM = 9;

function buildConstellation(categories: SkillCategory[]): Node[] {
  const angleStep = (Math.PI * 2) / categories.length;
  const nodes: Node[] = [];

  categories.forEach((category, ci) => {
    const categoryAngle = -Math.PI / 2 + ci * angleStep;
    const n = category.items.length;
    const spreadDeg = Math.min(MAX_CLUSTER_SPREAD_DEG, n * DEG_PER_ITEM);
    const spread = (spreadDeg * Math.PI) / 180;

    // Radius increases monotonically with index so items in the same
    // cluster fan outward — a small angular gap becomes a real gap in
    // screen space instead of two labels landing on top of each other.
    category.items.forEach((item, i) => {
      const t = n > 1 ? i / (n - 1) - 0.5 : 0;
      const angle = categoryAngle + t * spread;
      const radius = ITEM_RING + i * RADIUS_STEP;
      nodes.push({
        name: item.name,
        level: item.level,
        x: 50 + radius * Math.cos(angle),
        y: 50 + radius * Math.sin(angle),
        labelSide: Math.cos(angle) >= 0 ? 'right' : 'left',
      });
    });
  });

  return resolveLabelCollisions(nodes);
}

// Rough px estimate of a label's footprint (dot + gap + monospace-ish text)
// used only to decide whether two labels are about to overlap — doesn't need
// to be exact, just consistent.
function estimateLabelSpan(name: string) {
  return 24 + name.length * 6.4;
}

// Polar placement alone can still land two labels in the same cluster on
// nearly the same horizontal line, where the raw angular gap between them
// doesn't translate into enough visual separation. This sweeps each label
// side top-to-bottom and nudges a node down when it would overlap the one
// above it, using an assumed container width purely to judge closeness.
function resolveLabelCollisions(
  nodes: Node[],
  assumedContainerWidth = 900
): Node[] {
  const MIN_Y_GAP = 3.9;

  const rangeOf = (node: Node) => {
    const span = (estimateLabelSpan(node.name) / assumedContainerWidth) * 100;
    return node.labelSide === 'right'
      ? [node.x, node.x + span]
      : [node.x - span, node.x];
  };

  (['left', 'right'] as const).forEach((side) => {
    const sideNodes = nodes
      .filter((node) => node.labelSide === side)
      .sort((a, b) => a.y - b.y);

    // Skyline sweep: each node only needs checking against nodes already
    // placed above it (settled, since we go top to bottom), not just its
    // immediate neighbour — two labels can be visually adjacent while a
    // third, unrelated one sits between them in y-order.
    const placed: Node[] = [];
    for (const curr of sideNodes) {
      const currRange = rangeOf(curr);
      let minY = -Infinity;
      for (const prev of placed) {
        if (curr.y - prev.y >= MIN_Y_GAP) continue;
        const prevRange = rangeOf(prev);
        const horizontallyClose =
          currRange[0] < prevRange[1] && currRange[1] > prevRange[0];
        if (horizontallyClose) minY = Math.max(minY, prev.y + MIN_Y_GAP);
      }
      if (minY > curr.y) curr.y = minY;
      placed.push(curr);
    }
  });

  return nodes;
}

function categoryAnchor(index: number, total: number) {
  const angleStep = (Math.PI * 2) / total;
  const angle = -Math.PI / 2 + index * angleStep;
  return {
    x: 50 + CATEGORY_RING * Math.cos(angle),
    y: 50 + CATEGORY_RING * Math.sin(angle),
  };
}

function dotSize(level: number) {
  const clamped = Math.min(95, Math.max(70, level));
  return 6 + ((clamped - 70) / 25) * 8;
}

/**
 * The engineering graph.
 *
 * Every skill is a star in a small constellation, clustered by category
 * around a shared centre. Resting state shows the full network at low
 * opacity; hovering or focusing a technology lights up its neighbourhood and
 * fades the rest, which is what actually answers the question the graph
 * exists to answer: what does this sit next to?
 *
 * The constellation needs room to breathe, so it only renders at `sm` and
 * up. Below that, the same data and interaction fall back to a plain
 * category list — a dense scatter plot on a 360px screen is illegible no
 * matter how it's drawn.
 */
export function Stack() {
  const [active, setActive] = useState<string | null>(null);
  const [isCompact, setIsCompact] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 640px)');
    const update = () => setIsCompact(!mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  const nodes = useMemo(() => buildConstellation(skillsData), []);
  const nodeMap = useMemo(
    () => new Map(nodes.map((node) => [node.name, node])),
    [nodes]
  );
  const relatedToActive = active ? new Set(relatedSkills(active)) : null;

  return (
    <Section
      id="stack"
      index="03"
      label="Stack"
      heading="How I build it"
      caption="The tools I actually reach for. Select any one of them to see what it works with."
    >
      {isCompact ? (
        <CompactStack active={active} setActive={setActive} />
      ) : (
        <div className="relative mx-6 h-[560px] overflow-hidden md:mx-10 md:h-[640px] lg:h-[720px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, var(--glow-accent), transparent 60%)',
            }}
          />

          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            {validStackEdges.map(([a, b]) => {
              const from = nodeMap.get(a);
              const to = nodeMap.get(b);
              if (!from || !to) return null;

              const isEndpointActive = active === a || active === b;
              const isFaded = active !== null && !isEndpointActive;

              return (
                <line
                  key={`${a}--${b}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={
                    isEndpointActive
                      ? 'var(--color-accent)'
                      : 'var(--color-border-strong)'
                  }
                  strokeWidth={isEndpointActive ? 0.3 : 0.15}
                  opacity={isEndpointActive ? 0.85 : isFaded ? 0.06 : 0.3}
                />
              );
            })}
          </svg>

          {skillsData.map((category, ci) => {
            const anchor = categoryAnchor(ci, skillsData.length);
            return (
              <span
                key={category.key}
                aria-hidden="true"
                className="text-secondary/80 absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] uppercase italic tracking-[0.18em]"
                style={{ left: `${anchor.x}%`, top: `${anchor.y}%` }}
              >
                {category.label}
              </span>
            );
          })}

          {nodes.map((node) => {
            const isActive = active === node.name;
            const isRelated = relatedToActive?.has(node.name) ?? false;
            const isDimmed = active !== null && !isActive && !isRelated;
            const connections = relatedSkills(node.name);
            const size = dotSize(node.level);

            return (
              <button
                key={node.name}
                type="button"
                aria-pressed={isActive}
                aria-label={
                  connections.length
                    ? `${node.name}, ${connections.length} related technologies`
                    : node.name
                }
                onPointerEnter={(event) => {
                  if (event.pointerType === 'mouse') setActive(node.name);
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType === 'mouse') setActive(null);
                }}
                onFocus={() => setActive(node.name)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(node.name)}
                className={`absolute flex -translate-y-1/2 items-center gap-1.5 rounded-sm transition-opacity duration-200 ${
                  node.labelSide === 'left'
                    ? '-translate-x-full flex-row-reverse pr-1.5'
                    : 'pl-1.5'
                } ${isDimmed ? 'opacity-20' : 'opacity-100'}`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <span
                  aria-hidden="true"
                  className={`shrink-0 rounded-full transition-colors ${
                    isActive || isRelated ? 'bg-accent' : 'bg-border-strong'
                  }`}
                  style={{ width: size, height: size }}
                />
                <span
                  className={`whitespace-nowrap text-xs transition-colors ${
                    isActive
                      ? 'text-accent'
                      : isRelated
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {node.name}
                </span>
              </button>
            );
          })}
        </div>
      )}

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

function CompactStack({
  active,
  setActive,
}: {
  active: string | null;
  setActive: (name: string | null) => void;
}) {
  const relatedToActive = active ? new Set(relatedSkills(active)) : null;

  return (
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
      {skillsData.map((category) => (
        <div key={category.key}>
          <h3 className="text-secondary/80 mb-4 font-mono text-xs uppercase italic tracking-[0.18em]">
            {category.label}
          </h3>
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
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                        isActive || isRelated ? 'bg-accent' : 'bg-border-strong'
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
  );
}
