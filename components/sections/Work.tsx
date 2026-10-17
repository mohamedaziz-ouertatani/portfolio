import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { StageStrip } from '@/components/ui/StageStrip';
import { ViewTransitionLink } from '@/components/ui/ViewTransitionLink';
import { findProject, projectHref } from '@/lib/projects';
import { stageCoverage } from '@/lib/stages';

// Curated by hand rather than derived from `priority`: this order is specific
// to the homepage plate and shouldn't shift with the /projects ranking.
const featured = [
  {
    slug: 'dressme',
    title: 'DressMe',
    category: 'Computer Vision / LLM Agents',
  },
  {
    slug: 'researchbridge',
    title: 'ResearchBridge',
    category: 'Research Intelligence / AI',
  },
  {
    slug: 'estate-mind',
    title: 'Estate-Mind',
    category: 'Data Engineering / Data Science',
  },
  { slug: 'biflow', title: 'BIFlow', category: 'Multi-Agent Systems / BI' },
  {
    slug: 'smart-inventory',
    title: 'Smart Inventory Forecasting',
    category: 'Machine Learning / MLOps',
  },
  {
    slug: 'mlops-pipeline',
    title: 'MLOps Pipeline',
    category: 'MLOps / Machine Learning',
  },
]
  .map((entry) => {
    const project = findProject(entry.slug);
    return project ? { ...entry, project } : null;
  })
  .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

/**
 * Small multiples: six panels in one frame on one label grid. Each panel is
 * a six-row subgrid (title, field, summary, stage strip, reported numbers,
 * status), so every slot lines up across a row and the eye compares projects
 * instead of re-reading layouts. Panels are separated by hairlines, not boxed.
 */
export function Work() {
  return (
    <Section
      id="work"
      heading="Selected work"
      caption="Six projects across fashion AI, research tooling, data engineering, multi-agent systems, and ML. Each one opens as a case study."
    >
      <ul className="grid border-b border-border md:grid-cols-2 lg:grid-cols-3">
        {featured.map(({ project, title, category }) => {
          const isPublic = Boolean(project.githubLink || project.liveDemoLink);
          const metrics = project.metrics?.slice(0, 3) ?? [];

          return (
            <li
              key={project.id}
              className="group relative flex flex-col border-t border-border py-7 md:row-span-6 md:grid md:grid-rows-subgrid md:gap-y-0 md:px-6 lg:px-7 lg:[&:not(:nth-child(3n+1))]:border-l md:[&:nth-child(even)]:border-l lg:[&:nth-child(even)]:border-l-0"
            >
              <h3 className="text-xl font-semibold leading-tight text-foreground sm:text-2xl md:self-start">
                <ViewTransitionLink
                  href={projectHref(project)}
                  className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-[-2px] focus-visible:after:outline-accent group-hover:text-accent"
                >
                  {title}
                </ViewTransitionLink>
              </h3>
              <p className="mt-1 text-sm text-faint">{category}</p>

              <p className="mt-4 max-w-[48ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <StageStrip
                coverage={stageCoverage(project)}
                showLabels
                className="mt-6"
              />

              {metrics.length > 0 ? (
                <dl className="mt-6 text-sm md:self-start">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-baseline justify-between gap-4 border-t border-border py-1.5"
                    >
                      <dt className="text-muted-foreground">{metric.label}</dt>
                      <dd className="tnum text-right font-medium text-foreground">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <dl className="mt-6 text-sm md:self-start">
                  <div className="flex items-baseline justify-between gap-4 border-t border-border py-1.5">
                    <dt className="text-muted-foreground">Role</dt>
                    <dd className="text-right font-medium text-foreground">
                      {project.role}
                    </dd>
                  </div>
                </dl>
              )}

              <p className="mt-auto flex items-center justify-between gap-4 pt-6 text-sm md:self-end">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full ${
                      isPublic
                        ? 'bg-foreground'
                        : '[box-shadow:inset_0_0_0_1px_var(--color-border-strong)]'
                    }`}
                  />
                  {isPublic ? 'Code is public' : 'No public link yet'}
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-accent">
                  Case study
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-cine group-hover:translate-x-1"
                  />
                </span>
              </p>
            </li>
          );
        })}
      </ul>

      <Link
        href="/projects"
        className="link mt-8 inline-flex items-center gap-2 text-base font-medium"
      >
        All projects
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </Section>
  );
}
