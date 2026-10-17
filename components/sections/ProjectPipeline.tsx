import type { Project } from '@/lib/projects';

/**
 * A project's architecture as numbered steps on one rule. It is plain HTML so
 * it stays readable at every width and is real content for screen readers.
 * The numbering is kept because the sequence is the information: each stage
 * feeds the next, and the last, closed in ink, is what the system produces.
 */
export function ProjectPipeline({ project }: { project: Project }) {
  if (!project.pipeline || project.pipeline.length === 0) return null;

  const last = project.pipeline.length - 1;

  return (
    <ol className="relative">
      {project.pipeline.map((stage, index) => {
        const isLast = index === last;
        return (
          <li
            key={stage}
            className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-5 last:pb-0"
          >
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-[0.6875rem] top-6 w-px bg-border-strong"
              />
            )}
            <span
              aria-hidden="true"
              className={`tnum relative z-10 flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
                isLast
                  ? 'bg-foreground text-background'
                  : 'bg-background text-foreground [box-shadow:inset_0_0_0_1px_var(--color-foreground)]'
              }`}
            >
              {index + 1}
            </span>
            <p
              className={`pt-0.5 text-[0.9375rem] leading-snug ${
                isLast ? 'font-medium text-foreground' : 'text-muted-foreground'
              }`}
            >
              {stage}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
