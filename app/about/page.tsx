import Image from 'next/image';
import type { Metadata } from 'next';
import { experiencesData } from '@/lib/experiences';
import skillsData from '@/lib/skills';
import { withBasePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'About - Mohamed Aziz Ouertatani',
  description:
    'Portfolio of Mohamed Aziz Ouertatani — Computer Science Engineering Student specializing in Data Science and Full Stack Development.',
  alternates: {
    canonical: 'https://mohamedaziz-ouertatani.github.io/portfolio/about/',
  },
};

// Estate-Mind supplemental/unique skills for the Skills section
const estateMindSkills = [
  'Python',
  'pandas',
  'seaborn',
  'matplotlib',
  'plotly',
  'scikit-learn',
  'Jupyter',
  'ETL',
  'Data Pipeline',
  'EDA',
  'Data Visualization',
  'Outlier Detection',
  'Clustering',
  'Geospatial Analysis',
  'Feature Engineering',
  'Automated Data Enrichment',
];

export default function About() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-16">
      {/* Hero Bio Section */}
      <section className="mb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
              About Me
            </h1>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                <strong>Hi! I’m Mohamed Aziz Ouertatani,</strong> a Computer
                Science Engineering student at{' '}
                <a
                  href="https://esprit.tn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline dark:text-primary-400"
                >
                  ESPRIT
                </a>
                , deeply focused on <b>Data Science</b> and{' '}
                <b>Full Stack Web Development</b>.
              </p>
              <p>
                When I’m not coding, I’m often optimizing workflows, mentoring
                friends, learning new ML tricks, or sparring in Muay Thai. I
                believe in the power of{' '}
                <span className="text-primary-700 dark:text-primary-400">
                  automation
                </span>
                , and I build solutions with the motto:
                <br />
                <span className="font-semibold italic text-blue-700 dark:text-blue-400">
                  "If you can automate it, you should."
                </span>
              </p>
              <p>
                <b>Tech specialties:</b> React, Next.js, Node.js, TypeScript,
                Python, MLOps, scikit-learn, MLflow, Power BI.
                <br />
                <span className="text-sm text-gray-500">
                  I ship robust and scalable web & data products, from idea to
                  production.
                </span>
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded bg-primary-100 px-3 py-1 text-primary-700 dark:bg-primary-900/20 dark:text-primary-200">
                  TypeScript
                </span>
                <span className="rounded bg-blue-100 px-3 py-1 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
                  React/Next.js
                </span>
                <span className="rounded bg-green-100 px-3 py-1 text-green-700 dark:bg-green-900/20 dark:text-green-300">
                  Python
                </span>
                <span className="rounded bg-yellow-100 px-3 py-1 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-200">
                  Data Science
                </span>
                <span className="rounded bg-sky-100 px-3 py-1 text-sky-700 dark:bg-sky-900/20 dark:text-sky-300">
                  MLOps
                </span>
                <span className="rounded bg-gray-100 px-3 py-1 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                  DevOps
                </span>
              </div>
              <div className="pt-1">
                <span className="mr-2 inline-block text-xs font-semibold text-primary-700 dark:text-primary-300">
                  Languages:
                </span>
                <span className="mr-1 rounded bg-primary-50 px-2 py-0.5">
                  AR
                </span>
                <span className="mr-1 rounded bg-primary-50 px-2 py-0.5">
                  FR
                </span>
                <span className="rounded bg-primary-50 px-2 py-0.5">EN</span>
                <span className="ml-3 text-xs text-gray-400">
                  / Native or Fluent
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:justify-end">
            <div className="relative mx-auto h-[320px] w-[320px] overflow-hidden rounded-2xl border-8 border-white shadow-2xl dark:border-gray-800 md:h-[380px] md:w-[380px]">
              <Image
                src={withBasePath('/me2.jpg')}
                alt="Mohamed Aziz Ouertatani"
                fill
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                sizes="(max-width: 768px) 100vw, 380px"
                priority
              />
              {/* Glow */}
              <div className="pointer-events-none absolute -inset-1 z-0 animate-pulse rounded-2xl bg-gradient-to-tr from-primary-100 via-transparent to-blue-50 opacity-70 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Aspirations Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-primary-700 dark:text-primary-400">
          What I’m Looking For
        </h2>
        <ul className="list-inside list-disc space-y-2 text-lg text-gray-700 dark:text-gray-300">
          <li>
            I’m seeking <b>internships</b> or <b>junior roles</b> in full stack
            web, data engineering, or MLOps where I can contribute, learn, and
            grow.
          </li>
          <li>
            I thrive in <b>product-driven</b> and <b>collaborative teams</b>
            —especially where learning, code reviews, and building go hand in
            hand.
          </li>
          <li>
            I love shipping features, building dashboards, and turning ML/data
            prototypes into business value.
          </li>
        </ul>
        <div className="mt-5 text-base text-gray-500">
          <strong>Open to:</strong> Internships, part/full-time, research roles,
          and remote or hybrid setups.
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-18">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          <span className="text-primary-800 dark:text-primary-400">
            Professional Experience
          </span>
        </h2>
        <div className="space-y-10">
          {experiencesData.map((experience, index) =>
            experience.jobTitle === 'Academic Project Developer' ? (
              <article
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <header className="mb-2">
                  <h3 className="text-2xl font-semibold text-primary-700 dark:text-primary-400">
                    {experience.jobTitle}
                  </h3>
                  <p className="text-lg font-medium text-blue-700 dark:text-blue-300">
                    {experience.companyName}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {experience.date}
                  </p>
                </header>
                {experience.description && (
                  <p className="mb-4 font-medium text-gray-800 dark:text-gray-200">
                    {experience.description}
                  </p>
                )}
                {/* --- Enhanced Estate-Mind achievement --- */}
                <div className="mb-4 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                  <div className="mb-1 font-bold text-blue-900 dark:text-blue-200">
                    <span className="text-lg">
                      🏆 Featured: Estate-Mind — Advanced Data Pipeline & EDA
                      for Tunisian Real Estate
                    </span>
                  </div>
                  <div className="mb-2 text-base text-gray-700 dark:text-gray-300">
                    <b>Role:</b> Data Engineer & Analyst
                    <br />
                    <b>Impact:</b> Automated consolidation and EDA for 15,000+
                    listings, harmonizing 90%+ fields from 7+ sources.
                    <br />
                    Designed a robust ETL pipeline for multi-source web data,
                    conducted geospatial clustering, price heatmap generation,
                    and built 30+ meaningful analytics to drive the first
                    cross-market price benchmarking in Tunisia.
                  </div>
                  <ul className="mb-2 ml-5 list-disc text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      Reduced manual data preparation by 80% for academic
                      BI/analytics tasks
                    </li>
                    <li>
                      Delivered true city-by-city price heatmaps and outlier
                      analytics for actionable urban insights
                    </li>
                    <li>
                      Published reproducible notebooks blending EDA, geospatial
                      mapping & clustering (Python, pandas, scikit-learn,
                      plotly)
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {estateMindSkills.map((s) => (
                      <span
                        key={s}
                        className="rounded bg-gray-200 px-2 py-1 text-xs dark:bg-gray-700 dark:text-white"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {/* <div className="flex flex-wrap gap-4 pt-3">
                    <a
                      className="font-semibold text-primary-600 underline dark:text-primary-400"
                      href="https://github.com/mohamedaziz-ouertatani/estate-mind-tayara-eda"
                      target="_blank"
                      rel="noopener"
                    >
                      GitHub Repo
                    </a>
                    <a
                      className="font-semibold text-green-700 underline dark:text-green-300"
                      href="https://github.com/mohamedaziz-ouertatani/estate-mind-tayara-eda#demo"
                      target="_blank"
                      rel="noopener"
                    >
                      Visual Demo
                    </a>
                  </div> */}
                </div>
                {/* --- End enhancement --- */}
                <ul className="mb-3 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                  {experience.contributions.map((contribution, idx) => (
                    <li key={idx}>{contribution}</li>
                  ))}
                </ul>
                <div className="mt-2 flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-700 dark:bg-primary-900/20 dark:text-primary-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ) : (
              <article
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <header className="mb-2">
                  <h3 className="text-2xl font-semibold text-primary-700 dark:text-primary-400">
                    {experience.jobTitle}
                  </h3>
                  <p className="text-lg font-medium text-blue-700 dark:text-blue-300">
                    {experience.companyName}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {experience.date}
                  </p>
                </header>
                {experience.description && (
                  <p className="mb-4 font-medium text-gray-800 dark:text-gray-200">
                    {experience.description}
                  </p>
                )}
                <ul className="mb-3 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                  {experience.contributions.map((contribution, idx) => (
                    <li key={idx}>{contribution}</li>
                  ))}
                </ul>
                <div className="mt-2 flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-700 dark:bg-primary-900/20 dark:text-primary-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          )}
        </div>
      </section>

      {/* Skills Section - now includes Estate-Mind stack */}
      <section className="mt-24">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          <span className="text-primary-800 dark:text-primary-400">
            Skills At a Glance
          </span>
        </h2>
        <div className="mb-12 grid gap-8 text-base md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {/* estateMindSkills merged into skillsData.languages (if not present) */}
              {[
                ...skillsData.languages.map((s) => s.name),
                ...(estateMindSkills.includes('Python') ? [] : ['Python']),
                ...(estateMindSkills.includes('Jupyter') ? [] : ['Jupyter']),
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                ...skillsData.librariesFrameworks.map((s) => s.name),
                ...estateMindSkills.filter(
                  (s) =>
                    [
                      'pandas',
                      'seaborn',
                      'matplotlib',
                      'plotly',
                      'scikit-learn',
                    ].includes(s) &&
                    !skillsData.librariesFrameworks
                      .map((f) => f.name)
                      .includes(s)
                ),
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Tools & Techniques
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                ...skillsData.tools.map((s) => s.name),
                ...estateMindSkills.filter(
                  (s) =>
                    [
                      'ETL',
                      'Data Pipeline',
                      'EDA',
                      'Data Visualization',
                      'Outlier Detection',
                      'Clustering',
                      'Geospatial Analysis',
                      'Feature Engineering',
                      'Automated Data Enrichment',
                    ].includes(s) &&
                    !skillsData.tools.map((t) => t.name).includes(s)
                ),
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Technologies in Practice */}
        <h3 className="mb-6 mt-2 text-xl font-bold text-gray-900 dark:text-white">
          Technologies In Practice
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <TechCard
            title="Web Applications"
            items={['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB']}
          />
          <TechCard
            title="Data & ML"
            items={[
              'Python',
              'Pandas',
              'scikit-learn',
              'MLflow',
              'Power BI',
              'Data Pipeline',
              'EDA',
              'Geospatial Analysis',
            ]}
          />
          <TechCard
            title="Dev & Ops"
            items={['Git', 'Docker', 'CI/CD', 'Containers']}
          />
        </div>
      </section>

      {/* Extra: Fun Facts, Interests */}
      <section className="mt-24">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          Beyond Coding
        </h2>
        <div className="grid items-start gap-10 md:grid-cols-2">
          <ul className="space-y-2 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <li>
              🥊 Practicing <strong>Muay Thai</strong> (martial arts,
              discipline, and mental focus)
            </li>
            <li>
              🏍️ Enjoy riding motorcycles, adventure, and the thrill of
              mastering new skills
            </li>
            <li>
              🎮 Gaming (strategy, reflexes, teamwork), video editing, and
              creative coding mini-projects
            </li>
            <li>
              📊 Love storytelling through data visualizations and slide design
            </li>
          </ul>
          <div>
            <div className="rounded-lg bg-sky-50 p-4 dark:bg-sky-900/10">
              <div className="mb-2 font-semibold text-primary-700 dark:text-primary-300">
                Fun Fact:
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Built a 2D game with a custom Arduino joystick and automated ML
                reporting for my own study projects.
              </div>
            </div>
            <div className="mt-6 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/10">
              <div className="mb-2 font-semibold text-yellow-800 dark:text-yellow-200">
                My philosophy:
              </div>
              <div className="italic text-gray-600 dark:text-gray-300">
                "Be the engineer who adapts fast and leaves things better than
                they found them."
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ----- Inline helper -----
function TechCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-800/50">
      <h4 className="mb-2 text-lg font-semibold text-primary-700 dark:text-primary-400">
        {title}
      </h4>
      <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
