import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { site } from '@/lib/site';
import { socialLinks } from '@/lib/social';

/**
 * The exit. Calm, minimal, and every route out is a plain link — the email
 * address is visible rather than hidden behind an interaction.
 */
export function ContactCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border py-24 md:py-36"
    >
      <Reveal>
        <SectionLabel index="06" className="mb-6">
          Contact
        </SectionLabel>

        <h2
          id="contact-heading"
          className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tightest text-foreground sm:text-6xl md:text-7xl"
        >
          Let&apos;s build
          <br />
          <span className="text-muted-foreground">something useful.</span>
        </h2>

        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          {site.availability.detail}
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-block break-all font-mono text-lg text-accent underline-offset-8 transition-colors hover:text-accent-strong hover:underline sm:text-2xl"
        >
          {site.email}
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
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
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
          <li>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
            >
              Send a message
            </Link>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
