import { SectionLabel } from '@/components/ui/SectionLabel';
import type { Project } from '@/lib/projects';

/**
 * Renders a project's architecture as an ordered run of tiles. It is plain
 * HTML rather than an image so it stays readable at every width, costs
 * nothing to download, and is available to screen readers as real content.
 * The numbering is kept because the sequence is the information: each stage
 * feeds the next, and the last tile, in cobalt, is what the system produces.
 */
export function ProjectPipeline({ project }: { project: Project }) {
  if (!project.pipeline || project.pipeline.length === 0) return null;

  const last = project.pipeline.length - 1;

  return (
    <section aria-labelledby="pipeline-heading">
      <SectionLabel className="mb-6">
        <span id="pipeline-heading">Architecture</span>
      </SectionLabel>

      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {project.pipeline.map((stage, index) => {
          const isLast = index === last;
          return (
            <li
              key={stage}
              className={`tile flex min-h-[7.5rem] gap-4 p-5 ${
                isLast ? 'glaze-cobalt' : 'bg-background-elevated'
              }`}
            >
              <span
                aria-hidden="true"
                className={`tnum font-display text-4xl font-extrabold leading-none ${
                  isLast ? 'text-glaze-saffron' : 'text-accent'
                }`}
              >
                {index + 1}
              </span>
              <p className="self-center text-base font-semibold leading-snug">
                {stage}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
