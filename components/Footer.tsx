import Link from 'next/link';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { site } from '@/lib/site';
import { socialLinks } from '@/lib/social';
import { PathMark } from '@/components/ui/PathMark';

const icons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  cv: FileText,
} as const;

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/resume', label: 'Resume' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto print:hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-10 border-t border-border py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="inline-flex items-center gap-3 font-display text-base font-semibold text-foreground">
              <PathMark />
              {site.name}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{site.role}</p>
            <p className="text-sm text-muted-foreground">{site.location}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <h2 className="label mb-4">Navigate</h2>
            <ul className="space-y-1.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground underline-offset-[0.24em] transition-colors hover:text-accent hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 hidden text-xs text-faint md:block">
              Ctrl / Cmd + K to search
            </p>
          </nav>

          <div className="md:col-span-3">
            <h2 className="label mb-4">Connect</h2>
            <ul className="space-y-1.5 text-sm">
              {socialLinks.map((link) => {
                const Icon = icons[link.id];
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      download={link.id === 'cv' || undefined}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2.5 text-foreground underline-offset-[0.24em] transition-colors hover:text-accent hover:underline"
                    >
                      <Icon
                        size={14}
                        aria-hidden="true"
                        className="text-faint"
                      />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <p className="border-t border-border py-5 text-xs text-faint">
          © {currentYear} {site.name}
        </p>
      </div>
    </footer>
  );
}
