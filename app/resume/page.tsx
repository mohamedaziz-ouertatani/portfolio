import type { Metadata } from 'next';
import { experiencesData } from '@/lib/experiences';
import { projectsData } from '@/lib/projects';
import skillsData from '@/lib/skills';
import { withBasePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Resume | Mohamed Aziz Ouertatani',
  description:
    'Interactive resume and portfolio of Mohamed Aziz Ouertatani — Data Science Engineering Student and Full Stack Developer.',
  alternates: {
    canonical: 'https://mohamedaziz-ouertatani.github.io/portfolio/resume/',
  },
};

export default function ResumePage() {
  return (
    <main id="main-content" className="container px-4 py-16">
      <div className="mx-auto max-w-5xl space-y-16">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Mohamed Aziz Ouertatani
          </h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
            Computer Science Engineering Student · Data Science · Full Stack
            Developer
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:mohamedaziz.ouertatani@esprit.tn"
              className="text-primary-600 hover:underline dark:text-primary-400"
            >
              Email
            </a>
            <a
              href="tel:+21629241717"
              className="text-primary-600 hover:underline dark:text-primary-400"
            >
              Phone
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
              href="https://github.com/mohamedaziz-ouertatani"
              target="_blank"
              rel="noreferrer"
              className="text-primary-600 hover:underline dark:text-primary-400"
            >
              GitHub
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

        {/* Timeline Experience */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            Experience Timeline
          </h2>
          <div className="space-y-8 border-l border-gray-300 pl-6 dark:border-gray-700">
            {experiencesData.map((exp) => (
              <div key={exp.jobTitle} className="relative">
                <span className="absolute -left-3 top-2 h-3 w-3 rounded-full bg-primary-600"></span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.jobTitle}
                </h3>
                <p className="text-primary-600 dark:text-primary-400">
                  {exp.companyName} · {exp.date}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
                <ul className="mt-2 list-inside list-disc text-gray-600 dark:text-gray-400">
                  {exp.contributions.slice(0, 3).map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            Skills
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.languages.map((s) => (
                  <span
                    key={s.name}
                    className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-white"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.librariesFrameworks.map((s) => (
                  <span
                    key={s.name}
                    className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-white"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.tools.map((s) => (
                  <span
                    key={s.name}
                    className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-white"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            Highlighted Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projectsData.slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-800"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  <strong>Technologies:</strong>{' '}
                  {project.technologies.join(', ')}
                </p>
                <div className="mt-3 flex gap-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary-600 hover:underline dark:text-primary-400"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveDemoLink && (
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary-600 hover:underline dark:text-primary-400"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            Beyond Tech
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Outside of engineering, I’m passionate about Muay Thai, fitness,
            motorcycling, and gaming. These pursuits fuel my discipline,
            creativity, and resilience.
          </p>
        </section>
      </div>
    </main>
  );
}
