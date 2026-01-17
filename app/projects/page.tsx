'use client';

import { useState, useMemo } from 'react';
import type { Metadata } from 'next';
import { projectsData } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { FilterBar } from '@/components/FilterBar';

export default function Projects() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projectsData.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Sort helper: higher priority first (missing priority = 0)
  const byPriorityDesc = (a: { priority?: number }, b: { priority?: number }) =>
    (b.priority ?? 0) - (a.priority ?? 0);

  // Filter projects based on selected technologies, then sort by priority
  const filteredProjects = useMemo(() => {
    const base =
      selectedTechnologies.length === 0
        ? projectsData
        : projectsData.filter((project) =>
            selectedTechnologies.every((tech) =>
              project.technologies.includes(tech)
            )
          );

    return [...base].sort(byPriorityDesc);
  }, [selectedTechnologies]);

  return (
    <div className="container px-4 py-16">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A collection of projects I&apos;ve worked on
        </p>
      </div>

      <FilterBar
        allTechnologies={allTechnologies}
        selectedTechnologies={selectedTechnologies}
        onFilterChange={setSelectedTechnologies}
      />

      <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        Showing {filteredProjects.length} of {projectsData.length} projects
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            No projects found matching the selected filters.
          </p>
          <button
            onClick={() => setSelectedTechnologies([])}
            className="mt-4 text-primary-600 hover:underline dark:text-primary-400"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
