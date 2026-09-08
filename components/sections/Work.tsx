import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Chip } from '@/components/ui/Chip';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectWorld } from '@/components/three/ProjectWorld';
import { rankedProjects, projectHref } from '@/lib/projects';

const featured = rankedProjects.slice(0, 2);
const rest = rankedProjects.slice(2, 5);

export function Work() {
  return (
    <Section
      id="work"
      index="02"
      label="Work"
      heading="What I build"
      caption="Production-oriented systems in data engineering, MLOps and full-stack development — each one written up as problem, approach and result."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {featured.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.06}>
            <Link
              href={projectHref(project)}
              className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface/70 transition-colors duration-300 ease-cine hover:border-accent-dim"
            >
              {/* Each flagship carries its own miniature environment. */}
              <div className="relative h-52 overflow-hidden border-b border-border bg-background-elevated">
                <ProjectWorld slug={project.slug} />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                {project.role && (
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
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

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Read the case study
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 ease-cine group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {rest.map((project) => (
            <li key={project.id}>
              <Link
                href={projectHref(project)}
                className="group flex items-center justify-between gap-6 py-5 transition-colors hover:text-accent"
              >
                <span className="min-w-0">
                  <span className="block truncate text-base font-medium text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </span>
                  <span className="mt-1 block truncate font-mono text-[11px] text-faint">
                    {project.technologies.slice(0, 4).join(' · ')}
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-faint transition-colors group-hover:text-accent"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
        >
          All projects
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </Reveal>
    </Section>
  );
}
