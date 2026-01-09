import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume - Mohamed Aziz Ouertatani',
  description:
    'Download the resume of Mohamed Aziz Ouertatani - Full Stack Developer and Engineering Student.',
  alternates: {
    canonical: 'https://mohamedaziz-ouertatani.github.io/resume',
  },
};

export default function Resume() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/20">
              <svg
                className="h-8 w-8 text-primary-600 dark:text-primary-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Resume / CV
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Download my resume to learn more about my experience, skills, and
            education.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
              Mohamed Aziz Ouertatani
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Full Stack Developer & Engineering Student
            </p>
          </div>

          <div className="mb-6 space-y-2 text-gray-700 dark:text-gray-300">
            <p>
              <strong>Education:</strong> Computer Science Engineering at ESPRIT
            </p>
            <p>
              <strong>Specialization:</strong> Data Science
            </p>
            <p>
              <strong>Core Skills:</strong> React, Node.js, TypeScript,
              MongoDB, Express
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/cv.pdf"
              download
              className="flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Resume
            </a>
            <a
              href="/about"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary-600 px-6 py-3 font-medium text-primary-600 transition-colors hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              View Full Profile
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-800/50">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Quick Links
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="/projects"
              className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="h-6 w-6 text-primary-600 dark:text-primary-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    View Projects
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    See my portfolio work
                  </p>
                </div>
              </div>
            </a>
            <a
              href="/contact"
              className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="h-6 w-6 text-primary-600 dark:text-primary-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Get in Touch
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Let&apos;s connect
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
