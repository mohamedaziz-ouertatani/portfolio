'use client';

import { useMemo, useState } from 'react';
import { rankedProjects, strongProjects } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { FilterBar } from '@/components/FilterBar';

// Filter options come from the curated set only, so the list never offers a
// technology that cannot match anything on screen. Most used first.
const technologyCounts = strongProjects
  .flatMap((project) => project.technologies)
  .reduce<Record<string, number>>((counts, tech) => {
    counts[tech] = (counts[tech] ?? 0) + 1;
    return counts;
  }, {});

const allTechnologies = Object.keys(technologyCounts).sort(
  (a, b) => technologyCounts[b] - technologyCounts[a] || a.localeCompare(b)
);

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
    <div className="container mx-auto px-4 pb-24 pt-12 sm:px-6 md:pt-16">
      <header className="mb-14 grid gap-x-10 gap-y-6 lg:grid-cols-12">
        <h1 className="font-display text-5xl font-semibold leading-[1] text-foreground sm:text-6xl lg:col-span-5">
          Selected work
        </h1>
        <p className="max-w-[60ch] text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7 lg:pt-2">
          Production-oriented work in data engineering, MLOps and full-stack
          development. Every project is written up as{' '}
          <strong className="font-medium text-foreground">
            problem, approach, result
          </strong>
          , so you can see what it was for rather than only what it was built
          with. The five dots on each row mark the stages of the data-to-product
          path its stack covers: data, analysis, model, serve, interface.
        </p>
      </header>

      <FilterBar
        allTechnologies={allTechnologies}
        counts={technologyCounts}
        selectedTechnologies={selectedTechnologies}
        onFilterChange={setSelectedTechnologies}
      />

      <p className="tnum mb-2 text-sm text-faint">
        Showing {filteredProjects.length} of {rankedProjects.length}
      </p>

      {filteredProjects.length > 0 ? (
        <div className="border-b border-border">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFeatured={selectedTechnologies.length === 0 && index < 2}
            />
          ))}
        </div>
      ) : (
        <div className="border-y border-border py-20 text-center">
          <p className="text-lg text-muted-foreground">
            Nothing matches that combination of technologies.
          </p>
          <button
            type="button"
            onClick={() => setSelectedTechnologies([])}
            className="link mt-4 text-base font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
