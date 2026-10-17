import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import ProjectImagesZoom from '@/components/ProjectImagesZoom';
import { ProjectPipeline } from '@/components/sections/ProjectPipeline';
import { Button } from '@/components/ui/Button';
import { StageStrip } from '@/components/ui/StageStrip';
import { ViewTransitionLink } from '@/components/ui/ViewTransitionLink';
import {
  findProject,
  hasRealScreenshot,
  nextProject,
  projectHref,
  projectsData,
} from '@/lib/projects';
import { stageCoverage } from '@/lib/stages';

export function generateStaticParams() {
  // Slugs are the canonical URLs; the numeric ids still resolve on demand.
  return projectsData.map((project) => ({ id: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const project = findProject(params.id);
  if (!project) return {};

  return {
    title: `${project.title} — Mohamed Aziz Ouertatani`,
    description: project.description,
    alternates: { canonical: projectHref(project) },
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
    },
  };
}

/**
 * One step of the write-up: its number and label sit in the margin, the prose
 * in the reading column, ruled off from the step above. The numbering is the
 * reading order of the method (how it is built, what it looks like, why, how,
 * what came of it, what was decided, what went wrong), so it carries meaning.
 */
function Block({
  step,
  label,
  id,
  children,
}: {
  step: number;
  label: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-x-10 gap-y-3 border-t border-border pt-6 md:grid-cols-12">
      <h2
        id={id}
        className="flex items-baseline gap-3 font-sans text-sm font-medium text-foreground md:col-span-3 md:pt-1"
      >
        <span aria-hidden="true" className="tnum w-5 text-faint">
          {step}
        </span>
        {label}
      </h2>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = findProject(params.id);
  if (!project) return notFound();

  const images = hasRealScreenshot(project) ? (project.images ?? []) : [];
  const next = nextProject(project);
  let step = 0;
  const nextStep = () => ++step;
  const caseStudy = [
    { label: 'Problem', body: project.problem },
    { label: 'Approach', body: project.approach },
    { label: 'Result', body: project.result },
  ].filter((entry): entry is { label: string; body: string } =>
    Boolean(entry.body)
  );

  return (
    <article className="container mx-auto px-4 pb-24 sm:px-6">
      <header className="grid gap-x-10 gap-y-8 pb-14 pt-8 md:pb-16 lg:grid-cols-12">
        <ViewTransitionLink
          href="/projects"
          className="link inline-flex w-fit items-center gap-2 text-sm lg:col-span-12"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to work
        </ViewTransitionLink>

        <div className="lg:col-span-7">
          <h1 className="font-display text-4xl font-semibold leading-[1.04] text-foreground sm:text-5xl">
            {project.title}
          </h1>
          {project.role && (
            <p className="mt-4 text-base text-faint">{project.role}</p>
          )}
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {(project.githubLink || project.liveDemoLink) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.githubLink && (
                <Button
                  href={project.githubLink}
                  variant="primary"
                  icon={<Github size={16} aria-hidden="true" />}
                >
                  View source
                </Button>
              )}
              {project.liveDemoLink && (
                <Button
                  href={project.liveDemoLink}
                  variant="secondary"
                  icon={<ExternalLink size={16} aria-hidden="true" />}
                >
                  Live demo
                </Button>
              )}
            </div>
          )}
        </div>

        {/* The inventory up front: what it covers, then what it is made of */}
        <aside className="space-y-8 lg:col-span-4 lg:col-start-9 lg:pt-3">
          <div>
            <h2 className="label mb-3">Path covered</h2>
            <StageStrip coverage={stageCoverage(project)} showLabels />
          </div>
          <div>
            <h2 className="label mb-3">Stack</h2>
            <p className="text-sm leading-relaxed text-foreground">
              {project.technologies.join(' · ')}
            </p>
          </div>
        </aside>
      </header>

      {project.metrics && project.metrics.length > 0 && (
        <section aria-labelledby="results-heading" className="mb-16">
          <table className="w-full max-w-3xl border-collapse text-left text-[0.9375rem]">
            <caption id="results-heading" className="caption mb-3 text-left">
              <span className="font-medium text-foreground">Table 1</span>{' '}
              Reported numbers for this project.
            </caption>
            <tbody className="border-y border-foreground">
              {project.metrics.map((metric) => (
                <tr
                  key={metric.label}
                  className="border-t border-border first:border-t-0"
                >
                  <th
                    scope="row"
                    className="py-2.5 pr-6 font-normal text-muted-foreground"
                  >
                    {metric.label}
                  </th>
                  <td className="tnum py-2.5 text-right font-medium text-foreground">
                    {metric.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      <div className="space-y-12">
        {project.pipeline && project.pipeline.length > 0 && (
          <section aria-labelledby="pipeline-heading">
            <Block step={nextStep()} label="Architecture" id="pipeline-heading">
              <ProjectPipeline project={project} />
            </Block>
          </section>
        )}

        {images.length > 0 && (
          <section aria-labelledby="screens-heading">
            <Block step={nextStep()} label="Screens" id="screens-heading">
              <ProjectImagesZoom images={images} />
            </Block>
          </section>
        )}

        {caseStudy.map((entry) => (
          <section key={entry.label} aria-label={entry.label}>
            <Block step={nextStep()} label={entry.label}>
              <p className="max-w-[68ch] text-[1.0625rem] leading-relaxed text-foreground">
                {entry.body}
              </p>
            </Block>
          </section>
        ))}

        {project.keyDecisions && project.keyDecisions.length > 0 && (
          <section aria-labelledby="decisions-heading">
            <Block
              step={nextStep()}
              label="Key decisions"
              id="decisions-heading"
            >
              <div className="space-y-7">
                {project.keyDecisions.map((entry) => (
                  <div key={entry.decision} className="max-w-[68ch]">
                    <h3 className="font-sans text-lg font-semibold leading-snug text-foreground">
                      {entry.decision}
                    </h3>
                    <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">
                      {entry.why}
                    </p>
                  </div>
                ))}
              </div>
            </Block>
          </section>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <section aria-labelledby="challenges-heading">
            <Block step={nextStep()} label="Challenges" id="challenges-heading">
              <div className="space-y-7">
                {project.challenges.map((entry) => (
                  <div key={entry.challenge} className="max-w-[68ch]">
                    <h3 className="font-sans text-lg font-semibold leading-snug text-foreground">
                      {entry.challenge}
                    </h3>
                    <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">
                      {entry.resolution}
                    </p>
                  </div>
                ))}
              </div>
            </Block>
          </section>
        )}
      </div>

      <nav
        aria-label="Project navigation"
        className="mt-20 grid gap-6 border-t-2 border-foreground pt-6 sm:grid-cols-2"
      >
        <ViewTransitionLink
          href="/projects"
          className="link inline-flex w-fit items-center gap-2 self-start text-base"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          All work
        </ViewTransitionLink>
        <ViewTransitionLink
          href={projectHref(next)}
          className="group flex items-start justify-between gap-6 sm:justify-end sm:text-right"
        >
          <span>
            <span className="block text-sm text-faint">Next project</span>
            <span className="mt-1 block font-display text-xl font-semibold leading-tight text-foreground group-hover:text-accent sm:text-2xl">
              {next.title}
            </span>
          </span>
          <ArrowRight
            size={22}
            aria-hidden="true"
            className="mt-6 shrink-0 text-accent transition-transform duration-300 ease-cine group-hover:translate-x-1"
          />
        </ViewTransitionLink>
      </nav>
    </article>
  );
}
