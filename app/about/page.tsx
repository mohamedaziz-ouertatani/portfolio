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

export default function About() {
  return (
    <div className="container px-4 py-16">
      {/* Bio Section */}
      <section className="mb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
              About Me
            </h1>
            <div className="space-y-5 text-lg text-gray-700 dark:text-gray-300">
              <p>
                I’m a Computer Science Engineering student at{' '}
                <a
                  href="https://esprit.tn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline dark:text-primary-400"
                >
                  ESPRIT
                </a>
                , specializing in Data Science and Full Stack Web Development.
              </p>
              <p>
                My strongest skills are building robust web applications with{' '}
                <strong>React</strong>, <strong>Next.js</strong>,{' '}
                <strong>Node.js</strong>, and <strong>TypeScript</strong>. I
                enjoy taking projects from concept through production and
                iterating with real users.
              </p>
              <p>
                I have hands-on experience in Data Science and ML: from
                exploratory data analysis and BI dashboards to developing ML
                pipelines and deploying models using <strong>Python</strong>,{' '}
                <strong>Pandas</strong>, <strong>scikit-learn</strong>,{' '}
                <strong>MLflow</strong>, and <strong>Docker</strong>.
              </p>
              <p>
                My academic projects aren’t just coursework—they’ve equipped me
                with the tools to ship real, production-ready solutions. Each
                project, from BI dashboards to e-commerce platforms to ML
                pipelines, reflects my approach: ship, learn, improve.
              </p>
              <p>
                Outside of tech, I’m into Muay Thai, fitness, and
                gaming—disciplines that keep me focused and resilient.
              </p>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="relative mx-auto h-[400px] w-[400px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={withBasePath('/me2.jpg')}
                alt="Mohamed Aziz Ouertatani"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Looking For Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          What I’m Looking For
        </h2>
        <ul className="list-inside list-disc space-y-2 text-lg text-gray-700 dark:text-gray-300">
          <li>
            I’m seeking internships or junior roles in full stack web, data
            engineering, or MLOps where I can grow and make a real impact.
          </li>
          <li>
            I thrive in product-focused, collaborative, and data-driven
            teams—especially those where learning and building go hand in hand.
          </li>
          <li>
            I contribute from day one by shipping features, building dashboards,
            or maintaining ML/data pipelines—always focused on delivering
            concrete results.
          </li>
        </ul>
      </section>

      {/* Professional Experience Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Professional Experience
        </h2>
        <div className="space-y-10">
          {experiencesData.map((experience, index) => (
            <article
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <header className="mb-2">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {experience.jobTitle}
                </h3>
                <p className="text-lg text-primary-600 dark:text-primary-400">
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
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.languages.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-white"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.librariesFrameworks.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-white"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.tools.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-white"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Technologies in Practice Subsection */}
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
            items={['Python', 'Pandas', 'scikit-learn', 'MLflow', 'Power BI']}
          />
          <TechCard
            title="Dev & Ops"
            items={['Git', 'Docker', 'CI/CD', 'Containers']}
          />
        </div>
      </section>
    </div>
  );
}

// Inline helper component for stacks
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
