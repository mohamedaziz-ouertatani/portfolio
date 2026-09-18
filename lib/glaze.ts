import type { Project } from '@/lib/projects';

/**
 * Glaze follows truth: a project with public code or a live demo is glazed in
 * a colour; a project with no public link yet is bare bisque. The two never
 * blend, so the wall never claims more than the links behind it.
 */
export function glazeFor(project: Project, colour: string): string {
  return project.githubLink || project.liveDemoLink ? colour : 'glaze-bisque';
}
