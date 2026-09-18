'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MotionConfig, motion } from 'framer-motion';
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Star } from '@/components/ui/Star';
import { site } from '@/lib/site';

/**
 * Each tile is pressed onto the wall from above and settles with a small,
 * damped overshoot. The motion is on transform only: text that fades in from
 * zero opacity is not painted until JavaScript has hydrated, which pushed the
 * LCP element out to 3s under Lighthouse's mobile throttling.
 *
 * MotionConfig reducedMotion="user" skips the transform for visitors who ask
 * for less motion, so the tiles land level instead of staying in the
 * pre-settle pose the server rendered.
 */
const wall = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const tile = {
  hidden: { y: -26, rotate: -0.8 },
  visible: {
    y: 0,
    rotate: 0,
    transition: { type: 'spring' as const, stiffness: 210, damping: 13 },
  },
};

const focusRing =
  'focus-visible:outline-none focus-visible:[outline:3px_solid_currentColor] focus-visible:[outline-offset:-8px]';

export function Hero() {
  return (
    <section
      id="identity"
      aria-labelledby="hero-heading"
      className="zone-cobalt field-cobalt"
    >
      <MotionConfig reducedMotion="user">
        <motion.div
          variants={wall}
          initial="hidden"
          animate="visible"
          className="container mx-auto grid gap-3 px-4 py-6 sm:py-10 lg:min-h-[calc(100svh-5.5rem)] lg:grid-cols-12 lg:grid-rows-[repeat(5,minmax(92px,1fr))] lg:gap-3.5 lg:py-12"
        >
          {/* Name tile */}
          <motion.div
            variants={tile}
            className="tile zone-plaster order-1 flex flex-col justify-between gap-10 p-6 sm:p-10 lg:order-none lg:col-span-8 lg:col-start-1 lg:row-span-3 lg:row-start-1"
          >
            <div>
              <h1
                id="hero-heading"
                className="font-display text-[clamp(2.75rem,8.6vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.035em]"
              >
                <span className="block">Mohamed Aziz</span>
                <span className="block text-accent">Ouertatani</span>
              </h1>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-bold sm:text-xl">
                <span className="inline-flex items-center gap-3">
                  <Star size={20} className="shrink-0 text-glaze-turquoise" />
                  {site.role}
                </span>
                <span className="font-medium text-muted-foreground">
                  {site.disciplines}
                </span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                href="/contact"
                variant="primary"
                icon={<Mail size={16} aria-hidden="true" />}
              >
                Contact
              </Button>
              <Button
                href={site.cv}
                download
                variant="secondary"
                icon={<Download size={16} aria-hidden="true" />}
              >
                Download CV
              </Button>
            </div>
          </motion.div>

          {/* Availability: the truthful ask, in the warmest glaze on the wall */}
          <motion.div
            variants={tile}
            className="tile glaze-saffron order-2 p-6 sm:p-8 lg:order-none lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1"
          >
            <p className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
              Available for a PFE, February 2027
            </p>
            <p className="mt-4 max-w-sm text-base font-medium leading-snug">
              6-month End-of-Studies Internship in Data Engineering, MLOps or
              Full-Stack, remote or hybrid (Tunisia/EU).
            </p>
          </motion.div>

          {/* The primary route in: the brightest tile on the wall */}
          <motion.div
            variants={tile}
            className="order-3 lg:order-none lg:col-span-2 lg:col-start-7 lg:row-span-2 lg:row-start-4"
          >
            <Link
              href="/projects"
              className={`tile glaze-plaster group flex h-full min-h-[120px] flex-row items-end justify-between gap-4 p-6 transition-colors duration-200 ease-cine hover:bg-white lg:min-h-[140px] lg:flex-col lg:items-stretch lg:justify-between ${focusRing}`}
            >
              <ArrowUpRight
                size={36}
                strokeWidth={2.25}
                aria-hidden="true"
                className="order-2 text-glaze-cobalt transition-transform duration-300 ease-settle group-hover:-translate-y-1 group-hover:translate-x-1 lg:order-1 lg:self-end"
              />
              <span className="order-1 font-display text-2xl font-extrabold leading-[1.02] tracking-tight lg:order-2">
                Explore my work
              </span>
            </Link>
          </motion.div>

          {/* Statement */}
          <motion.div
            variants={tile}
            className="tile glaze-turquoise order-4 flex items-center p-6 sm:p-10 lg:order-none lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:row-start-4"
          >
            <p className="max-w-2xl text-lg font-medium leading-relaxed sm:text-xl">
              Final-year Computer Science Engineering student at {site.school},
              building systems that keep working after the first successful run:
              semantic retrieval over cited research evidence, forecasting
              pipelines tracked in MLflow, and authenticated APIs on Fastify and
              PostgreSQL.
            </p>
          </motion.div>

          {/* Portrait */}
          <motion.div
            variants={tile}
            className="tile glaze-deep relative order-5 aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:order-none lg:col-span-4 lg:col-start-9 lg:row-span-3 lg:row-start-3 lg:aspect-auto"
          >
            <Image
              src="/me.jpg"
              alt="Portrait of Mohamed Aziz Ouertatani"
              fill
              priority
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover object-[50%_25%]"
            />
          </motion.div>
        </motion.div>
      </MotionConfig>
    </section>
  );
}
