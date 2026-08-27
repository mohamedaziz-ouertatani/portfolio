import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projectsData } from '@/lib/projects';
import { experiencesData } from '@/lib/experiences';
import skillsData from '@/lib/skills';

export const metadata: Metadata = {
  title: 'Resume - Mohamed Aziz Ouertatani',
  description:
    'Resume of Mohamed Aziz Ouertatani — Computer Science Engineering Student specializing in Data Science and Full Stack Development.',
  alternates: {
    canonical: 'https://mohamedaziz-ouertatani.github.io/portfolio/resume/',
  },
};

const featuredProjectIds = ['11', '1', '10', '6', '7'];
const resumeProjects = featuredProjectIds
  .map((id) => projectsData.find((p) => p.id === id))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const allSkills = [
  ...skillsData.languages,
  ...skillsData.librariesFrameworks,
  ...skillsData.tools,
].sort((a, b) => b.level - a.level);

const INTERESTS = ['Muay Thai', 'Motorcycling', 'Fitness', 'Gaming'];

export default function Resume() {
  return (
    <main
      id="main-content"
      className="container mx-auto max-w-3xl px-4 py-12 print:py-8"
    >
      {/* === Resume Hero (Name, Title, Portrait, Download/Contact) === */}
      <section className="relative mb-8 flex flex-col-reverse items-center gap-6 overflow-hidden rounded-xl bg-card px-6 py-6 shadow-lg md:flex-row md:items-center md:justify-between print:bg-white print:shadow-none">
        {/* Headline and actions */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-card-foreground md:text-4xl">
            Mohamed Aziz Ouertatani
          </h1>
          <div className="mt-1 text-base font-semibold text-primary-700 dark:text-primary-300 md:text-lg">
            Computer Science Engineering Student | Data Science & Full-Stack
            Development
          </div>
          <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href="mailto:ouertatanimohamedaziz@gmail.com"
              className="transition-colors hover:underline dark:text-primary-400"
            >
              ouertatanimohamedaziz@gmail.com
            </a>
            <span>&#183;</span>
            <a
              href="https://www.linkedin.com/in/mohamed-aziz-ouertatani"
              target="_blank"
              rel="noopener"
              className="transition-colors hover:underline dark:text-primary-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
        {/* Portrait */}
        <div className="mb-6 flex-shrink-0 md:mb-0 print:hidden">
          <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-primary-200 shadow-lg dark:border-primary-700">
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
        <div className="absolute right-0 top-0 flex-shrink-0 md:static print:hidden">
          <a
            href="/cv.pdf"
            download
            className="inline-block rounded bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* === Professional Summary === */}
      <section className="mb-10 print:mb-6">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-foreground">
          Professional Summary
        </h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground md:text-base">
          <li>
            Creative and results-driven Computer Science Engineering student at
            ESPRIT with hands-on experience in full-stack web development,
            machine learning, and advanced data engineering.
          </li>
          <li>
            Specialized in architecting{' '}
            <span className="font-semibold text-primary-600">
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
            Seeking internship or junior opportunities to bring strong
            engineering and analytics skills to your data and product teams.
          </li>
        </ul>
      </section>

      {/* === Experience === */}
      <section className="mb-10 print:mb-6">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-foreground">
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
        <h2 className="mb-2 text-xl font-bold tracking-tight text-foreground">
          Education
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-foreground">ESPRIT</h3>
            <div className="flex flex-wrap gap-x-2 text-sm text-muted-foreground">
              <span>Engineering Degree in Computer Science (Data Science)</span>
              <span>&#183;</span>
              <span>Sep 2021 – Feb 2027 (expected)</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">
              L'école Arabe Jordanienne
            </h3>
            <div className="flex flex-wrap gap-x-2 text-sm text-muted-foreground">
              <span>General Secondary Certificate</span>
              <span>&#183;</span>
              <span>2019 – 2021</span>
            </div>
          </div>
        </div>
      </section>

      {/* === Featured Projects === */}
      <section className="mb-10 print:mb-6">
        <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
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
        <h2 className="mb-2 text-xl font-bold tracking-tight text-foreground">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {allSkills.slice(0, 22).map((skill) => (
            <SkillBadge key={skill.name}>{skill.name}</SkillBadge>
          ))}
        </div>
      </section>

      {/* === Interests === */}
      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-foreground">
          Interests
        </h2>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {INTERESTS.map((interest) => (
            <InterestBadge key={interest}>{interest}</InterestBadge>
          ))}
        </div>
      </section>
    </main>
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
        <span className="font-semibold text-foreground group-hover:text-primary-700">
          {role}
        </span>
        <span className="text-primary-600 group-hover:underline dark:text-primary-400">
          &#183; {company}
        </span>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>
      <ul className="ml-4 list-inside list-disc text-muted-foreground transition-all duration-200 group-hover:pl-2">
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
      className={`rounded-lg border border-border bg-muted p-4 text-card-foreground shadow transition-shadow duration-300 print:border print:bg-white print:text-black
        ${animate ? 'ring-1 ring-accent hover:scale-[1.02] hover:shadow-md' : 'hover:scale-[1.01] hover:shadow-sm'}
      `}
    >
      <div className="mb-1 flex items-center justify-between">
        <span className="font-bold">{name}</span>
        {url && (
          <a
            className="ml-3 text-xs text-primary-600 underline hover:text-primary-800 dark:text-primary-300"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo ↗
          </a>
        )}
      </div>
      <div className="mb-1 text-xs italic">{role}</div>
      <div className="mb-2 text-sm">{description}</div>
      <div className="mb-1 text-xs text-primary-700 dark:text-primary-400">
        {stack}
      </div>
      <ul className="ml-4 list-disc text-sm text-muted-foreground print:text-black">
        <li>{impact}</li>
      </ul>
    </div>
  );
}

function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="cursor-pointer rounded-full bg-muted px-3 py-1 font-medium shadow-sm transition-colors hover:bg-primary-50 dark:hover:bg-primary-900/20">
      {children}
    </span>
  );
}

function InterestBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="cursor-pointer rounded-full border border-border px-3 py-1 transition-colors hover:bg-primary-50 dark:hover:bg-primary-900/10">
      {children}
    </span>
  );
}
