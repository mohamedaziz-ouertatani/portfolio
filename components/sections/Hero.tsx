'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { site } from '@/lib/site';

/**
 * Staged entrance. The whole sequence is under a second: the environment is
 * meant to feel like it is coming online, not like a loading screen the
 * reader has to sit through.
 */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/**
 * The headline is the page's Largest Contentful Paint element. Fading it in
 * from zero opacity means the browser does not count it as painted until the
 * JavaScript has loaded, hydrated and run the stagger — which pushed LCP past
 * twenty seconds under CPU throttling. It therefore animates on transform
 * only and is fully opaque in the very first frame, whether or not JS ever
 * arrives.
 */
const riseOpaque = {
  hidden: { y: 18 },
  visible: {
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? undefined : container;
  const item = reduceMotion ? undefined : rise;
  const itemOpaque = reduceMotion ? undefined : riseOpaque;

  return (
    <section
      id="identity"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] flex-col justify-center pb-24 pt-32"
    >
      <motion.div
        variants={variants}
        initial={reduceMotion ? undefined : 'hidden'}
        animate={reduceMotion ? undefined : 'visible'}
        className="max-w-4xl"
      >
        <motion.p
          variants={item}
          className="label-mono mb-8 flex items-center gap-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {site.availability.short}
        </motion.p>

        <motion.h1
          variants={itemOpaque}
          id="hero-heading"
          className="text-5xl font-bold leading-[0.95] tracking-tightest text-foreground sm:text-7xl lg:text-8xl"
        >
          <span className="block">Mohamed Aziz</span>
          <span className="block text-muted-foreground">Ouertatani</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-accent sm:text-base sm:tracking-[0.22em]"
        >
          {site.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-faint sm:text-sm sm:tracking-[0.22em]"
        >
          {site.disciplines}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          Final-year Computer Science Engineering student at {site.school},
          building systems that keep working after the first successful run —
          semantic retrieval over cited research evidence, forecasting pipelines
          tracked in MLflow, and authenticated APIs on Fastify and PostgreSQL.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/projects" icon={<ArrowRight size={16} />}>
            Explore my work
          </Button>
          <Button
            href={site.cv}
            download
            variant="secondary"
            icon={<Download size={16} />}
          >
            Download CV
          </Button>
          <Button href="/contact" variant="ghost" icon={<Mail size={16} />}>
            Contact
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#work"
        variants={item}
        initial={reduceMotion ? undefined : 'hidden'}
        animate={reduceMotion ? undefined : 'visible'}
        className="label-mono absolute bottom-8 left-0 inline-flex items-center gap-3 transition-colors hover:text-accent"
      >
        <ArrowDown size={14} className="animate-bounce" aria-hidden="true" />
        Scroll to explore
      </motion.a>
    </section>
  );
}
