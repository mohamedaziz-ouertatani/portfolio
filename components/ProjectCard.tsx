import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { prefix } from '@/lib/basePath';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Fallback to a known existing asset so cards never show a broken image
  const imgSrc =
    project.images && project.images.length > 0
      ? project.images[0]
      : '/og-image.png';

  return (
    <div className="group flex h-full flex-col rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <Image
          loader={({ src }) => `${prefix}${src}`}
          src={imgSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // Optional perceived-performance improvement:
          // placeholder="blur"
          // blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCc+PC9zdmc+"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        {project.role && (
          <p className="mb-3 text-sm font-medium text-primary-600 dark:text-primary-400">
            {project.role}
          </p>
        )}

        {/* Case Study Structure */}
        {project.problem && (
          <div className="mb-3">
            <h4 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              Problem
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {project.problem}
            </p>
          </div>
        )}

        {project.approach && (
          <div className="mb-3">
            <h4 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              Approach
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {project.approach}
            </p>
          </div>
        )}

        {project.result && (
          <div className="mb-4">
            <h4 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              Result
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {project.result}
            </p>
          </div>
        )}

        {/* Fallback to description if case study fields are not present */}
        {!project.problem && !project.approach && !project.result && (
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
        )}

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
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
              className="inline-flex items-center text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
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
              className="inline-flex items-center text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
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
        </div>
      </div>
    </div>
  );
}
