import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { site } from '@/lib/site';
import { socialLinks } from '@/lib/social';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 pb-24 pt-32">
      <header className="mb-16 max-w-3xl">
        <SectionLabel index="06" className="mb-6">
          Contact
        </SectionLabel>
        <h1 className="text-4xl font-bold tracking-tightest text-foreground sm:text-5xl md:text-6xl">
          Get in touch
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {site.availability.detail}
        </p>
      </header>

      <div className="max-w-xl">
        <h2 className="label-mono mb-6">Reach me directly</h2>

        <a
          href={`mailto:${site.email}`}
          className="block break-all font-mono text-lg text-accent underline-offset-8 transition-colors hover:text-accent-strong hover:underline sm:text-xl"
        >
          {site.email}
        </a>

        <ul className="mt-10 space-y-4 border-t border-border pt-8">
          {socialLinks
            .filter((link) => link.id !== 'email')
            .map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  download={link.id === 'cv' || undefined}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 ease-cine group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
