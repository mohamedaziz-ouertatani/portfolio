import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';
import { socialLinks } from '@/lib/social';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 pb-24 pt-12 sm:px-6 md:pt-16">
      <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1] text-foreground sm:text-6xl">
        Get in touch
      </h1>
      <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted-foreground">
        {site.availability.detail}
      </p>

      <a
        href={`mailto:${site.email}`}
        className="group mt-10 inline-block max-w-full font-display text-[clamp(1.25rem,3.4vw,2.5rem)] font-medium leading-tight text-foreground"
      >
        <span className="mark break-all decoration-1 underline-offset-[0.2em] group-hover:underline">
          {site.email}
        </span>
      </a>

      <h2 className="label mb-2 mt-20">Elsewhere</h2>
      <ul className="border-b border-border">
        {socialLinks
          .filter((link) => link.id !== 'email')
          .map((link) => (
            <li key={link.id} className="border-t border-border">
              <a
                href={link.href}
                download={link.id === 'cv' || undefined}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-accent"
              >
                <span className="font-display text-2xl font-medium sm:text-3xl">
                  {link.label}
                </span>
                <ArrowUpRight
                  size={22}
                  aria-hidden="true"
                  className="shrink-0 text-faint transition-transform duration-300 ease-cine group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
