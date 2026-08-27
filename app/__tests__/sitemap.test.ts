import sitemap from '../sitemap';
import { projectsData } from '@/lib/projects';

describe('sitemap', () => {
  it('includes every static route and every project detail route', () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);

    expect(urls.some((u) => u.endsWith('/'))).toBe(true);
    expect(urls.some((u) => u.endsWith('/about'))).toBe(true);
    expect(urls.some((u) => u.endsWith('/projects'))).toBe(true);
    expect(urls.some((u) => u.endsWith('/contact'))).toBe(true);
    expect(urls.some((u) => u.endsWith('/resume'))).toBe(true);

    for (const project of projectsData) {
      expect(urls.some((u) => u.endsWith(`/projects/${project.id}`))).toBe(
        true
      );
    }
  });
});
