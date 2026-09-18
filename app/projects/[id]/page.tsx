import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import ProjectImagesZoom from '@/components/ProjectImagesZoom';
import { ProjectPipeline } from '@/components/sections/ProjectPipeline';
import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ViewTransitionLink } from '@/components/ui/ViewTransitionLink';
import {
  findProject,
  hasRealScreenshot,
  nextProject,
  projectHref,
  projectsData,
} from '@/lib/projects';

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

/** One block of the write-up: a small-caps label beside its prose. */
function Block({
  label,
  id,
  children,
}: {
  label: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-3 border-t-2 border-border pt-8 md:grid-cols-[10rem_1fr] md:gap-10">
      <SectionLabel className="md:pt-1.5">
        <span id={id}>{label}</span>
      </SectionLabel>
      <div>{children}</div>
    </div>
  );
}

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = findProject(params.id);
  if (!project) return notFound();

  const images = hasRealScreenshot(project) ? (project.images ?? []) : [];
  const next = nextProject(project);
  const caseStudy = [
    { label: 'Problem', body: project.problem },
    { label: 'Approach', body: project.approach },
    { label: 'Result', body: project.result },
  ].filter((entry): entry is { label: string; body: string } =>
    Boolean(entry.body)
  );

  return (
    <article>
      {/* The cobalt masthead: the wall, with this project's name set into it */}
      <header className="zone-cobalt field-cobalt">
        <div className="container mx-auto px-4 pb-14 pt-8 md:pb-20">
          <ViewTransitionLink
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-foreground underline decoration-2 underline-offset-[6px] transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to work
          </ViewTransitionLink>

          <h1 className="mt-10 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          {project.role && (
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-accent">
              {project.role}
            </p>
          )}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {project.metrics && project.metrics.length > 0 && (
            <dl className="mt-10 flex flex-wrap gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="tile tile-sm zone-plaster flex min-w-[9rem] flex-col-reverse px-5 py-4"
                >
                  <dd className="tnum font-display text-4xl font-extrabold leading-none text-accent">
                    {metric.value}
                  </dd>
                  <dt className="mb-2 text-sm font-semibold text-muted-foreground">
                    {metric.label}
                  </dt>
                </div>
              ))}
            </dl>
          )}

          {(project.githubLink || project.liveDemoLink) && (
            <div className="mt-10 flex flex-wrap gap-3">
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
      </header>

      <div className="container mx-auto max-w-5xl px-4 pb-24 pt-16">
        <ProjectPipeline project={project} />

        {images.length > 0 && (
          <section className="mt-16">
            <SectionLabel className="mb-6">Screens</SectionLabel>
            <ProjectImagesZoom images={images} />
          </section>
        )}

        {caseStudy.length > 0 && (
          <section className="mt-16 space-y-10">
            {caseStudy.map((entry) => (
              <Block key={entry.label} label={entry.label}>
                <p className="max-w-[68ch] text-lg leading-relaxed text-foreground">
                  {entry.body}
                </p>
              </Block>
            ))}
          </section>
        )}

        {project.keyDecisions && project.keyDecisions.length > 0 && (
          <section className="mt-16" aria-labelledby="decisions-heading">
            <Block label="Key decisions" id="decisions-heading">
              <div className="space-y-8">
                {project.keyDecisions.map((entry) => (
                  <div key={entry.decision} className="max-w-[68ch]">
                    <h3 className="text-xl font-extrabold leading-snug tracking-tight text-foreground">
                      {entry.decision}
                    </h3>
                    <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                      {entry.why}
                    </p>
                  </div>
                ))}
              </div>
            </Block>
          </section>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <section className="mt-16" aria-labelledby="challenges-heading">
            <Block label="Challenges" id="challenges-heading">
              <div className="space-y-8">
                {project.challenges.map((entry) => (
                  <div key={entry.challenge} className="max-w-[68ch]">
                    <h3 className="text-xl font-extrabold leading-snug tracking-tight text-foreground">
                      {entry.challenge}
                    </h3>
                    <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                      {entry.resolution}
                    </p>
                  </div>
                ))}
              </div>
            </Block>
          </section>
        )}

        <section className="mt-16">
          <Block label="Stack">
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <Chip>{tech}</Chip>
                </li>
              ))}
            </ul>
          </Block>
        </section>

        <nav
          aria-label="Project navigation"
          className="mt-20 grid gap-3 sm:grid-cols-[auto_1fr]"
        >
          <ViewTransitionLink
            href="/projects"
            className="tile tile-sm inline-flex items-center gap-2 bg-background-elevated px-6 py-5 text-base font-bold text-foreground transition-colors hover:bg-border focus-visible:outline-none focus-visible:[outline-offset:-8px] focus-visible:[outline:3px_solid_var(--color-accent)]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            All work
          </ViewTransitionLink>
          <ViewTransitionLink
            href={projectHref(next)}
            className="tile glaze-cobalt group flex items-center justify-between gap-6 px-6 py-5 transition-colors hover:bg-[#0f2f73] focus-visible:outline-none focus-visible:[outline-offset:-8px] focus-visible:[outline:3px_solid_currentColor]"
          >
            <span>
              <span className="block font-display text-xl font-extrabold leading-tight sm:text-2xl">
                {next.title}
              </span>
              <span className="mt-1 block text-sm font-semibold opacity-80">
                Next project
              </span>
            </span>
            <ArrowRight
              size={26}
              aria-hidden="true"
              className="shrink-0 text-glaze-saffron transition-transform duration-300 ease-settle group-hover:translate-x-1"
            />
          </ViewTransitionLink>
        </nav>
      </div>
    </article>
  );
}
