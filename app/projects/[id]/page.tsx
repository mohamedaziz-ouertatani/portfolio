import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import ProjectImagesZoom from '@/components/ProjectImagesZoom';
import { ProjectPipeline } from '@/components/sections/ProjectPipeline';
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
    <article className="container mx-auto max-w-4xl px-4 pb-24 pt-32">
      <ViewTransitionLink
        href="/projects"
        className="label-mono inline-flex items-center gap-2 transition-colors hover:text-accent"
      >
        <ArrowLeft size={14} aria-hidden="true" />
        Back to work
      </ViewTransitionLink>

      <header className="mt-10 border-b border-border pb-10">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          {project.title}
        </h1>
        {project.role && (
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {project.role}
          </p>
        )}
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.metrics && project.metrics.length > 0 && (
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="label-mono text-faint">{metric.label}</dt>
                <dd className="mt-1 text-2xl font-semibold text-foreground">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-8 flex flex-wrap gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={15} aria-hidden="true" />
              View source
            </a>
          )}
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <ExternalLink size={15} aria-hidden="true" />
              Live demo
            </a>
          )}
        </div>
      </header>

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
            <div key={entry.label}>
              <SectionLabel className="mb-3">{entry.label}</SectionLabel>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {entry.body}
              </p>
            </div>
          ))}
        </section>
      )}

      {project.keyDecisions && project.keyDecisions.length > 0 && (
        <section className="mt-16" aria-labelledby="decisions-heading">
          <SectionLabel className="mb-6">
            <span id="decisions-heading">Key decisions</span>
          </SectionLabel>
          <div className="space-y-8">
            {project.keyDecisions.map((entry) => (
              <div key={entry.decision}>
                <p className="text-base font-medium text-foreground">
                  {entry.decision}
                </p>
                <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                  {entry.why}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.challenges && project.challenges.length > 0 && (
        <section className="mt-16" aria-labelledby="challenges-heading">
          <SectionLabel className="mb-6">
            <span id="challenges-heading">Challenges</span>
          </SectionLabel>
          <div className="space-y-8">
            {project.challenges.map((entry) => (
              <div key={entry.challenge}>
                <p className="text-base font-medium text-foreground">
                  {entry.challenge}
                </p>
                <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                  {entry.resolution}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-16">
        <SectionLabel className="mb-4">Stack</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
      </section>

      <nav
        aria-label="Project navigation"
        className="mt-20 flex items-center justify-between border-t border-border pt-10"
      >
        <ViewTransitionLink
          href="/projects"
          className="label-mono inline-flex items-center gap-2 transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          All work
        </ViewTransitionLink>
        <ViewTransitionLink
          href={projectHref(next)}
          className="group inline-flex flex-col items-end text-right"
        >
          <span className="label-mono">Next project</span>
          <span className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
            {next.title}
            <ArrowRight size={14} aria-hidden="true" />
          </span>
        </ViewTransitionLink>
      </nav>
    </article>
  );
}
