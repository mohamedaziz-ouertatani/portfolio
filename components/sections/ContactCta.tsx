import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/lib/site';
import { socialLinks } from '@/lib/social';

/**
 * The close. A heavier rule, the line at display size, and the email address
 * set large and visible rather than hidden behind an interaction, with the
 * highlighter under it: the ask and the way to answer it, side by side.
 */
export function ContactCta() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="border-t-2 border-foreground pb-24 pt-14 md:pb-32 md:pt-20">
          <Reveal>
            <h2
              id="contact-heading"
              className="max-w-4xl font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1.02] text-foreground"
            >
              Let&apos;s build something useful.
            </h2>

            <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted-foreground">
              {site.availability.detail}
            </p>
          </Reveal>

          <a
            href={`mailto:${site.email}`}
            className="group mt-10 inline-block max-w-full font-display text-[clamp(1.25rem,3.4vw,2.5rem)] font-medium leading-tight text-foreground"
          >
            <span className="mark break-all decoration-1 underline-offset-[0.2em] group-hover:underline">
              {site.email}
            </span>
          </a>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
            {socialLinks
              .filter((link) => link.id !== 'email')
              .map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    download={link.id === 'cv' || undefined}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="link group inline-flex items-center gap-1.5 text-base font-medium"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 ease-cine group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            <li>
              <Link href="/contact" className="link text-base font-medium">
                All ways to reach me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
