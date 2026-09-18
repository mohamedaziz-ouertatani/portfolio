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
 * One wall, laid in bands: cobalt hero, plaster work, cobalt stack, plaster
 * experience and about, cobalt close. Each section owns its ground.
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
