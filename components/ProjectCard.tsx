import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { hasRealScreenshot, projectHref, type Project } from '@/lib/projects';
import { Chip } from '@/components/ui/Chip';

export interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

export function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  const hasImage = hasRealScreenshot(project);
  const imgSrc = hasImage ? project.images[0] : undefined;
  const hasLinks = Boolean(project.githubLink || project.liveDemoLink);

  return (
    <article className="bg-surface/60 group relative flex h-full flex-col overflow-hidden rounded-lg border border-border transition-colors duration-300 ease-cine hover:border-accent-dim">
      <div className="relative h-44 w-full overflow-hidden border-b border-border bg-background-elevated">
        {hasImage && imgSrc ? (
          <>
            <Image
              src={imgSrc}
              alt={`Screenshot from ${project.title}`}
              fill
              // Most of these are light-UI screenshots. Left at full
              // brightness they glare against the dark page and pull the eye
              // away from the writing, so they sit back until hovered.
              className="object-cover opacity-55 transition-all duration-500 ease-cine group-hover:scale-[1.03] group-hover:opacity-85"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div
              aria-hidden="true"
              className="via-surface/30 absolute inset-0 bg-gradient-to-t from-surface to-transparent"
            />
          </>
        ) : (
          <div className="grid-backdrop flex h-full items-center justify-center">
            <span className="label-mono">No screenshot yet</span>
          </div>
        )}

        {isFeatured && (
          <span className="bg-background/85 absolute right-3 top-3 rounded-sm border border-accent-dim px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold leading-snug text-foreground">
          <Link
            href={projectHref(project)}
            // Stretched link: the whole card is the target, while the nested
            // GitHub and demo links stay individually clickable above it.
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none group-hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>

        {project.role && (
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
            {project.role}
          </p>
        )}

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {project.result ?? project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-5 pt-6">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-accent"
            >
              <Github size={13} aria-hidden="true" />
              Code
            </a>
          )}
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-accent"
            >
              <ExternalLink size={13} aria-hidden="true" />
              Demo
            </a>
          )}
          {!hasLinks && (
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              No public link yet
            </span>
          )}

          <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            Case study
            <ArrowRight
              size={13}
              className="transition-transform duration-300 ease-cine group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </article>
  );
}
