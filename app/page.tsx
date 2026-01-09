import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Mohamed Aziz Ouertatani',
  description:
    'Full Stack Developer specializing in MERN stack, TypeScript, and modern web technologies. Currently studying Computer Science at ESPRIT.',
  alternates: {
    canonical: 'https://mohamedaziz-ouertatani.github.io',
  },
};

export default function Home() {
  return (
    <div className="container px-4 py-16">
      {/* Hero Section - 30 second recruiter view */}
      <section className="mb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-in">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{' '}
              <span className="text-primary-600 dark:text-primary-400">
                Aziz
              </span>
            </h1>
            <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
              Full Stack Developer & Engineering Student
            </p>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              I build scalable web applications using{' '}
              <strong>React, Node.js, TypeScript,</strong> and modern
              technologies. Currently pursuing Computer Science at ESPRIT with a
              focus on Data Science.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border-2 border-primary-600 px-6 py-3 font-medium text-primary-600 transition-colors hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                Get in Touch
              </Link>
              <a
                href="/cv.pdf"
                download
                className="rounded-lg border-2 border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="relative mx-auto h-[400px] w-[400px] overflow-hidden rounded-full shadow-2xl">
              <Image
                src="/me.jpg"
                alt="Mohamed Aziz Ouertatani"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Value - What I Offer */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
          What I Bring
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg dark:border-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/20">
              <svg
                className="h-6 w-6 text-primary-600 dark:text-primary-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Full Stack Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              End-to-end web application development with React, Node.js,
              Express, and MongoDB. Building scalable and maintainable
              solutions.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg dark:border-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/20">
              <svg
                className="h-6 w-6 text-primary-600 dark:text-primary-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Modern UI/UX
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Responsive and accessible interfaces with React, TypeScript, and
              modern CSS frameworks. Focus on user experience and performance.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg dark:border-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/20">
              <svg
                className="h-6 w-6 text-primary-600 dark:text-primary-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Fast Learner
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Quick to adapt to new technologies and frameworks. Passionate
              about learning and implementing best practices in software
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="rounded-lg bg-gray-50 p-8 dark:bg-gray-800/50">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Experience Highlight
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Front End Developer at Swiver
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Jun 2022 - Apr 2023
          </p>
        </div>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Built responsive web applications using React JS and TypeScript for a
          business management platform. Contributed to multilingual support
          (Arabic, English, French) and improved overall functionality.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center text-primary-600 hover:underline dark:text-primary-400"
        >
          Learn more about me
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
