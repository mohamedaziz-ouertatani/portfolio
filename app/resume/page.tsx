import type { Metadata } from 'next';
import { withBasePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Resume | Mohamed Aziz Ouertatani',
  description:
    'Resume of Mohamed Aziz Ouertatani — Computer Science Engineering Student specializing in Data Science and Full-Stack Development.',
  alternates: {
    canonical: 'https://mohamedaziz-ouertatani.github.io/portfolio/resume/',
  },
};

export default function ResumePage() {
  return (
    <main id="main-content" className="container px-4 py-16">
      <div className="mx-auto max-w-5xl space-y-16">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Mohamed Aziz Ouertatani
          </h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
            Computer Science Engineering Student | Data Science & Full-Stack
            Development
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Tunis, Tunisia
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ouertatanimohamedaziz@gmail.com"
              className="text-primary-600 hover:underline dark:text-primary-400"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-aziz-ouertatani"
              target="_blank"
              rel="noreferrer"
              className="text-primary-600 hover:underline dark:text-primary-400"
            >
              LinkedIn
            </a>
            <a
              href={withBasePath('/cv.pdf')}
              download
              className="rounded-lg bg-primary-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-primary-700"
            >
              Download CV
            </a>
          </div>
        </header>

        <section>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Summary
          </h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              4th-year Computer Science Engineering student at ESPRIT (5-year
              program).
            </p>
            <p>
              Specializes in Data Science, Full-Stack Development, and MLOps.
            </p>
            <p>
              Experience in full-stack applications (React, Next.js, Fastify,
              PostgreSQL) and machine learning pipelines (Python, scikit-learn,
              MLflow, Docker).
            </p>
            <p>
              Skilled in statistical analysis, BI dashboards, and reproducible
              reports.
            </p>
            <p>
              Former Front-End Developer at Swiver, contributing to a business
              management platform for invoicing and stock management.
            </p>
            <p>
              Interests: Data Science, MLOps, Full-Stack Engineering, and
              Cybersecurity.
            </p>
            <p>
              Open to internships, training opportunities, and junior roles.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Contact Information
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Email
              </h3>
              <a
                href="mailto:ouertatanimohamedaziz@gmail.com"
                className="text-primary-600 hover:underline dark:text-primary-400"
              >
                ouertatanimohamedaziz@gmail.com
              </a>
            </div>
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/in/mohamed-aziz-ouertatani"
                target="_blank"
                rel="noreferrer"
                className="text-primary-600 hover:underline dark:text-primary-400"
              >
                www.linkedin.com/in/mohamed-aziz-ouertatani
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Top Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Critical Thinking',
              'Design Thinking',
              'Creativity and Innovation',
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Languages
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Arabic
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Native or Bilingual
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                English
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Full Professional
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Certifications
          </h2>
          <ul className="list-inside list-disc text-gray-700 dark:text-gray-300">
            <li>MongoDB Node.js Developer Path</li>
            <li>Neo4j Fundamentals</li>
            <li>CCNA: Switching, Routing, and Wireless Essentials</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="space-y-8 border-l border-gray-300 pl-6 dark:border-gray-700">
            <article className="relative">
              <span className="absolute -left-3 top-2 h-3 w-3 rounded-full bg-primary-600"></span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Next.js Developer — iTransform365
              </h3>
              <p className="text-primary-600 dark:text-primary-400">
                May 2024 - August 2024 (4 months) · Lac 1, Tunis, Tunisia
              </p>
              <ul className="mt-2 list-inside list-disc text-gray-700 dark:text-gray-300">
                <li>
                  Developed and maintained scalable web applications using
                  Next.js.
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver production
                  features.
                </li>
              </ul>
            </article>

            <article className="relative">
              <span className="absolute -left-3 top-2 h-3 w-3 rounded-full bg-primary-600"></span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                React.js Developer — Swiver
              </h3>
              <p className="text-primary-600 dark:text-primary-400">
                Total Duration: 11 months · Centre Urbain Nord, Tunis, Tunisia
              </p>

              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  React.js Developer (Aug 2022 - Apr 2023, 9 months)
                </h4>
                <ul className="mt-2 list-inside list-disc text-gray-700 dark:text-gray-300">
                  <li>
                    Built responsive UI components using React.js and Bootstrap.
                  </li>
                  <li>
                    Implemented multilingual support (Arabic, English, French).
                  </li>
                  <li>
                    Improved component logic using TypeScript and Git-based
                    workflows.
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  React.js Developer (Jun 2022 - Aug 2022, 3 months)
                </h4>
                <ul className="mt-2 list-inside list-disc text-gray-700 dark:text-gray-300">
                  <li>Built web applications using React.js.</li>
                  <li>
                    Worked on Swiver.io, a platform for invoicing and stock
                    management.
                  </li>
                  <li>Developed responsive UIs to improve usability.</li>
                  <li>Contributed to multilingual support (translation).</li>
                  <li>
                    Optimized component logic for enhanced functionality and
                    user experience.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-800">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              ESPRIT
            </h3>
            <p className="text-lg text-primary-600 dark:text-primary-400">
              Engineering Degree in Computer Science (Data Science)
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              September 2021 - February 2027
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
