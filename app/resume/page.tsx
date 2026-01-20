import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { withBasePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Resume - Mohamed Aziz Ouertatani',
  description:
    'Resume of Mohamed Aziz Ouertatani — Computer Science Engineering Student specializing in Data Science and Full Stack Development.',
  alternates: {
    canonical: 'https://mohamedaziz-ouertatani.github.io/portfolio/resume/',
  },
};

export default function Resume() {
  return (
    <main id="main-content" className="container px-4 py-12 print:py-8">
      {/* === Resume Hero (Name, Title, Portrait, Download/Contact) === */}
      <section className="relative mb-4 flex flex-col-reverse items-center gap-6 rounded-xl bg-white px-6 py-6 shadow-md dark:bg-gray-800 md:flex-row md:items-center md:justify-between print:bg-white print:shadow-none">
        {/* Headline and actions */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Mohamed Aziz Ouertatani
          </h1>
          <div className="mt-1 text-base font-medium text-primary-700 dark:text-primary-300 md:text-lg">
            Computer Science Engineering Student | Data Science & Full-Stack
            Development
          </div>
          <div className="mt-1 flex items-center gap-4 text-sm text-gray-700 dark:text-gray-200">
            <a
              href="mailto:ouertatanimohamedaziz@gmail.com"
              className="hover:underline dark:text-primary-400"
            >
              ouertatanimohamedaziz@gmail.com
            </a>
            <span>&#183;</span>
            <a
              href="https://www.linkedin.com/in/mohamed-aziz-ouertatani"
              target="_blank"
              rel="noopener"
              className="hover:underline dark:text-primary-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
        {/* Portrait */}
        <div className="mb-6 md:mb-0 print:hidden">
          <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-gray-200 shadow dark:border-gray-700">
            <Image
              src={withBasePath('/me3.png')}
              alt="Mohamed Aziz Ouertatani"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Download CV action */}
        <div className="absolute right-0 top-0 flex-shrink-0 md:static print:hidden">
          <a
            href={withBasePath('/cv.pdf')}
            download
            className="inline-block rounded bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* === Professional Summary === */}
      <section className="mb-10 print:mb-6">
        <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          Professional Summary
        </h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300 md:text-base">
          <li>
            Versatile 4th-year Computer Science Engineering student at ESPRIT
            with proven experience in full-stack web development, data science,
            and machine learning.
          </li>
          <li>
            Skilled in designing and delivering end-to-end solutions: React,
            Next.js, Node.js, TypeScript, Python, MLflows, Docker.
          </li>
          <li>
            Developed scalable web apps, production-ready ML pipelines, and BI
            dashboards used by business teams.
          </li>
          <li>
            Seeking internships or junior roles in software engineering, data/ML
            engineering, or MLOps to make an immediate impact.
          </li>
        </ul>
      </section>

      {/* === Experience === */}
      <section className="mb-10 print:mb-6">
        <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          Professional Experience
        </h2>
        <div className="space-y-6">
          <ResumeExperience
            role="Next.js Developer"
            company="iTransform365"
            date="May 2024 – Aug 2024"
            highlights={[
              'Brought 3 new features to production in Next.js/TypeScript stack',
              'Led transition to optimized static export, boosting CI speed by 40%',
              'Collaborated with cross-functional teams on scalable solutions',
            ]}
          />
          <ResumeExperience
            role="React.js Developer"
            company="Swiver"
            date="Aug 2022 – Apr 2023"
            highlights={[
              'Built multilingual SaaS UI used by 200+ business users (EN/FR/AR)',
              'Streamlined invoice and stock management features, saving manual effort',
              'Enhanced performance and accessibility throughout the codebase',
            ]}
          />
        </div>
      </section>

      {/* === Featured Projects === */}
      <section className="mb-10 print:mb-6">
        <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ResumeProjectCard
            name="FLOCK OFF E-Commerce Platform"
            role="Full Stack Developer"
            description="MERN-stack e-commerce app with admin dashboard and live inventory/order management."
            stack="React, Node.js, Express, MongoDB"
            impact="Launched for 5+ businesses; improved admin efficiency by 35%."
          />
          <ResumeProjectCard
            name="Smart Inventory Forecasting Platform"
            role="ML/Backend Engineer"
            description="Containerized platform for demand forecasting, model selection (ETS/ARIMA), and automated replenishment via Fastify APIs."
            stack="Python, TypeScript, MLflow, Fastify, Docker"
            impact="Reduced stockouts and enabled experiment tracking for inventory operators."
          />
          <ResumeProjectCard
            name="ML/MLOps Pipeline"
            role="MLOps Engineer"
            description="End-to-end ML training pipeline (scikit-learn) with MLflow tracking and Dockerized CI/CD."
            stack="Python, scikit-learn, MLflow, Docker"
            impact="Reduced deploy time from hours to minutes; enabled rapid retraining."
          />
          <ResumeProjectCard
            name="BI Dashboard Solution"
            role="Data Analyst"
            description="Automated EDA and BI reporting with data pipelines and Power BI dashboards."
            stack="Python, SQL, Power BI"
            impact="Streamlined reporting for 3 business units."
          />
        </div>
      </section>

      {/* === Skills === */}
      <section className="mb-10 print:mb-6">
        <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-200">
          <SkillBadge>TypeScript</SkillBadge>
          <SkillBadge>Python</SkillBadge>
          <SkillBadge>React</SkillBadge>
          <SkillBadge>Next.js</SkillBadge>
          <SkillBadge>Node.js</SkillBadge>
          <SkillBadge>Docker</SkillBadge>
          <SkillBadge>MLflow</SkillBadge>
          <SkillBadge>PostgreSQL</SkillBadge>
          <SkillBadge>Power BI</SkillBadge>
          <SkillBadge>Git</SkillBadge>
          <SkillBadge>Scikit-Learn</SkillBadge>
        </div>
      </section>

      {/* === Education === */}
      <section className="mb-10 print:mb-6">
        <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          Education
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              ESPRIT
            </h3>
            <div className="flex flex-wrap gap-x-2 text-sm text-gray-700 dark:text-gray-300">
              <span>Engineering Degree in Computer Science (Data Science)</span>
              <span>&#183;</span>
              <span>Sep 2021 – Feb 2027 (expected)</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              L'école Arabe Jordanienne
            </h3>
            <div className="flex flex-wrap gap-x-2 text-sm text-gray-700 dark:text-gray-300">
              <span>General Secondary Certificate</span>
              <span>&#183;</span>
              <span>2019 – 2021</span>
            </div>
          </div>
        </div>
      </section>

      {/* === Interests === */}
      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          Interests
        </h2>
        <div className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-300">
          <InterestBadge>Muay Thai</InterestBadge>
          <InterestBadge>Motorcycling</InterestBadge>
          <InterestBadge>Fitness</InterestBadge>
          <InterestBadge>Gaming</InterestBadge>
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
    <div>
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <span className="font-semibold text-gray-900 dark:text-white">
          {role}
        </span>
        <span className="text-primary-600 dark:text-primary-400">
          &#183; {company}
        </span>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <ul className="ml-4 list-inside list-disc text-gray-700 dark:text-gray-300">
        {highlights.map((item) => (
          <li key={item} className="leading-tight">
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
}: {
  name: string;
  role: string;
  description: string;
  stack: string;
  impact: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-800 dark:bg-gray-900 dark:text-gray-200 print:border print:bg-white print:text-black">
      <div className="mb-1 font-semibold">{name}</div>
      <div className="mb-1 text-xs italic">{role}</div>
      <div className="mb-2 text-sm">{description}</div>
      <div className="mb-1 text-xs text-primary-700 dark:text-primary-400">
        {stack}
      </div>
      <ul className="ml-4 list-disc text-sm text-gray-700 dark:text-gray-300 print:text-black">
        <li>{impact}</li>
      </ul>
    </div>
  );
}

function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-gray-100 px-3 py-1 font-medium dark:bg-gray-700">
      {children}
    </span>
  );
}

function InterestBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-gray-200 px-3 py-1 dark:border-gray-800">
      {children}
    </span>
  );
}
