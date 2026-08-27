import { projectsData } from '@/lib/projects';
import { notFound } from 'next/navigation';
import ProjectImagesZoom from '@/components/ProjectImagesZoom';
import Image from 'next/image';
import { Chip } from '@/components/ui/Chip';

// Static params for static export (Server Component only!)
export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);
  if (!project) return notFound();

  const images = project.images ?? [];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        {project.title}
      </h1>
      {project.role && (
        <div className="mb-2 text-sm font-medium text-primary-700 dark:text-primary-400">
          {project.role}
        </div>
      )}

      <div className="mb-6 text-lg text-muted-foreground">
        {project.description}
      </div>

      {/* Images with modal zoom */}
      <ProjectImagesZoom images={images} />

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
          <Chip key={tech}>{tech}</Chip>
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
