import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Work } from '@/components/sections/Work';
import { Stack } from '@/components/sections/Stack';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { ContactCta } from '@/components/sections/ContactCta';

export const metadata: Metadata = {
  title: 'Mohamed Aziz Ouertatani — Data Science Engineer',
  description:
    'Final-year Computer Science Engineering student seeking a 6-month PFE internship (Feb 2027) in Data Engineering, MLOps, or Full-Stack Development. Next.js, Fastify, PostgreSQL, MLflow, Docker.',
  alternates: { canonical: '/' },
};

/**
 * One sheet, read top to bottom: Fig. 1 with the identity, the work as small
 * multiples, the stack as a table, the career as a range chart, a quiet
 * about, and a ruled close.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Stack />
      <ExperienceTimeline />
      <AboutPreview />
      <ContactCta />
    </>
  );
}
