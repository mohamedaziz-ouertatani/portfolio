import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projectsData } from '@/lib/projects';
import { experiencesData } from '@/lib/experiences';
import skillsData from '@/lib/skills';
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge';
import { educationData } from '@/lib/education';
import { site } from '@/lib/site';
import { socialLink } from '@/lib/social';

export const metadata: Metadata = {
  title: 'Resume - Mohamed Aziz Ouertatani',
  description:
    'Resume of Mohamed Aziz Ouertatani — Final-year Computer Science Engineering Student seeking a 6-month PFE internship (Feb 2027) in Data Science, Data Engineering, MLOps, or Full-Stack Development.',
  alternates: {
    canonical: '/resume',
  },
};

const featuredProjectIds = ['12', '11', '10', '6'];
const resumeProjects = featuredProjectIds
  .map((id) => projectsData.find((p) => p.id === id))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const allSkills = skillsData.flatMap((category) => category.items);

const INTERESTS = ['Muay Thai', 'Motorcycling', 'Fitness', 'Gaming'];

export default function Resume() {
  return (
    <div className="container mx-auto max-w-3xl px-4 pb-16 pt-12 sm:px-6 print:py-8">
      {/* === Resume Hero (Name, Title, Portrait, Download/Contact) === */}
      <section className="mb-10 flex flex-col-reverse items-start gap-6 border-b-2 border-foreground pb-8 md:flex-row md:items-center md:justify-between print:mb-6 print:pb-4">
        {/* Headline and actions */}
        <div>
          <h1 className="font-display text-4xl font-semibold leading-[1] text-foreground md:text-5xl print:text-black">
            {site.name}
          </h1>
          <div className="mt-3 text-base font-medium text-foreground md:text-lg print:text-black">
            Final-Year Computer Science Engineering Student — Data Science
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground print:text-black">
            <a
              href={`mailto:${site.email}`}
              className="underline decoration-1 underline-offset-[0.24em] transition-colors hover:text-accent"
            >
              {site.email}
            </a>
            <span aria-hidden="true">&#183;</span>
            <a
              href={site.phoneHref}
              className="underline decoration-1 underline-offset-[0.24em] transition-colors hover:text-accent"
            >
              {site.phone}
            </a>
            <span aria-hidden="true">&#183;</span>
            <span>{site.location}</span>
            <span aria-hidden="true">&#183;</span>
            <a
              href={socialLink('linkedin').href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-1 underline-offset-[0.24em] transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
          <AvailabilityBadge className="mt-3 print:hidden" />
        </div>
        {/* Portrait */}
        <div className="mb-6 flex-shrink-0 md:mb-0 print:hidden">
          <div className="relative h-[120px] w-[96px] overflow-hidden bg-background-elevated">
            <Image
              src="/me3.png"
              alt="Mohamed Aziz Ouertatani"
              fill
              className="object-cover"
              priority
              draggable={false}
            />
          </div>
        </div>
        {/* Download CV action */}
        <div className="flex-shrink-0 print:hidden">
          <a
            href={site.cv}
            download
            className="inline-block rounded-sm bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-strong"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* === Professional Summary === */}
      <section className="mb-10 print:mb-6">
        <h2 className="mb-4 border-b border-border pb-2 text-xl font-semibold text-foreground">
          Professional Summary
        </h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground md:text-base">
          <li>
            Final-year Computer Science Engineering student at ESPRIT
            specializing in Data Science, with hands-on experience in full-stack
            web development, machine learning, and advanced data engineering.
          </li>
          <li>
            Specialized in architecting{' '}
            <span className="font-medium text-foreground">
              end-to-end data pipelines
            </span>{' '}
            and interactive analytics for business and real-world impact.
          </li>
          <li>
            Skills include React, Next.js, Node.js, TypeScript, Python (pandas,
            MLflow), EDA, Docker, CI/CD, and data visualization.
          </li>
          <li>
            Proven ability to deliver robust ETL, machine learning automation,
            and rapid-deploy web products with measurable ROI.
          </li>
          <li>
            Seeking a 6-month End-of-Studies Internship (PFE) starting February
            2027 in Data Science, Data Engineering, MLOps, or Full-Stack
            Development.
          </li>
        </ul>
      </section>

      {/* === Experience === */}
      <section className="mb-10 print:mb-6">
        <h2 className="mb-4 border-b border-border pb-2 text-xl font-semibold text-foreground">
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experiencesData
            .filter((exp) => exp.companyName !== 'ESPRIT')
            .map((exp) => (
              <ResumeExperience
                key={exp.jobTitle + exp.companyName}
                role={exp.jobTitle}
                company={exp.companyName}
                date={exp.date}
                highlights={exp.contributions.slice(0, 3)}
              />
            ))}
        </div>
      </section>

      {/* === Education === */}
      <section className="mb-10 print:mb-6">
        <h2 className="mb-4 border-b border-border pb-2 text-xl font-semibold text-foreground">
          Education
        </h2>
        <div className="space-y-4">
          {educationData.map((entry) => (
            <div key={entry.institution}>
              <h3 className="font-semibold text-foreground">
                {entry.institution}
              </h3>
              <div className="flex flex-wrap gap-x-2 text-sm text-muted-foreground">
                <span>{entry.credential}</span>
                <span aria-hidden="true">&#183;</span>
                <span>{entry.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === Featured Projects === */}
      <section className="mb-10 print:mb-6">
        <h2 className="mb-4 border-b border-border pb-2 text-xl font-semibold text-foreground">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {resumeProjects.map((proj, idx) => (
            <ResumeProjectCard
              key={proj.id}
              name={proj.title}
              role={proj.role ?? ''}
              description={proj.description}
              stack={proj.technologies.join(', ')}
              impact={proj.result ?? ''}
              url={proj.githubLink}
              animate={idx === 0}
            />
          ))}
        </div>
      </section>

      {/* === Skills === */}
      <section className="mb-10 print:mb-6">
        <h2 className="mb-4 border-b border-border pb-2 text-xl font-semibold text-foreground">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-1.5 text-sm text-muted-foreground">
          {allSkills.map((skill) => (
            <SkillBadge key={skill.name}>{skill.name}</SkillBadge>
          ))}
        </div>
      </section>

      {/* === Interests === */}
      <section className="mb-8">
        <h2 className="mb-4 border-b border-border pb-2 text-xl font-semibold text-foreground">
          Interests
        </h2>
        <div className="flex flex-wrap gap-1.5 text-sm text-muted-foreground">
          {INTERESTS.map((interest) => (
            <InterestBadge key={interest}>{interest}</InterestBadge>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ===== Helper Components Below ===== */

function ResumeExperience({
  role,
  company,
  date,
  highlights,
}: {
  role: string;
  company: string;
  date: string;
  highlights: string[];
}) {
  return (
    <div className="group">
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <span className="font-semibold text-foreground">{role}</span>
        <span className="text-muted-foreground">&#183; {company}</span>
        <span className="tnum text-sm text-faint">{date}</span>
      </div>
      <ul className="ml-4 list-inside list-disc text-muted-foreground">
        {highlights.map((item, idx) => (
          <li key={idx} className="leading-tight">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ResumeProjectCard({
  name,
  role,
  description,
  stack,
  impact,
  url,
  animate,
}: {
  name: string;
  role: string;
  description: string;
  stack: string;
  impact: string;
  url?: string;
  animate?: boolean;
}) {
  return (
    <div
      className={`border-t border-border pt-4 print:text-black ${
        animate ? '' : ''
      }`}
    >
      <div className="mb-1 flex items-center justify-between">
        <span className="font-semibold">{name}</span>
        {url && (
          <a
            className="link ml-3 shrink-0 text-xs"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo ↗
          </a>
        )}
      </div>
      <div className="mb-2 text-xs text-faint">{role}</div>
      <div className="mb-2 text-sm text-muted-foreground">{description}</div>
      <div className="mb-2 text-xs text-faint">{stack}</div>
      <ul className="ml-4 list-disc text-sm text-muted-foreground print:text-black">
        <li>{impact}</li>
      </ul>
    </div>
  );
}

function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm px-2 py-0.5 text-foreground [box-shadow:inset_0_0_0_1px_var(--color-border)]">
      {children}
    </span>
  );
}

function InterestBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm px-2 py-0.5 text-foreground [box-shadow:inset_0_0_0_1px_var(--color-border)]">
      {children}
    </span>
  );
}
