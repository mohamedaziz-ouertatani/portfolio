'use client';

import { useMemo, useState } from 'react';
import { rankedProjects, strongProjects } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { FilterBar } from '@/components/FilterBar';

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
    <div className="container mx-auto px-4 pb-24 pt-14 md:pt-20">
      <header className="mb-14 max-w-3xl">
        <h1 className="text-5xl font-extrabold leading-[1] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Selected work
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Production-oriented work in data engineering, MLOps and full-stack
          development. Every project is written up as{' '}
          <strong className="font-bold text-foreground">
            problem, approach, result
          </strong>
          , so you can see what it was for rather than only what it was built
          with. Glazed tiles have public code; bare bisque means no public link
          yet.
        </p>
      </header>

      <FilterBar
        allTechnologies={allTechnologies}
        selectedTechnologies={selectedTechnologies}
        onFilterChange={setSelectedTechnologies}
      />

      <p className="label mb-8">
        Showing {filteredProjects.length} of {rankedProjects.length}
      </p>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isFeatured={selectedTechnologies.length === 0 && index < 2}
            />
          ))}
        </div>
      ) : (
        <div className="tile bg-background-elevated py-20 text-center">
          <p className="text-lg text-muted-foreground">
            Nothing matches that combination of technologies.
          </p>
          <button
            type="button"
            onClick={() => setSelectedTechnologies([])}
            className="mt-4 text-base font-bold text-accent underline decoration-2 underline-offset-4 transition-colors hover:text-accent-strong"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
