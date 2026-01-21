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

const featuredProjects = [
  {
    name: 'Estate-Mind: Real Estate Data Platform',
    role: 'Data Engineer & Analyst',
    description:
      "End-to-end data pipeline and advanced EDA for Tunisia's property market: 15,000+ listings, 7 sources harmonized, with dynamic price heatmaps and clustering.",
    stack: 'Python, pandas, Jupyter, scikit-learn, Plotly, ETL',
    impact:
      'Harmonized 90%+ of data fields, automated cleaning (80% less manual prep), delivered 30+ EDA visualizations and interactive pricing analytics.',
    url: 'https://github.com/mohamedaziz-ouertatani/estate-mind',
  },
  {
    name: 'FLOCK OFF E-Commerce Platform',
    role: 'Full Stack Developer',
    description:
      'MERN-stack e-commerce app with admin dashboard and live inventory/order management.',
    stack: 'React, Node.js, Express, MongoDB',
    impact: 'Launched for 5+ businesses; improved admin efficiency by 35%.',
  },
  {
    name: 'Smart Inventory Forecasting Platform',
    role: 'ML/Backend Engineer',
    description:
      'Containerized platform for demand forecasting, model selection (ETS/ARIMA), and automated replenishment via Fastify APIs.',
    stack: 'Python, TypeScript, MLflow, Fastify, Docker',
    impact:
      'Reduced stockouts and enabled experiment tracking for inventory operators.',
  },
  {
    name: 'ML/MLOps Pipeline',
    role: 'MLOps Engineer',
    description:
      'End-to-end ML training pipeline (scikit-learn) with MLflow tracking and Dockerized CI/CD.',
    stack: 'Python, scikit-learn, MLflow, Docker',
    impact:
      'Reduced deploy time from hours to minutes; enabled rapid retraining.',
  },
  {
    name: 'BI Dashboard Solution',
    role: 'Data Analyst',
    description:
      'Automated EDA and BI reporting with data pipelines and Power BI dashboards.',
    stack: 'Python, SQL, Power BI',
    impact: 'Streamlined reporting for 3 business units.',
  },
];

const SKILLS = [
  'TypeScript',
  'Python',
  'React',
  'Next.js',
  'Node.js',
  'Docker',
  'MLflow',
  'PostgreSQL',
  'Power BI',
  'Git',
  'scikit-learn',
  'pandas',
  'Plotly',
  'Jupyter',
  'ETL',
  'EDA',
  'CI/CD',
  'Outlier Detection',
  'Clustering',
  'Geospatial Analysis',
  'Feature Engineering',
  'Data Pipeline',
  'TailwindCSS',
];

const INTERESTS = [
  'Muay Thai',
  'Motorcycling',
  'Fitness',
  'Gaming',
  'Data Viz',
];

export default function Resume() {
  return (
    <main
      id="main-content"
      className="container mx-auto max-w-3xl px-4 py-12 print:py-8"
    >
      {/* === Resume Hero (Name, Title, Portrait, Download/Contact) === */}
      <section className="relative mb-8 flex animate-fade-in flex-col-reverse items-center gap-6 overflow-hidden rounded-xl bg-white px-6 py-6 shadow-lg dark:bg-gray-800 md:flex-row md:items-center md:justify-between print:bg-white print:shadow-none">
        {/* Headline and actions */}
        <div>
          <h1 className="animate-slide-from-left text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Mohamed Aziz Ouertatani
          </h1>
          <div className="animate-fade-in-more mt-1 text-base font-semibold text-primary-700 dark:text-primary-300 md:text-lg">
            Computer Science Engineering Student | Data Science & Full-Stack
            Development
          </div>
          <div className="animate-fade-in-soon mt-1 flex items-center gap-4 text-sm text-gray-700 dark:text-gray-200">
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
          <div className="animate-float-up relative h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-primary-200 shadow-lg dark:border-primary-700">
            <Image
              src={withBasePath('/me3.png')}
              alt="Mohamed Aziz Ouertatani"
              fill
              className="object-cover"
              priority
              draggable={false}
            />
            {/* Soft glow/ring */}
            {/* <div className="animate-resume-glow pointer-events-none absolute inset-0 rounded-full bg-gradient-to-bl from-primary-100 via-primary-200 to-blue-100 opacity-40 blur-xl"></div> */}
          </div>
        </div>
        {/* Download CV action */}
        <div className="animate-slide-from-right absolute right-0 top-0 flex-shrink-0 md:static print:hidden">
          <a
            href={withBasePath('/cv.pdf')}
            download
            className="animate-pop-in inline-block rounded bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* === Professional Summary === */}
      <section className="animate-fade-in-more mb-10 print:mb-6">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Professional Summary
        </h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-gray-700 dark:text-gray-300 md:text-base">
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
      <section className="animate-fade-in-long mb-10 print:mb-6">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
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

      {/* === Education === */}
      <section className="mb-10 animate-fade-in print:mb-6">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
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

      {/* === Featured Projects === */}
      <section className="animate-pop-in mb-10 print:mb-6">
        <h2 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((proj, idx) => (
            <ResumeProjectCard
              key={proj.name}
              name={proj.name}
              role={proj.role}
              description={proj.description}
              stack={proj.stack}
              impact={proj.impact}
              url={proj.url}
              animate={idx === 0}
            />
          ))}
        </div>
      </section>

      {/* === Skills === */}
      <section className="animate-fade-in-more mb-10 print:mb-6">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-200">
          {SKILLS.map((skill) => (
            <SkillBadge key={skill}>{skill}</SkillBadge>
          ))}
        </div>
      </section>

      {/* === Interests === */}
      <section className="mb-8 animate-slide-up">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Interests
        </h2>
        <div className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-300">
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
        <span className="font-semibold text-gray-900 group-hover:text-primary-700 dark:text-white">
          {role}
        </span>
        <span className="text-primary-600 group-hover:underline dark:text-primary-400">
          &#183; {company}
        </span>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <ul className="ml-4 list-inside list-disc text-gray-700 transition-all duration-200 group-hover:pl-2 dark:text-gray-300">
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
      className={`rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-800 shadow transition-shadow duration-300 dark:bg-gray-900 dark:text-gray-200 print:border print:bg-white print:text-black 
        ${animate ? 'animate-highlight-glow hover:scale-[1.03] hover:shadow-2xl' : 'hover:scale-[1.01] hover:shadow-lg'}
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
      <ul className="ml-4 list-disc text-sm text-gray-700 dark:text-gray-300 print:text-black">
        <li>{impact}</li>
      </ul>
    </div>
  );
}

function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="animate-fade-in-more cursor-pointer rounded-full bg-gray-100 px-3 py-1 font-medium shadow-sm transition-colors hover:bg-primary-50 dark:bg-gray-700 dark:hover:bg-primary-900/20">
      {children}
    </span>
  );
}

function InterestBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="animate-fade-in cursor-pointer rounded-full border border-gray-200 px-3 py-1 transition-colors hover:bg-primary-50 dark:border-gray-800 dark:hover:bg-primary-900/10">
      {children}
    </span>
  );
}
