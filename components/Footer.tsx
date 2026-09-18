import Link from 'next/link';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { site } from '@/lib/site';
import { socialLinks } from '@/lib/social';
import { Star } from '@/components/ui/Star';

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
    <footer className="zone-cobalt mt-auto bg-glaze-deep print:hidden">
      <div aria-hidden="true" className="frieze-turquoise h-4" />
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="inline-flex items-center gap-2.5 font-display text-xl font-bold text-foreground">
            <Star size={24} className="text-glaze-saffron" />
            {site.name}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{site.role}</p>
          <p className="text-sm text-muted-foreground">{site.location}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="label mb-4">
            Navigate
            <span className="ml-3 hidden font-normal normal-case tracking-normal text-faint md:inline">
              Ctrl / Cmd + K to search
            </span>
          </h2>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label mb-4">Connect</h2>
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
                    className="inline-flex items-center gap-2.5 text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
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

      <p className="border-t border-border">
        <span className="container mx-auto block px-4 py-5 text-center text-xs text-faint">
          © {currentYear} {site.name}
        </span>
      </p>
    </footer>
  );
}
