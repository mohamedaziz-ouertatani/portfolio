import Image from 'next/image';
import type { Metadata } from 'next';
import { experiencesData } from '@/lib/experiences';
import skillsData from '@/lib/skills';

export const metadata: Metadata = {
  title: 'About - Mohamed Aziz Ouertatani',
  description:
    'Learn more about Mohamed Aziz Ouertatani - Full Stack Developer, Engineering Student at ESPRIT, and professional Muay Thai fighter.',
};

export default function About() {
  return (
    <div className="container px-4 py-16">
      {/* Bio Section */}
      <section className="mb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
              A Little About Me
            </h1>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Hello! 👋 I&apos;m Aziz, a passionate web developer. Over the
                past few years, I&apos;ve been immersed in the world of
                software development, gaining hands-on experience and honing my
                skills in creating dynamic and responsive web applications.
              </p>
              <p>
                I&apos;m currently a third year student at{' '}
                <a
                  href="https://esprit.tn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline dark:text-primary-400"
                >
                  ESPRIT
                </a>{' '}
                pursuing my Bachelor of Engineering in Computer Science
                specialized in Data Science. I delve into the depths of data
                science, exploring the intricacies of algorithms and data
                structures. My passion for technology extends beyond the
                academic realm. I&apos;m also a professional Muay Thai fighter,
                bringing discipline and determination into everything I do.
              </p>
              <p>
                As I look to the future, my goal is to transition from working
                on projects to making my own projects. I&apos;m driven by the
                desire to make a meaningful impact in the tech world and create
                solutions that resonate with users.
              </p>
              <p className="pt-4">
                When I&apos;m not on the computer, I enjoy going to gym,
                motorcycling, and gaming 🥊🏍️🎮
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
          Experience
        </h2>
        <div className="space-y-8">
          {experiencesData.map((experience, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 p-6 dark:border-gray-800"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {experience.jobTitle}
                </h3>
                <p className="text-lg text-primary-600 dark:text-primary-400">
                  {experience.companyName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {experience.date}
                </p>
              </div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {experience.description}
              </p>
              <div className="mb-4">
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Key Contributions:
                </h4>
                <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                  {experience.contributions.map((contribution, idx) => (
                    <li key={idx}>{contribution}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Skills:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-700 dark:bg-primary-900/20 dark:text-primary-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
            <div className="space-y-3">
              {skillsData.languages.map((skill, idx) => (
                <div key={idx}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-primary-600"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Frameworks & Libraries
            </h3>
            <div className="space-y-3">
              {skillsData.librariesFrameworks.map((skill, idx) => (
                <div key={idx}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-primary-600"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Tools
            </h3>
            <div className="space-y-3">
              {skillsData.tools.map((skill, idx) => (
                <div key={idx}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-primary-600"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
