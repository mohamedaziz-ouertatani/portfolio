import { projectsData } from '@/lib/projects';
import { notFound } from 'next/navigation';
import ProjectImagesZoom from '@/components/ProjectImagesZoom';
import Image from 'next/image';

// Import and use withBasePath for static/public file paths
import { withBasePath } from '@/lib/basePath';

// Static params for static export (Server Component only!)
export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);
  if (!project) return notFound();

  // Use withBasePath for images array if needed (e.g., when used as src for <Image>)
  // If your images are relative (e.g., '/images/foo.jpg'), wrap them; else, you can skip.
  const imagesWithBasePath =
    project.images?.map((img) => withBasePath(img)) ?? [];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
        {project.title}
      </h1>
      {project.role && (
        <div className="mb-2 text-sm font-medium text-primary-700 dark:text-primary-400">
          {project.role}
        </div>
      )}

      <div className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        {project.description}
      </div>

      {/* Images with modal zoom, using withBasePath */}
      <ProjectImagesZoom images={imagesWithBasePath} />

      <ul className="text-md mb-8 space-y-2">
        {project.problem && (
          <li>
            <strong>Problem:</strong> {project.problem}
          </li>
        )}
        {project.approach && (
          <li>
            <strong>Approach:</strong> {project.approach}
          </li>
        )}
        {project.result && (
          <li>
            <strong>Result:</strong> {project.result}
          </li>
        )}
      </ul>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-6">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 underline dark:text-primary-400"
          >
            GitHub Code
          </a>
        )}
        {project.liveDemoLink && (
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 underline dark:text-green-400"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
