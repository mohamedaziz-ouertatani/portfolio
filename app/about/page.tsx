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
      <section className="zone-cobalt field-cobalt">
        <div className="container mx-auto grid gap-10 px-4 py-14 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-[1] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              About me
            </h1>
            <AvailabilityBadge className="mt-8" />
          </div>
          <div className="tile relative mx-auto h-52 w-52 shrink-0 overflow-hidden bg-glaze-deep md:h-64 md:w-64">
            <Image
              src="/me2.jpg"
              alt="Portrait of Mohamed Aziz Ouertatani"
              fill
              className="object-cover object-[50%_25%]"
              sizes="256px"
              priority
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 pb-16 pt-16 md:pb-24 md:pt-20">
        {/* Bio */}
        <section className="mb-24">
          <div className="max-w-[68ch] space-y-5 text-lg leading-relaxed text-foreground">
            <p>
              Final-year Computer Science Engineering student at{' '}
              <a
                href="https://esprit.tn/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-accent underline decoration-2 underline-offset-4 hover:no-underline"
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
                <Chip className="text-sm">{label}</Chip>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="label">Languages</span>
            {languagesData.map(({ code, label }) => (
              <span key={code} className="font-semibold text-foreground">
                {code}{' '}
                <span className="font-medium text-muted-foreground">
                  {label}
                </span>
              </span>
            ))}
          </p>
        </section>

        {/* Experience */}
        <Reveal className="mb-24">
          <h2 className="mb-10 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
            Experience
          </h2>
          <div className="space-y-12">
            {experiencesData.map((experience) => (
              <article
                key={experience.jobTitle + experience.companyName}
                className="grid gap-3 border-t-2 border-border pt-8 md:grid-cols-[12rem_1fr] md:gap-10"
              >
                <p className="tnum text-sm font-bold text-accent md:pt-2">
                  {experience.date}
                </p>
                <div>
                  <h3 className="text-2xl font-extrabold leading-tight tracking-tight">
                    {experience.jobTitle}
                  </h3>
                  <p className="mt-1 text-lg font-semibold text-muted-foreground">
                    {experience.companyName}
                  </p>
                  <div className="mt-3 flex gap-4 text-sm font-bold">
                    {experience.github && (
                      <a
                        href={experience.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline decoration-2 underline-offset-4 hover:no-underline"
                      >
                        GitHub
                      </a>
                    )}
                    {experience.demo && (
                      <a
                        href={experience.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-2 underline decoration-2 underline-offset-4 hover:no-underline"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                  {experience.description && (
                    <p className="mt-4 max-w-[68ch] text-lg font-medium leading-relaxed text-foreground">
                      {experience.description}
                    </p>
                  )}
                  <ul className="mt-4 max-w-[68ch] space-y-2.5">
                    {experience.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="flex gap-3 leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6rem] h-2 w-2 shrink-0 rotate-45 bg-glaze-turquoise"
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
          <h2 className="mb-10 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
            Skills &amp; tools
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skillsData.map((category) => (
              <div
                key={category.key}
                className="tile bg-background-elevated p-6"
              >
                <h3 className="label mb-4 !text-foreground">
                  {category.label}
                </h3>
                <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm font-semibold text-foreground">
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
          <div className="tile glaze-saffron p-8 md:p-12">
            <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl">
              Currently seeking a 6-month End-of-Studies Internship (PFE)
              beginning February 2027.
            </h2>
            <p className="mt-5 max-w-[62ch] text-lg leading-relaxed">
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
          <h2 className="mb-10 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
            Credentials
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="tile glaze-cobalt p-8">
              <h3 className="label !text-[#c6d2ee]">Education</h3>
              <p className="mt-4 leading-relaxed">
                {educationData
                  .map(
                    (entry) =>
                      `${entry.credential}. ${entry.institution} (${entry.date}).`
                  )
                  .join(' ')}
              </p>
            </div>
            <div className="tile glaze-turquoise p-8">
              <h3 className="label !text-glaze-ink">Certifications</h3>
              <p className="mt-4 leading-relaxed">
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
