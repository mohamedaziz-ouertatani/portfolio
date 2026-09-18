import Image from 'next/image';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { hasRealScreenshot, projectHref, type Project } from '@/lib/projects';
import { glazeFor } from '@/lib/glaze';
import { ViewTransitionLink } from '@/components/ui/ViewTransitionLink';

export interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
  /** Position in the listing; picks the glaze so neighbours differ. */
  index?: number;
}

const glazes = [
  'glaze-cobalt',
  'glaze-turquoise',
  'glaze-saffron',
  'glaze-deep',
];

/** Outlined in the tile's own ink, so it reads on every glaze. */
const outlined =
  'rounded-sm px-2 py-0.5 text-xs font-semibold [box-shadow:inset_0_0_0_1.5px_currentColor]';

export function ProjectCard({
  project,
  isFeatured = false,
  index = 0,
}: ProjectCardProps) {
  const hasImage = hasRealScreenshot(project);
  const glazed = Boolean(project.githubLink || project.liveDemoLink);
  const face = glazeFor(project, glazes[index % glazes.length]);

  return (
    <article
      className={`tile group relative flex h-full flex-col ${face} [&_a:focus-visible]:outline-none`}
    >
      {hasImage && (
        <div className="relative h-44 w-full shrink-0 overflow-hidden">
          <Image
            src={project.images[0]}
            alt={`Screenshot from ${project.title}`}
            fill
            className="object-cover object-top transition-transform duration-500 ease-cine group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-extrabold leading-[1.05] tracking-tight">
          <ViewTransitionLink
            href={projectHref(project)}
            // Stretched link: the whole tile is the target, while the nested
            // GitHub and demo links stay individually clickable above it.
            className="after:absolute after:inset-0 after:content-[''] focus-visible:after:[outline-offset:-8px] focus-visible:after:[outline:3px_solid_currentColor]"
          >
            {project.title}
          </ViewTransitionLink>
        </h3>

        {project.role && (
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] opacity-80">
            {isFeatured ? `Featured · ${project.role}` : project.role}
          </p>
        )}

        <p className="mt-4 line-clamp-4 text-base leading-snug opacity-90">
          {project.result ?? project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <li key={tech} className={outlined}>
              {tech}
            </li>
          ))}
        </ul>

        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm font-bold">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 underline decoration-2 underline-offset-4 hover:no-underline"
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
              className="inline-flex items-center gap-1.5 underline decoration-2 underline-offset-4 hover:no-underline"
            >
              <ExternalLink size={14} aria-hidden="true" />
              Demo
            </a>
          )}
          {!glazed && <span className="opacity-80">No public link yet</span>}

          <span className="ml-auto inline-flex items-center gap-1.5">
            Case study
            <ArrowRight
              size={14}
              className="transition-transform duration-300 ease-settle group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </article>
  );
}
