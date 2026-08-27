'use client';

import Image from 'next/image';
import { Layout, Mail, Download } from 'lucide-react';
import { TypingEffect } from '@/components/TypingEffect';
import { Button } from '@/components/ui/Button';

const HEADLINES = [
  'Computer Science Engineering Student',
  'Full Stack & Data Engineering',
  'ML • MLOps • Production Pipelines',
];

export default function HomeHero() {
  return (
    <section className="mb-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Mohamed Aziz Ouertatani
          </h1>
          <div className="mb-4 text-xl font-semibold sm:text-2xl">
            <TypingEffect texts={HEADLINES} />
          </div>
          <p className="mb-6 text-lg text-muted-foreground">
            Fourth-year Computer Science Engineering student at ESPRIT,
            building production data pipelines, ML forecasting systems, and
            full-stack web applications — from Next.js/TypeScript frontends to
            Fastify APIs and MLflow-tracked ML pipelines.
          </p>
          <p className="mb-8 text-base text-muted-foreground">
            Open to Data Engineering, MLOps, and Full-Stack roles — internship
            or junior, remote/hybrid (Tunisia/EU).
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button href="/projects" icon={<Layout size={18} />}>
              View Projects
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              icon={<Mail size={18} />}
            >
              Get in Touch
            </Button>
            <Button
              href="/cv.pdf"
              variant="secondary"
              download
              icon={<Download size={18} />}
            >
              CV
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative mx-auto h-[280px] w-[280px] overflow-hidden rounded-lg border border-border shadow-md sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]">
            <Image
              src="/me.jpg"
              alt="Mohamed Aziz Ouertatani"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="mt-5 block text-center text-lg font-semibold text-foreground">
            <span className="block">
              &ldquo;If you can automate it, you should.&rdquo;
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
