import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Star } from '@/components/ui/Star';
import { site } from '@/lib/site';
import { socialLinks } from '@/lib/social';

/**
 * The exit. The wall closes in cobalt: the email address is set large and
 * visible rather than hidden behind an interaction, and every other route out
 * is a plain link.
 */
export function ContactCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="zone-cobalt field-cobalt"
    >
      <div className="container mx-auto px-4 py-24 md:py-32">
        <Reveal>
          <h2
            id="contact-heading"
            className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-7xl sm:leading-[1.05] md:text-[6rem] md:leading-[1.05]"
          >
            Let&apos;s build something useful.
          </h2>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            {site.availability.detail}
          </p>

          <a
            href={`mailto:${site.email}`}
            className="tile mt-10 inline-flex items-center gap-4 bg-glaze-saffron px-6 py-5 font-display text-xl font-extrabold text-glaze-ink transition-colors hover:bg-[#ffc247] focus-visible:outline-none focus-visible:[outline-offset:-8px] focus-visible:[outline:3px_solid_var(--glaze-ink)] sm:px-8 sm:text-3xl"
          >
            <Star size={28} className="shrink-0" />
            <span className="break-all">{site.email}</span>
          </a>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {socialLinks
              .filter((link) => link.id !== 'email')
              .map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    download={link.id === 'cv' || undefined}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="group inline-flex items-center gap-2 text-base font-bold text-foreground underline decoration-2 underline-offset-[6px] transition-colors hover:text-accent"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 ease-settle group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-base font-bold text-foreground underline decoration-2 underline-offset-[6px] transition-colors hover:text-accent"
              >
                All ways to reach me
              </Link>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
