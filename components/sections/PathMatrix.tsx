'use client';

import { useState } from 'react';
import { ViewTransitionLink } from '@/components/ui/ViewTransitionLink';
import { findProject, projectHref, type Project } from '@/lib/projects';
import { stageCoverage, stages } from '@/lib/stages';

// The projects that make the case for end-to-end work, in the order the
// figure reads best: fullest paths first, single-stage analysis last.
const SLUGS = [
  'smart-inventory',
  'biflow',
  'dressme',
  'researchbridge',
  'estate-mind',
  'mlops-pipeline',
  'business-intelligence-dashboards',
  'data-analysis',
];

const SHORT: Record<string, string> = {
  'smart-inventory': 'Smart Inventory',
  biflow: 'BIFlow',
  dressme: 'DressMe',
  researchbridge: 'ResearchBridge',
  'estate-mind': 'Estate-Mind',
  'mlops-pipeline': 'MLOps Pipeline',
  'business-intelligence-dashboards': 'BI Dashboards',
  'data-analysis': 'Data Analysis',
};

const rows = SLUGS.map((slug) => findProject(slug))
  .filter((project): project is Project => Boolean(project))
  .map((project) => ({ project, coverage: stageCoverage(project) }));

const columnTotals = stages.map(
  (_, column) => rows.filter((row) => row.coverage[column]).length
);

type Focus = { kind: 'row'; index: number } | { kind: 'col'; index: number };

/**
 * Fig. 1. Rows are projects, columns are the five stages of the data-to-
 * product path; a dot means the project's own stack covers that stage. The
 * margins carry the totals, so the figure answers both questions a recruiter
 * has: how much of the path does one project cover, and how often does each
 * stage come up. Pointing at a row or a stage isolates it and dims the rest.
 */
export function PathMatrix() {
  const [focus, setFocus] = useState<Focus | null>(null);

  const dim = (row: number, col?: number) => {
    if (!focus) return false;
    if (focus.kind === 'row') return focus.index !== row;
    return col === undefined ? false : focus.index !== col;
  };

  return (
    <figure aria-labelledby="fig-1-caption">
      <div
        className="grid grid-cols-[minmax(7.5rem,1fr)_repeat(5,minmax(2.25rem,3.75rem))_2.75rem] text-sm sm:grid-cols-[minmax(9rem,1fr)_repeat(5,minmax(2.75rem,4.25rem))_3rem]"
        onPointerLeave={() => setFocus(null)}
      >
        {/* Column heads: the stages */}
        <div className="pb-3" />
        {stages.map((stage, col) => (
          <button
            key={stage.key}
            type="button"
            onPointerEnter={() => setFocus({ kind: 'col', index: col })}
            onFocus={() => setFocus({ kind: 'col', index: col })}
            onBlur={() => setFocus(null)}
            aria-label={`${stage.label}: ${stage.caption}. ${columnTotals[col]} of ${rows.length} projects.`}
            className={`flex flex-col items-center gap-1 pb-3 text-center transition-opacity duration-300 ease-cine focus-visible:outline-offset-0 ${
              focus?.kind === 'col' && focus.index !== col ? 'opacity-25' : ''
            }`}
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full"
              style={{ background: `var(--stage-${col})` }}
            />
            <span className="text-xs font-medium leading-tight text-foreground max-sm:rotate-180 max-sm:[writing-mode:vertical-rl]">
              {stage.label}
            </span>
          </button>
        ))}
        <div className="pb-3 text-right text-[0.7rem] leading-tight text-faint sm:text-xs">
          <span className="block h-2" aria-hidden="true" />
          <span className="mt-1 block">of 5</span>
        </div>

        {/* Rows: the projects */}
        {rows.map(({ project, coverage }, row) => {
          const count = coverage.filter(Boolean).length;
          const rowDim = focus?.kind === 'row' && focus.index !== row;
          return (
            <ViewTransitionLink
              key={project.id}
              href={projectHref(project)}
              aria-label={`${project.title}: covers ${count} of 5 stages. Read the case study.`}
              onPointerEnter={() => setFocus({ kind: 'row', index: row })}
              onFocus={() => setFocus({ kind: 'row', index: row })}
              onBlur={() => setFocus(null)}
              className="group col-span-7 grid grid-cols-subgrid items-center py-[0.6rem] transition-colors duration-200 hover:bg-background-elevated focus-visible:bg-background-elevated focus-visible:outline-offset-0"
            >
              <span
                className={`truncate pr-3 font-medium text-foreground transition-opacity duration-300 ease-cine group-hover:text-accent ${
                  rowDim ? 'opacity-25' : ''
                }`}
              >
                {SHORT[project.slug] ?? project.title}
              </span>
              {stages.map((stage, col) => (
                <span
                  key={stage.key}
                  aria-hidden="true"
                  className={`flex justify-center transition-opacity duration-300 ease-cine ${
                    dim(row, col) ? 'opacity-25' : ''
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    {coverage[col] ? (
                      <circle
                        className="dot-in"
                        style={{
                          animationDelay: `${200 + col * 90 + row * 45}ms`,
                        }}
                        cx="7"
                        cy="7"
                        r="6"
                        fill={`var(--stage-${col})`}
                      />
                    ) : (
                      <line
                        x1="4"
                        x2="10"
                        y1="7"
                        y2="7"
                        stroke="var(--color-border-strong)"
                        strokeWidth="1"
                      />
                    )}
                  </svg>
                </span>
              ))}
              <span
                aria-hidden="true"
                className={`tnum text-right text-foreground transition-opacity duration-300 ease-cine ${
                  rowDim || focus?.kind === 'col' ? 'opacity-25' : ''
                }`}
              >
                {count}
              </span>
            </ViewTransitionLink>
          );
        })}

        {/* Margin: how many projects reach each stage */}
        <div
          aria-hidden="true"
          className="border-t border-foreground pt-2 text-[0.7rem] leading-tight text-faint sm:text-xs"
        >
          projects
        </div>
        {columnTotals.map((total, col) => (
          <div
            key={stages[col].key}
            aria-hidden="true"
            className={`tnum border-t border-foreground pt-2 text-center text-foreground transition-opacity duration-300 ease-cine ${
              (focus?.kind === 'col' && focus.index !== col) ||
              focus?.kind === 'row'
                ? 'opacity-25'
                : ''
            }`}
          >
            {total}
          </div>
        ))}
        <div
          aria-hidden="true"
          className="border-t border-foreground pt-2 text-right text-[0.7rem] leading-tight text-faint sm:text-xs"
        >
          / {rows.length}
        </div>
      </div>

      <figcaption id="fig-1-caption" className="caption mt-5 max-w-[56ch]">
        <span className="font-medium text-foreground">Fig. 1</span> Stages of
        the data-to-product path covered by eight projects, read from each
        project&apos;s own stack. Point at a project or a stage to isolate it;
        select a project to open its case study.
      </figcaption>
    </figure>
  );
}
