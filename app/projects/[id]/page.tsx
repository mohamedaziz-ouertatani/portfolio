import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import ProjectImagesZoom from '@/components/ProjectImagesZoom';
import { ProjectPipeline } from '@/components/sections/ProjectPipeline';
import { Chip } from '@/components/ui/Chip';
import { SectionLabel } from '@/components/ui/SectionLabel';
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
      <Link
        href="/projects"
        className="label-mono inline-flex items-center gap-2 transition-colors hover:text-accent"
      >
        <ArrowLeft size={14} aria-hidden="true" />
        Back to work
      </Link>

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
        <Link
          href="/projects"
          className="label-mono inline-flex items-center gap-2 transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          All work
        </Link>
        <Link
          href={projectHref(next)}
          className="group inline-flex flex-col items-end text-right"
        >
          <span className="label-mono">Next project</span>
          <span className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
            {next.title}
            <ArrowRight size={14} aria-hidden="true" />
          </span>
        </Link>
      </nav>
    </article>
  );
}
