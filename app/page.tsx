import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Briefcase,
  GraduationCap,
  Dumbbell,
  Gamepad2,
  Bike,
  Swords,
  ArrowRight,
} from 'lucide-react';
import HomeHero from '@/components/HomeHero';
import { Reveal } from '@/components/ui/Reveal';
import { Chip } from '@/components/ui/Chip';
import { strongProjects } from '@/lib/projects';
import { experiencesData } from '@/lib/experiences';
import skillsData from '@/lib/skills';

export const metadata: Metadata = {
  title: 'Home - Mohamed Aziz Ouertatani',
  description:
    'Final-year Computer Science Engineering student seeking a 6-month PFE internship (Feb 2027) in Data Engineering, MLOps, or Full-Stack Development. Experienced with Next.js, Fastify, PostgreSQL, MLflow, and Docker.',
  alternates: {
    canonical: '/',
  },
};

const featuredProjects = [...strongProjects]
  .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
  .slice(0, 2);

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-10 md:py-16">
      <HomeHero />

      <Reveal className="mb-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Featured Work
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group flex flex-col rounded-md border border-border bg-card p-8 transition-colors hover:border-primary-500"
            >
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {project.result ?? project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary-700 dark:text-primary-400">
                View case study <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal className="mb-20" delay={0.05}>
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground lg:text-left">
          Technical Expertise
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category) => (
            <SkillGroup
              key={category.key}
              title={category.label}
              skills={category.items}
            />
          ))}
        </div>
      </Reveal>

      <div className="mb-20 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="text-primary-700 dark:text-primary-400" />
            <h2 className="text-3xl font-bold text-foreground">Experience</h2>
          </div>
          <div className="space-y-6">
            {experiencesData
              .filter((exp) => exp.companyName !== 'ESPRIT')
              .map((exp) => (
                <div
                  key={exp.jobTitle + exp.companyName}
                  className="relative border-l-2 border-border pl-6"
                >
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-accent" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.jobTitle}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-primary-700 dark:text-primary-400">
                    {exp.companyName} • {exp.date}
                  </p>
                  <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
                    {exp.contributions.slice(0, 3).map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary-700 dark:text-primary-400" />
            <h2 className="text-3xl font-bold text-foreground">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="rounded-md border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground">ESPRIT</h3>
              <p className="text-muted-foreground">
                Engineering in CS (Data Science)
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Sep 2021 – Feb 2027 (expected) · Final year
              </p>
            </div>
            <div className="rounded-md border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground">
                L&apos;école Arabe Jordanienne
              </h3>
              <p className="text-muted-foreground">
                General Secondary Certificate
              </p>
              <p className="mt-1 text-sm text-muted-foreground">2019 – 2021</p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mb-16 rounded-md bg-muted p-8">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          Beyond Coding
        </h2>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Outside of engineering, I'm committed to physical discipline and
            adventure — the strategic intensity of <strong>Muay Thai</strong>,
            the focus required for <strong>motorcycling</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-6 lg:justify-end">
            <InterestItem icon={<Swords />} label="Muay Thai" />
            <InterestItem icon={<Bike />} label="Motorcycling" />
            <InterestItem icon={<Dumbbell />} label="Fitness" />
            <InterestItem icon={<Gamepad2 />} label="Gaming" />
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; level: number }[];
}) {
  return (
    <div className="rounded-md border border-border bg-card p-6">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-card-foreground">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.slice(0, 6).map((skill) => (
          <span
            key={skill.name}
            className="rounded-full bg-muted px-3 py-1 font-mono text-sm font-medium text-muted-foreground"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function InterestItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="rounded-full bg-card p-4 text-primary-700 shadow-sm dark:text-primary-400">
        {icon}
      </div>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  );
}
