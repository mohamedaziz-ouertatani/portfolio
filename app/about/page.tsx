import Image from 'next/image';
import type { Metadata } from 'next';
import { experiencesData } from '@/lib/experiences';
import skillsData from '@/lib/skills';
import { Chip } from '@/components/ui/Chip';
import { Reveal } from '@/components/ui/Reveal';
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge';

export const metadata: Metadata = {
  title: 'About - Mohamed Aziz Ouertatani',
  description:
    'Final-year Computer Science Engineering student at ESPRIT, seeking a 6-month PFE internship (Feb 2027) in Data Science, Data Engineering, MLOps, or full-stack development. Proven experience with MLflow, Fastify APIs, Docker pipelines, and quantifiable business impact.',
  alternates: {
    canonical: '/about',
  },
};

const TECH_TAGS = [
  'TypeScript',
  'React/Next.js',
  'Python',
  'MLflow/Docker',
  'PostgreSQL',
];

const LANGUAGES = [
  { code: 'AR', label: 'Native' },
  { code: 'FR', label: 'Basic' },
  { code: 'EN', label: 'Fluent' },
];

export default function About() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      {/* Hero */}
      <section className="mb-20 border-b border-border pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="mb-3 font-mono text-sm text-primary-700 dark:text-primary-400">
              ~/about
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              About Me
            </h1>
            <AvailabilityBadge className="mb-6" />
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Final-year Computer Science Engineering student at{' '}
                <a
                  href="https://esprit.tn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary-700 hover:underline dark:text-primary-400"
                >
                  ESPRIT
                </a>
                , specializing in Data Science and production-grade MLOps. My
                focus is on building systems that perform reliably beyond a
                single successful run — models, pipelines, and APIs designed for
                continuous, real-world use.
              </p>
              <p>
                This is reflected in ML forecasting systems built on ETS/ARIMA
                and tracked with MLflow, authenticated Fastify APIs implementing
                JWT/RBAC, PostgreSQL-backed data warehousing, and Dockerized
                pipelines feeding BI dashboards. Most recently, it includes a
                solo-developed platform that retrieves and reasons over research
                literature to produce cited, evidence-grounded assessments.
              </p>
              <p>
                This experience extends to industry roles: developing Next.js
                features at iTransform365 and React components at Swiver,
                consistently delivering production-ready code from initial
                prototype to final implementation.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {TECH_TAGS.map((label) => (
                <Chip key={label} className="text-sm">
                  {label}
                </Chip>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="font-semibold text-muted-foreground">lang:</span>
              {LANGUAGES.map(({ code, label }) => (
                <span
                  key={code}
                  className="rounded border border-border px-2 py-1 text-primary-700 dark:text-primary-400"
                >
                  {code}{' '}
                  <span className="text-muted-foreground">· {label}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded border border-border md:h-56 md:w-56">
            <Image
              src="/me2.jpg"
              alt="Mohamed Aziz Ouertatani"
              fill
              className="object-cover"
              sizes="224px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <Reveal className="mb-24">
        <SectionHeading index="01" title="Experience" />
        <div className="space-y-6">
          {experiencesData.map((experience, index) => (
            <article
              key={index}
              className="rounded border border-border bg-card p-8 transition-colors hover:border-primary-600/50"
            >
              <header className="mb-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {experience.jobTitle}
                </h3>
                <p className="mt-1 text-xl font-semibold text-card-foreground">
                  {experience.companyName}
                </p>
                <p className="mt-1 font-mono text-sm text-primary-700 dark:text-primary-400">
                  {experience.date}
                </p>
                <div className="mt-4 flex gap-4 text-sm">
                  {experience.github && (
                    <a
                      href={experience.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary-700 hover:underline dark:text-primary-400"
                    >
                      GitHub
                    </a>
                  )}
                  {experience.demo && (
                    <a
                      href={experience.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-green-600 hover:underline dark:text-green-400"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </header>
              {experience.description && (
                <p className="mb-6 text-lg font-semibold text-card-foreground">
                  {experience.description}
                </p>
              )}
              <ul className="mb-6 ml-6 list-disc space-y-3 text-muted-foreground">
                {experience.contributions.map((contribution, idx) => (
                  <li key={idx}>{contribution}</li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-2">
                {experience.skills.map((skill, idx) => (
                  <Chip key={idx}>{skill}</Chip>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      {/* Skills & Tools */}
      <Reveal className="mb-24" delay={0.05}>
        <SectionHeading index="02" title="Skills & Tools" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category) => (
            <SkillCategoryCard
              key={category.key}
              title={category.label}
              items={category.items}
            />
          ))}
        </div>
      </Reveal>

      {/* Career Aspirations — compact closing note */}
      <Reveal className="mb-24 rounded border border-border bg-muted p-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-wider text-primary-700 dark:text-primary-400">
          $ status --seeking
        </p>
        <p className="mb-4 text-lg text-muted-foreground">
          Currently seeking a{' '}
          <strong className="text-foreground">
            6-month End-of-Studies Internship (PFE) beginning February 2027
          </strong>
          , in Data Engineering, MLOps, or Full-Stack Development, remote or
          hybrid (Tunisia/EU). I perform best within product-driven teams,
          translating raw data into reliable pipelines and dashboards, and
          machine learning models into systems that perform consistently in
          production.
        </p>
        <AvailabilityBadge />
      </Reveal>

      {/* Credentials/Education */}
      <Reveal>
        <SectionHeading index="03" title="Credentials" />
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Education"
            content="Engineering Degree in Computer Science, Data Science focus. ESPRIT (2021–2027, expected). Final year. Areas: ML, Databases, Systems Design."
          />
          <Card
            title="Certifications"
            content="CCNA (Cisco), MongoDB Node.js Developer, Neo4j Fundamentals."
          />
        </div>
      </Reveal>
    </div>
  );
}

/* ------ Helper Components ------ */

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-3 border-b border-border pb-4">
      <span className="font-mono text-sm text-muted-foreground">{index}</span>
      <h2 className="text-3xl font-bold text-foreground">{title}</h2>
    </div>
  );
}

function SkillCategoryCard({
  title,
  items,
}: {
  title: string;
  items: { name: string; level: number }[];
}) {
  return (
    <div className="rounded border border-border bg-card p-6">
      <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Chip key={item.name}>{item.name}</Chip>
        ))}
      </div>
    </div>
  );
}

function Card({ title, content }: { title: string; content: string }) {
  return (
    <div className="rounded border border-border bg-card p-6">
      <h3 className="mb-2 font-mono text-lg font-bold text-primary-700 dark:text-primary-400">
        {title}
      </h3>
      <p className="text-muted-foreground">{content}</p>
    </div>
  );
}
