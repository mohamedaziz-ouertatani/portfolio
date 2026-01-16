import Image from 'next/image';
import type { Metadata } from 'next';
import { experiencesData } from '@/lib/experiences';
import skillsData from '@/lib/skills';

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
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I’m Mohamed Aziz Ouertatani, a Computer Science Engineering
                student at{' '}
                <a
                  href="https://esprit.tn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline dark:text-primary-400"
                >
                  ESPRIT
                </a>{' '}
                specializing in Data Science.
              </p>
              <p>
                With hands-on experience in full-stack development and
                data-driven projects, I focus on building scalable applications
                and applying machine learning to solve real-world problems.
              </p>
              <p>
                My goal is to transition from academic projects to impactful
                professional solutions, combining technical expertise with
                creativity.
              </p>
              <p>
                Outside of tech, I enjoy Muay Thai, fitness, motorcycling, and
                gaming — disciplines that fuel my resilience and focus.
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="relative mx-auto h-[400px] w-[400px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/me.jpg"
                alt="Mohamed Aziz Ouertatani"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiencesData.map((experience, index) => (
            <article
              key={index}
              className="rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-800"
            >
              <header className="mb-4">
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
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {experience.description}
              </p>
              <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                {experience.contributions.map((contribution, idx) => (
                  <li key={idx}>{contribution}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
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
        <div className="grid gap-8 md:grid-cols-3">
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
      </section>
    </div>
  );
}
