import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PathMatrix } from '@/components/sections/PathMatrix';
import { site } from '@/lib/site';

/**
 * The first viewport is a sheet with one figure on it. Left: who, what, the
 * ask under the highlighter, and the three ways forward. Right: Fig. 1, the
 * evidence that the work covers the whole path rather than one layer. The
 * text is never animated, so the name paints before hydration; only the
 * figure's marks draw in, in CSS.
 */
export function Hero() {
  return (
    <section id="identity" aria-labelledby="hero-heading">
      <div className="container mx-auto grid gap-x-10 gap-y-14 px-4 pb-20 pt-12 sm:px-6 md:pt-16 lg:min-h-[calc(100svh-4.25rem)] lg:grid-cols-12 lg:items-center lg:pb-24 lg:pt-10">
        <div className="lg:col-span-5">
          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.5rem,9.5vw,4rem)] font-semibold leading-[0.98] text-foreground lg:text-[clamp(2.75rem,4.3vw,4.25rem)]"
          >
            <span className="block">Mohamed Aziz</span>
            <span className="block">Ouertatani</span>
          </h1>

          <p className="mt-6 text-lg font-medium text-foreground sm:text-xl">
            {site.role}
            <span className="mt-1 block text-base font-normal text-muted-foreground">
              {site.disciplines}
            </span>
          </p>

          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted-foreground">
            Final-year Computer Science Engineering student at {site.school},
            building systems that keep working after the first successful run:
            semantic retrieval over cited research evidence, forecasting
            pipelines tracked in MLflow, and authenticated APIs on Fastify and
            PostgreSQL.
          </p>

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-lg font-semibold leading-snug text-foreground">
              <span className="mark">Available for a PFE, February 2027</span>
            </p>
            <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-muted-foreground">
              6-month End-of-Studies Internship in Data Engineering, MLOps or
              Full-Stack, remote or hybrid (Tunisia/EU).
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/projects" variant="primary">
              Explore my work
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button
              href={site.cv}
              download
              variant="secondary"
              icon={<Download size={16} aria-hidden="true" />}
            >
              Download CV
            </Button>
            <Button
              href="/contact"
              variant="ghost"
              icon={<Mail size={16} aria-hidden="true" />}
              className="sm:ml-2"
            >
              Contact
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
          <PathMatrix />
        </div>
      </div>
    </section>
  );
}
