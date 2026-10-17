import Image from 'next/image';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { hasRealScreenshot, projectHref, type Project } from '@/lib/projects';
import { stageCoverage } from '@/lib/stages';
import { StageStrip } from '@/components/ui/StageStrip';
import { ViewTransitionLink } from '@/components/ui/ViewTransitionLink';

export interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

/**
 * One row of the work index. Every row carries the same columns (summary,
 * stage strip, links, screen) so the index reads like a table of results.
 * The title is a stretched link; Code and Demo stay individually clickable.
 */
export function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  const hasImage = hasRealScreenshot(project);
  const isPublic = Boolean(project.githubLink || project.liveDemoLink);

  return (
    <article className="group relative grid gap-x-10 gap-y-5 border-t border-border py-8 lg:grid-cols-12">
      <div className="lg:col-span-6">
        <h3 className="text-xl font-semibold leading-tight text-foreground sm:text-2xl">
          <ViewTransitionLink
            href={projectHref(project)}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent group-hover:text-accent"
          >
            {project.title}
          </ViewTransitionLink>
        </h3>

        {project.role && (
          <p className="mt-1 text-sm text-faint">
            {isFeatured ? `Featured · ${project.role}` : project.role}
          </p>
        )}

        <p className="mt-4 line-clamp-4 max-w-[62ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
          {project.result ?? project.description}
        </p>

        <p className="mt-4 text-sm text-faint">
          {project.technologies.slice(0, 6).join(' · ')}
        </p>
      </div>

      <div className="flex flex-col gap-5 lg:col-span-3">
        <StageStrip coverage={stageCoverage(project)} showLabels />

        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-1.5"
            >
              <Github size={14} aria-hidden="true" />
              Code
            </a>
          )}
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-1.5"
            >
              <ExternalLink size={14} aria-hidden="true" />
              Demo
            </a>
          )}
          {!isPublic && <span className="text-faint">No public link yet</span>}

          <span className="inline-flex items-center gap-1.5 font-medium text-accent">
            Case study
            <ArrowRight
              size={14}
              className="transition-transform duration-300 ease-cine group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>

      <div className="hidden lg:col-span-3 lg:block">
        {hasImage && (
          <div className="relative aspect-[16/10] overflow-hidden bg-background-elevated [box-shadow:inset_0_0_0_1px_var(--color-border)]">
            <Image
              src={project.images[0]}
              alt={`Screenshot from ${project.title}`}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 22vw, 0px"
            />
          </div>
        )}
      </div>
    </article>
  );
}
