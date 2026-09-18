import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { hasRealScreenshot, findProject, projectHref } from '@/lib/projects';
import { ViewTransitionLink } from '@/components/ui/ViewTransitionLink';

// Curated by hand rather than derived from `priority`: this row order and
// category pairing is specific to the homepage's six-project pitch, and
// shouldn't shift just because the /projects ranking changes.
const featured = [
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
  {
    slug: 'biflow',
    title: 'BIFlow',
    category: 'Multi-Agent Systems / BI',
  },
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
  {
    slug: 'business-intelligence-dashboards',
    title: 'Business Intelligence Dashboards',
    category: 'Business Intelligence / Analytics',
  },
]
  .map(({ slug, title, category }) => {
    const project = findProject(slug);
    return project ? { project, title, category } : null;
  })
  .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

export function Work() {
  return (
    <Section
      id="work"
      index="02"
      label="Work"
      heading="Selected work"
      caption="Six projects across research tooling, data engineering, multi-agent systems, and ML."
    >
      <Reveal>
        <ul className="border-y border-border">
          {featured.map(({ project, title, category }, index) => {
            const hasImage = hasRealScreenshot(project);
            return (
              <li
                key={project.id}
                className="group border-b border-border last:border-b-0"
              >
                <ViewTransitionLink
                  href={projectHref(project)}
                  className="flex items-start gap-6 py-6 focus-visible:outline-none"
                >
                  <span className="mt-1 shrink-0 font-mono text-xs text-faint">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 ease-cine group-hover:text-accent sm:text-2xl">
                      {title}
                    </h3>

                    <div className="grid overflow-hidden transition-all duration-300 ease-cine [grid-template-rows:0fr] group-focus-within:[grid-template-rows:1fr] group-hover:[grid-template-rows:1fr]">
                      <div className="min-h-0">
                        <div className="flex items-start gap-4 pt-4">
                          <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-sm border border-border bg-background-elevated sm:h-24 sm:w-36">
                            {hasImage ? (
                              <Image
                                src={project.images[0]}
                                alt={`Screenshot from ${project.title}`}
                                fill
                                className="object-cover"
                                sizes="150px"
                              />
                            ) : (
                              <div className="grid-backdrop flex h-full items-center justify-center">
                                <span className="label-mono text-[9px]">
                                  No preview
                                </span>
                              </div>
                            )}
                          </div>
                          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <span className="mt-1 hidden shrink-0 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em] text-faint transition-colors duration-300 ease-cine group-hover:text-muted-foreground sm:block">
                    {category}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-faint transition-colors duration-300 ease-cine group-hover:text-accent"
                    aria-hidden="true"
                  />
                </ViewTransitionLink>
              </li>
            );
          })}
        </ul>

        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
        >
          All projects
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </Reveal>
    </Section>
  );
}
