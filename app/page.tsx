import type { Metadata } from 'next';
import { Environment3D } from '@/components/three/Environment3D';
import { HeroImage } from '@/components/three/HeroImage';
import { EnvironmentScrim } from '@/components/three/EnvironmentScrim';
import { ScrollRail } from '@/components/ui/ScrollRail';
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

export default function Home() {
  return (
    <>
      {/*
        One canvas for the whole page rather than one per section: the camera
        travels between zones as the reader scrolls, which is what makes the
        page feel like a single environment. It is fixed, so it costs one
        viewport of pixels no matter how long the document is.
      */}
      <div className="fixed inset-0 z-0">
        <Environment3D />
      </div>

      <HeroImage />

      <EnvironmentScrim />

      <ScrollRail />

      <div className="container relative z-10 mx-auto px-4">
        <Hero />
        <Work />
        <Stack />
        <ExperienceTimeline />
        <AboutPreview />
        <ContactCta />
      </div>
    </>
  );
}
