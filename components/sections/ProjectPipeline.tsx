import { SectionLabel } from '@/components/ui/SectionLabel';
import type { Project } from '@/lib/projects';

/**
 * Renders a project's architecture as an ordered list of stages. It is plain
 * HTML rather than an image so it stays readable at every width, costs
 * nothing to download, and is available to screen readers as real content.
 */
export function ProjectPipeline({ project }: { project: Project }) {
  if (!project.pipeline || project.pipeline.length === 0) return null;

  return (
    <section className="mt-16" aria-labelledby="pipeline-heading">
      <SectionLabel className="mb-6">
        <span id="pipeline-heading">Architecture</span>
      </SectionLabel>

      <ol className="relative space-y-0">
        {project.pipeline.map((stage, index) => {
          const isLast = index === project.pipeline!.length - 1;
          return (
            <li key={stage} className="relative flex gap-5 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <span
                  aria-hidden="true"
                  className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                    isLast ? 'bg-accent' : 'bg-accent-dim'
                  }`}
                />
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="mt-1 w-px flex-1 bg-gradient-to-b from-accent-dim to-border"
                  />
                )}
              </div>

              <div className="pb-1">
                <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-1 text-base text-foreground">{stage}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
