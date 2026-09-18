import { ArrowUpRight } from 'lucide-react';
import { Star } from '@/components/ui/Star';
import { site } from '@/lib/site';
import { socialLinks } from '@/lib/social';

export default function Contact() {
  return (
    <>
      <div className="zone-cobalt field-cobalt">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Get in touch
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {site.availability.detail}
          </p>

          <a
            href={`mailto:${site.email}`}
            className="tile mt-10 inline-flex items-center gap-4 bg-glaze-saffron px-6 py-5 font-display text-xl font-extrabold text-glaze-ink transition-colors hover:bg-[#ffc247] focus-visible:outline-none focus-visible:[outline-offset:-8px] focus-visible:[outline:3px_solid_var(--glaze-ink)] sm:px-8 sm:text-3xl"
          >
            <Star size={28} className="shrink-0" />
            <span className="break-all">{site.email}</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="label mb-6">Elsewhere</h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {socialLinks
            .filter((link) => link.id !== 'email')
            .map((link, index) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  download={link.id === 'cv' || undefined}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`tile group flex min-h-[9rem] items-end justify-between gap-4 p-6 transition-colors duration-200 ease-cine focus-visible:outline-none focus-visible:[outline-offset:-8px] focus-visible:[outline:3px_solid_currentColor] ${
                    index === 0
                      ? 'glaze-cobalt hover:bg-[#0f2f73]'
                      : index === 1
                        ? 'glaze-turquoise hover:bg-[#0fc0b4]'
                        : 'glaze-deep hover:bg-[#0a2158]'
                  }`}
                >
                  <span className="font-display text-3xl font-extrabold tracking-tight">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={26}
                    aria-hidden="true"
                    className="shrink-0 transition-transform duration-300 ease-settle group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
