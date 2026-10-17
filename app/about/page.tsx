import Image from 'next/image';
import type { Metadata } from 'next';
import { experiencesData } from '@/lib/experiences';
import skillsData from '@/lib/skills';
import { Chip } from '@/components/ui/Chip';
import { Reveal } from '@/components/ui/Reveal';
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge';
import {
  certificationsData,
  educationData,
  languagesData,
} from '@/lib/education';

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

export default function About() {
  return (
    <>
      {/* Masthead */}
      <section>
        <div className="container mx-auto grid gap-10 px-4 pb-4 pt-12 sm:px-6 md:pt-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display text-5xl font-semibold leading-[1] text-foreground sm:text-6xl">
              About me
            </h1>
            <AvailabilityBadge className="mt-6" />
          </div>
          <div className="relative aspect-[4/5] w-40 shrink-0 overflow-hidden bg-background-elevated md:w-48 lg:col-span-3 lg:col-start-10 lg:w-full">
            <Image
              src="/me2.jpg"
              alt="Portrait of Mohamed Aziz Ouertatani"
              fill
              className="object-cover object-[50%_25%]"
              sizes="(min-width: 1024px) 22vw, 192px"
              priority
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16 pt-14 sm:px-6 md:pb-24">
        {/* Bio */}
        <section className="mb-24 border-t border-foreground pt-10">
          <div className="max-w-[66ch] space-y-5 text-[1.0625rem] leading-relaxed text-foreground">
            <p>
              Final-year Computer Science Engineering student at{' '}
              <a
                href="https://esprit.tn/"
                target="_blank"
                rel="noopener noreferrer"
                className="link font-medium"
              >
                ESPRIT
              </a>
              , specializing in Data Science and production-grade MLOps. My
              focus is on building systems that perform reliably beyond a single
              successful run: models, pipelines, and APIs designed for
              continuous, real-world use.
            </p>
            <p>
              This is reflected in ML forecasting systems built on ETS/ARIMA and
              tracked with MLflow, authenticated Fastify APIs implementing
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
          <ul className="mt-8 flex flex-wrap gap-2">
            {TECH_TAGS.map((label) => (
              <li key={label}>
                <Chip>{label}</Chip>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="label">Languages</span>
            {languagesData.map(({ code, label }) => (
              <span key={code} className="font-medium text-foreground">
                {code}{' '}
                <span className="font-normal text-muted-foreground">
                  {label}
                </span>
              </span>
            ))}
          </p>
        </section>

        {/* Experience */}
        <Reveal className="mb-24">
          <h2 className="mb-8 border-t border-foreground pt-10 text-3xl font-semibold leading-[1.08] sm:text-4xl">
            Experience
          </h2>
          <div className="space-y-10">
            {experiencesData.map((experience) => (
              <article
                key={experience.jobTitle + experience.companyName}
                className="grid gap-x-10 gap-y-3 border-t border-border pt-8 md:grid-cols-[12rem_1fr]"
              >
                <p className="tnum text-sm text-faint md:pt-1.5">
                  {experience.date}
                </p>
                <div>
                  <h3 className="text-xl font-semibold leading-tight">
                    {experience.jobTitle}
                  </h3>
                  <p className="mt-0.5 text-base text-muted-foreground">
                    {experience.companyName}
                  </p>
                  <div className="mt-3 flex gap-4 text-sm">
                    {experience.github && (
                      <a
                        href={experience.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        GitHub
                      </a>
                    )}
                    {experience.demo && (
                      <a
                        href={experience.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                  {experience.description && (
                    <p className="mt-4 max-w-[66ch] text-base leading-relaxed text-foreground">
                      {experience.description}
                    </p>
                  )}
                  <ul className="mt-3 max-w-[66ch] space-y-1.5">
                    {experience.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.7rem] h-px w-3 shrink-0 bg-border-strong"
                        />
                        {contribution}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <li key={skill}>
                        <Chip>{skill}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Skills & tools */}
        <Reveal className="mb-24" delay={0.05}>
          <h2 className="mb-8 border-t border-foreground pt-10 text-3xl font-semibold leading-[1.08] sm:text-4xl">
            Skills &amp; tools
          </h2>
          <div className="border-b border-border">
            {skillsData.map((category) => (
              <div
                key={category.key}
                className="grid gap-x-10 gap-y-2 border-t border-border py-4 md:grid-cols-12"
              >
                <h3 className="font-sans text-sm font-medium text-foreground md:col-span-3">
                  {category.label}
                </h3>
                <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem] text-muted-foreground md:col-span-9">
                  {category.items.map((item) => (
                    <li key={item.name}>{item.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        {/* What I'm looking for */}
        <Reveal className="mb-24">
          <div className="border-y-2 border-foreground py-10 md:py-12">
            <h2 className="max-w-3xl font-display text-2xl font-semibold leading-[1.2] sm:text-3xl">
              <span className="mark">
                Currently seeking a 6-month End-of-Studies Internship (PFE)
                beginning February 2027.
              </span>
            </h2>
            <p className="mt-5 max-w-[62ch] text-[1.0625rem] leading-relaxed text-muted-foreground">
              In Data Engineering, MLOps, or Full-Stack Development, remote or
              hybrid (Tunisia/EU). I perform best within product-driven teams,
              translating raw data into reliable pipelines and dashboards, and
              machine learning models into systems that perform consistently in
              production.
            </p>
          </div>
        </Reveal>

        {/* Credentials */}
        <Reveal>
          <h2 className="mb-8 border-t border-foreground pt-10 text-3xl font-semibold leading-[1.08] sm:text-4xl">
            Credentials
          </h2>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            <div className="border-t border-border pt-5">
              <h3 className="label">Education</h3>
              <p className="mt-3 leading-relaxed text-foreground">
                {educationData
                  .map(
                    (entry) =>
                      `${entry.credential}. ${entry.institution} (${entry.date}).`
                  )
                  .join(' ')}
              </p>
            </div>
            <div className="border-t border-border pt-5">
              <h3 className="label">Certifications</h3>
              <p className="mt-3 leading-relaxed text-foreground">
                {certificationsData
                  .map((cert) => `${cert.name} (${cert.issuer})`)
                  .join(', ')}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
