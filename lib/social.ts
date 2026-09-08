import { site } from '@/lib/site';

export interface SocialLink {
  id: 'github' | 'linkedin' | 'email' | 'cv';
  label: string;
  href: string;
  /** External links open in a new tab; internal assets do not. */
  external: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/mohamedaziz-ouertatani',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamed-aziz-ouertatani',
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${site.email}`,
    external: true,
  },
  {
    id: 'cv',
    label: 'CV',
    href: site.cv,
    external: false,
  },
];

export function socialLink(id: SocialLink['id']): SocialLink {
  const link = socialLinks.find((entry) => entry.id === id);
  if (!link) throw new Error(`Unknown social link: ${id}`);
  return link;
}

/** Profile URLs used for schema.org `sameAs`. */
export const sameAs = socialLinks
  .filter((link) => link.id === 'github' || link.id === 'linkedin')
  .map((link) => link.href);
