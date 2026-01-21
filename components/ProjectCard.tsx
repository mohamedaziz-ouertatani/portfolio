import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { useState } from 'react';
import { withBasePath } from '@/lib/basePath';

export interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

export function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  // Fallback to a known existing asset so cards never show a broken image
  const first =
    project.images && project.images.length > 0
      ? project.images[0]
      : '/og-image.png';
  const imgSrc = withBasePath(first);

  // Compact case study summary
  const summary = [
    project.problem ? `Problem: ${project.problem}` : '',
    project.approach ? `Approach: ${project.approach}` : '',
    project.result ? `Result: ${project.result}` : '',
  ].filter(Boolean);

  // Show first line & "Read more" if needed
  const hasDetails =
    project.problem ||
    project.approach ||
    project.result ||
    !!project.description;

  return (
    <div className="group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
      {/* Featured badge */}
      {isFeatured && (
        <span className="absolute right-4 top-4 z-10 rounded bg-yellow-300 px-2 py-0.5 text-xs font-semibold text-gray-900 dark:bg-yellow-400 dark:text-gray-900">
          Featured
        </span>
      )}

      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <Image
          src={imgSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>

        {project.role && (
          <p className="mb-2 text-xs font-medium text-primary-600 dark:text-primary-400">
            {project.role}
          </p>
        )}

        <p className="mb-2 line-clamp-2 text-sm text-gray-700 dark:text-gray-300">
          {project.description}
        </p>

        {/* Read more for case study */}
        <div className="mb-2">
          {!expanded && !!hasDetails && (
            <>
              {summary[0] && (
                <div className="mb-1 text-xs text-gray-600 dark:text-gray-400">
                  <strong>{summary[0].split(':')[0]}:</strong>{' '}
                  {summary[0].split(':').slice(1).join(':').trim()}
                </div>
              )}
              {summary.length > 1 && (
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="text-xs text-primary-600 hover:underline dark:text-primary-400"
                >
                  Read more
                </button>
              )}
            </>
          )}
          {expanded && (
            <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
              {summary.map((s, idx) => (
                <li key={idx}>
                  <strong>{s.split(':')[0]}:</strong>{' '}
                  {s.split(':').slice(1).join(':').trim()}
                </li>
              ))}
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="text-xs text-primary-600 hover:underline dark:text-primary-400"
              >
                Show less
              </button>
            </ul>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-3 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex flex-wrap gap-3">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-primary-600 hover:underline dark:text-primary-400"
            >
              <svg
                className="mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Code
            </a>
          )}
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-green-700 hover:underline dark:text-green-400"
            >
              <svg
                className="mr-1 h-4 w-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center text-xs text-primary-700 underline hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
