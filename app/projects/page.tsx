'use client';

import { useState, useMemo } from 'react';
import { projectsData } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { FilterBar } from '@/components/FilterBar';

export default function Projects() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );

  // All technologies for the filter bar
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

  // Projects filtered by tech, then sorted by priority
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

  // Featured: priority >= 90, up to 4
  const featuredProjects = filteredProjects
    .filter((p) => (p.priority ?? 0) >= 90)
    .slice(0, 4);
  // Everything else
  const moreProjects = filteredProjects.filter(
    (p) => !featuredProjects.includes(p)
  );

  const filtersActive = selectedTechnologies.length > 0;

  return (
    <div className="container px-4 py-16">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore my work across full stack engineering, data science & ML,
          business intelligence, desktop, and game development. Each card
          includes{' '}
          <span className="font-medium text-gray-900 dark:text-white">
            Problem → Approach → Result
          </span>{' '}
          so you can see real impact, not just code.
        </p>
      </div>

      <FilterBar
        allTechnologies={allTechnologies}
        selectedTechnologies={selectedTechnologies}
        onFilterChange={setSelectedTechnologies}
      />

      <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
        Showing {filteredProjects.length} of {projectsData.length} projects
        {filtersActive && (
          <span className="ml-2 rounded bg-primary-100 px-2 py-0.5 text-xs text-primary-700 dark:bg-primary-900/20 dark:text-primary-400">
            Filter active
          </span>
        )}
      </div>

      {/* ---- Featured Projects ---- */}
      {featuredProjects.length > 0 && (
        <>
          <h2 className="mb-6 mt-12 text-center text-2xl font-bold text-primary-700 dark:text-primary-400">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFeatured // Pass a prop so the ProjectCard can render a badge or distinction!
              />
            ))}
          </div>
        </>
      )}

      {/* ---- Data & ML Emphasis Strip ---- */}
      {featuredProjects.length > 0 && (
        <div className="my-12 rounded-xl bg-blue-50 px-6 py-6 text-center text-blue-900 dark:bg-blue-900/20 dark:text-blue-200">
          <b>Data & ML Emphasis:</b> My portfolio includes smart inventory
          forecasting, MLOps pipelines, BI dashboards, and deep-dive data
          analysis— spanning experiment tracking, production-grade APIs, and
          actionable reports for decision makers.
        </div>
      )}

      {/* ---- More Projects ---- */}
      {moreProjects.length > 0 && (
        <>
          <h3 className="mb-4 mt-8 text-center text-xl font-semibold text-gray-800 dark:text-gray-200">
            More Projects
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}

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
