'use client';

import { useMemo, useState } from 'react';
import { rankedProjects, strongProjects } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { FilterBar } from '@/components/FilterBar';
import { SectionLabel } from '@/components/ui/SectionLabel';

// Filter options come from the curated set only, so the list never offers a
// technology that cannot match anything on screen.
const allTechnologies = Array.from(
  new Set(strongProjects.flatMap((project) => project.technologies))
).sort((a, b) => a.localeCompare(b));

export default function Projects() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );

  const filteredProjects = useMemo(
    () =>
      selectedTechnologies.length === 0
        ? rankedProjects
        : rankedProjects.filter((project) =>
            selectedTechnologies.every((tech) =>
              project.technologies.includes(tech)
            )
          ),
    [selectedTechnologies]
  );

  return (
    <div className="container mx-auto px-4 pb-24 pt-32">
      <header className="mb-14 max-w-3xl">
        <SectionLabel index="02" className="mb-6">
          Work
        </SectionLabel>
        <h1 className="text-4xl font-bold tracking-tightest text-foreground sm:text-5xl md:text-6xl">
          Selected work
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Production-oriented work in data engineering, MLOps and full-stack
          development. Every project is written up as{' '}
          <span className="text-foreground">problem → approach → result</span>,
          so you can see what it was for rather than only what it was built
          with.
        </p>
      </header>

      <FilterBar
        allTechnologies={allTechnologies}
        selectedTechnologies={selectedTechnologies}
        onFilterChange={setSelectedTechnologies}
      />

      <p className="mb-8 font-mono text-xs uppercase tracking-[0.14em] text-faint">
        Showing {filteredProjects.length} of {rankedProjects.length}
      </p>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFeatured={selectedTechnologies.length === 0 && index < 2}
            />
          ))}
        </div>
      ) : (
        <div className="bg-surface/50 rounded-lg border border-border py-20 text-center">
          <p className="text-muted-foreground">
            Nothing matches that combination of technologies.
          </p>
          <button
            type="button"
            onClick={() => setSelectedTechnologies([])}
            className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-accent transition-colors hover:text-accent-strong"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
