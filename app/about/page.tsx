import Image from 'next/image';
import type { Metadata } from 'next';
import { experiencesData } from '@/lib/experiences';
import { withBasePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'About - Mohamed Aziz Ouertatani',
  description:
    'Computer Science Engineering student at ESPRIT specialized in Data Science, MLOps, and production-grade full stack development. Proven experience with MLflow, Fastify APIs, Docker pipelines, and quantifiable business impact.',
  alternates: {
    canonical: 'https://mohamedaziz-ouertatani.github.io/portfolio/about/',
  },
};

export default function About() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
      {/* Hero Bio Section (CV-tight, no quotes/motto) */}
      <section className="mb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
              About Me
            </h1>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                Fourth-year Computer Science Engineering student at{' '}
                <a
                  href="https://esprit.tn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary-600 hover:underline dark:text-primary-400"
                >
                  ESPRIT
                </a>
                , specializing in Data Science and production MLOps platforms.
              </p>
              <p>
                Experienced architect: ML forecasting (ETS/ARIMA, MLflow
                tracking), Fastify APIs (JWT/RBAC), PostgreSQL warehousing, and
                Dockerized pipelines delivering BI analytics.
              </p>
              <p>
                Proven at iTransform365 (Next.js) and Swiver (React); shipping
                scalable code from prototype to production.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: 'TypeScript', color: 'primary' },
                { label: 'React/Next.js', color: 'blue' },
                { label: 'Python', color: 'green' },
                { label: 'MLflow/Docker', color: 'indigo' },
                { label: 'PostgreSQL', color: 'gray' },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className={`rounded-lg bg-${color}-100 px-4 py-2 text-sm font-medium text-${color}-700 dark:bg-${color}-900/20 dark:text-${color}-300`}
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm">
              <span className="font-semibold text-gray-900 dark:text-white">
                Languages:
              </span>
              <span className="rounded bg-primary-50 px-3 py-1 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300">
                AR (Native)
              </span>
              <span className="rounded bg-primary-50 px-3 py-1 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300">
                FR (Fluent)
              </span>
              <span className="rounded bg-primary-50 px-3 py-1 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300">
                EN (Fluent)
              </span>
            </div>
          </div>
          <div className="relative mx-auto h-80 w-80 overflow-hidden rounded-2xl border-4 border-white shadow-xl dark:border-gray-800 md:h-96 md:w-96 lg:h-[420px] lg:w-[420px]">
            <Image
              src={withBasePath('/me2.jpg')}
              alt="Mohamed Aziz Ouertatani"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 420px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Career Aspirations */}
      <section className="mb-24">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          <span className="text-primary-700 dark:text-primary-400">
            What I’m Seeking
          </span>
        </h2>
        <div className="grid max-w-2xl gap-6 text-lg text-gray-700 dark:text-gray-300">
          <div>
            <strong>Open to</strong>: Junior or internship positions in Data
            Engineering, MLOps, or Full-Stack Development, remote/hybrid
            (Tunisia/EU).
          </div>
          <div>
            Thrive in product-driven teams—building production ML pipelines and
            dashboards, quantifying business impact, and optimizing data
            workflows.
          </div>
        </div>
      </section>

      {/* Professional Experience (CV-Aligned) */}
      <section className="mb-24">
        <h2 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">
          <span className="text-primary-700 dark:text-primary-400">
            Experience
          </span>
        </h2>
        <div className="space-y-8">
          {experiencesData.map((experience, index) => (
            <article
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/50"
            >
              <header className="mb-6">
                <h3 className="text-2xl font-bold text-primary-700 group-hover:text-primary-800 dark:text-primary-400 dark:group-hover:text-primary-300">
                  {experience.jobTitle}
                </h3>
                <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {experience.companyName}
                </p>
                <p className="mt-1 text-base font-medium text-blue-600 dark:text-blue-400">
                  {experience.date}
                </p>
                <div className="mt-4 flex gap-4 text-sm">
                  {experience.github && (
                    <a
                      href={experience.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary-600 hover:underline dark:text-primary-400"
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
              {experience.jobTitle === 'Academic Project Developer' ? (
                <div>
                  <p className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Developed <strong>Estate-Mind</strong>: an advanced
                    end-to-end data pipeline and exploratory analytics system
                    for Tunisian real estate market data.
                  </p>
                  <ul className="mb-6 ml-6 list-disc space-y-3 text-gray-700 dark:text-gray-300">
                    <li>
                      Automated ETL and normalization for 15,000+ multi-source
                      real estate listings across Tunisia.
                    </li>
                    <li>
                      Designed clustering algorithms, outlier detection, and
                      interactive price benchmarking dashboards for agencies and
                      investors.
                    </li>
                    <li>
                      Delivered reproducible EDA notebooks, geospatial mapping,
                      and reduced manual data prep by 80%.
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  {experience.description && (
                    <p className="mb-6 text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {experience.description}
                    </p>
                  )}
                  <ul className="mb-6 ml-6 list-disc space-y-3 text-gray-700 dark:text-gray-300">
                    {experience.contributions.map((contribution, idx) => (
                      <li key={idx}>{contribution}</li>
                    ))}
                  </ul>
                </>
              )}
              <div className="flex flex-wrap items-center gap-3">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 dark:bg-primary-900/20 dark:text-primary-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Professional Skills Grid (progress bars, 3-column) */}
      <section className="mb-24">
        <h2 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">
          <span className="text-primary-700 dark:text-primary-400">
            Skills & Tools
          </span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <SkillGroup
            title="Languages"
            items={[
              ['Python (Expert)', 95],
              ['TypeScript', 90],
              ['SQL', 85],
              ['Java', 75],
              ['R', 70],
            ]}
          />
          <SkillGroup
            title="Data/ML"
            items={[
              ['Pandas/NumPy', 92],
              ['scikit-learn', 88],
              ['MLflow', 85],
              ['statsmodels', 80],
              ['Metabase/Power BI', 82],
            ]}
          />
          <SkillGroup
            title="DevOps/Backend"
            items={[
              ['Docker', 87],
              ['Fastify/Node', 85],
              ['PostgreSQL', 88],
              ['JWT/RBAC', 82],
            ]}
          />
        </div>
      </section>

      {/* Credentials/Education Section */}
      <section className="mt-24">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Credentials
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Education"
            content="Engineering Degree in Computer Science, Data Science focus. ESPRIT (2021–Present). Areas: ML, Databases, Systems Design."
          />
          <Card
            title="Certifications"
            content="CCNA (Cisco), MongoDB Node.js Developer, Neo4j Fundamentals."
          />
        </div>
      </section>
    </div>
  );
}

/* ------ Helper Components ------ */

function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: [string, number][];
}) {
  return (
    <div>
      <h3 className="mb-4 font-semibold">{title}</h3>
      <div className="space-y-2">
        {items.map(([item, level]) => (
          <div key={item} className="flex items-center gap-2">
            <div className="h-2 flex-1 rounded bg-gray-200 dark:bg-gray-700">
              <div
                className="h-2 rounded bg-primary-600"
                style={{ width: `${level}%` }}
              />
            </div>
            <span className="text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({ title, content }: { title: string; content: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-2 text-lg font-bold text-primary-700 dark:text-primary-400">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">{content}</p>
    </div>
  );
}
