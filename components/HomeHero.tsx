'use client';

import Image from 'next/image';
import { Layout, Mail, Download } from 'lucide-react';
import { TypingEffect } from '@/components/TypingEffect';
import { Button } from '@/components/ui/Button';
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge';

const HEADLINES = [
  'Final-Year CS Engineering Student — Data Science',
  'Data Engineering & MLOps',
  'ML • Production Pipelines • Full Stack',
];

export default function HomeHero() {
  return (
    <section className="mb-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
          <AvailabilityBadge className="mb-6" />
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Mohamed Aziz Ouertatani
          </h1>
          <div className="mb-4 text-xl font-semibold sm:text-2xl">
            <TypingEffect texts={HEADLINES} />
          </div>
          <p className="mb-6 text-lg text-muted-foreground">
            Final-year Computer Science Engineering student at ESPRIT (Data
            Science), focused on delivering production-grade systems rather than
            isolated experiments. Recent work includes a solo-built research
            intelligence platform combining semantic retrieval with LLM-based
            reasoning to produce cited, evidence-grounded assessments, ML
            forecasting pipelines tracked in MLflow, and full-stack applications
            built on Fastify, Next.js, and PostgreSQL.
          </p>
          <p className="mb-8 text-base text-muted-foreground">
            Seeking a 6-month End-of-Studies Internship (PFE) starting February
            2027 in Data Engineering, MLOps, or Full-Stack Development —
            remote/hybrid (Tunisia/EU).
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
