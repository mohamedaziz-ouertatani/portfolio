import Link from 'next/link';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { site } from '@/lib/site';
import { socialLinks } from '@/lib/social';

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
    <footer className="mt-auto border-t border-border bg-background">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="font-mono text-sm font-bold tracking-[0.2em] text-foreground">
            {site.shortName}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{site.name}</p>
          <p className="text-sm text-faint">{site.role}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="label-mono mb-4 flex items-center gap-2">
            Navigate
            <span className="hidden font-mono text-[11px] font-normal normal-case tracking-normal text-faint md:inline">
              &#8984;K to search
            </span>
          </h2>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label-mono mb-4">Connect</h2>
          <ul className="space-y-2 text-sm">
            {socialLinks.map((link) => {
              const Icon = icons[link.id];
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    download={link.id === 'cv' || undefined}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-accent"
                  >
                    <Icon size={15} aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="container mx-auto px-4 py-6 text-center font-mono text-xs text-faint">
          © {currentYear} {site.name}
        </p>
      </div>
    </footer>
  );
}
