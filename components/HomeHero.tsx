'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Layout, Mail, Download } from 'lucide-react';
import { withBasePath } from '@/lib/basePath';

const HEADLINES = [
  'Computer Science Engineering Student',
  'Full Stack & Frontend Enthusiast',
  'ML • Data Science Explorer',
  'Builder of Robust Digital Systems',
  'Problem-Solver. Innovator. Quick Learner.',
];

function TypingEffect({ texts }: { texts: string[] }) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1200);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
        setText(texts[index].substring(0, subIndex));
      },
      deleting ? 20 : 38
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts]);

  return (
    <span className="inline-block min-h-[2em] text-xl font-bold text-primary-700 transition-all dark:text-primary-400 md:text-2xl lg:text-3xl">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function HomeHero() {
  // Remove parallax/floating/tilt: image stays fixed
  const [hover, setHover] = useState(false);

  // (Optionally, remove containerRef/tilt as they're unused)
  // const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mb-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Text Block */}
        <div className="flex max-w-2xl animate-fade-in flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 drop-shadow dark:text-white sm:text-5xl lg:text-6xl">
            Hi, I'm{' '}
            <span className="animate-gradient-x inline-block bg-gradient-to-r from-primary-600 via-blue-600 to-primary-400 bg-clip-text text-transparent dark:from-primary-400 dark:to-blue-300">
              Mohamed Aziz Ouertatani
            </span>
          </h1>
          <div className="mb-2 md:mb-4">
            <TypingEffect texts={HEADLINES} />
          </div>
          <div className="mb-2 flex flex-wrap justify-center gap-3 text-base lg:justify-start">
            <span className="rounded bg-primary-100 px-3 py-1 font-semibold text-primary-700 dark:bg-primary-900/20 dark:text-primary-200">
              Next.js
            </span>
            <span className="rounded bg-blue-100 px-3 py-1 font-semibold text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
              TypeScript
            </span>
            <span className="rounded bg-gray-100 px-3 py-1 font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-200">
              Python
            </span>
            <span className="rounded bg-green-100 px-3 py-1 font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-400">
              ML • Data
            </span>
            <span className="rounded bg-yellow-100 px-3 py-1 font-semibold text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-200">
              MLOps
            </span>
          </div>
          <p className="mb-2 mt-6 text-xl font-bold text-gray-800 dark:text-gray-100">
            I create{' '}
            <span className="text-primary-600 dark:text-primary-400">
              robust, scalable
            </span>{' '}
            digital solutions
          </p>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            Bringing together{' '}
            <span className="font-semibold">web engineering</span>,{' '}
            <span className="font-semibold">machine learning</span>, and proven{' '}
            <span className="font-semibold">DevOps</span> for real-world value.{' '}
            <br />
            Specializing in:
            <ul className="ml-3 mt-1 list-inside list-disc text-base text-gray-500 dark:text-gray-400">
              <li>
                Production-ready apps with Next.js/TypeScript, REST & GraphQL
                APIs, SSR/SSG, and auth
              </li>
              <li>
                ML pipelines (Python, MLflow, Docker) for experiment tracking,
                model orchestration, reproducibility
              </li>
              <li>
                Beautiful, accessible interfaces (Tailwind, Headless UI, React)
              </li>
              <li>
                Automated BI & analytics with Power BI, Google Data Studio,
                custom reporting
              </li>
              <li>CI/CD and automated deployment across platforms</li>
            </ul>
          </p>
          <p className="mb-4 text-base text-gray-600 dark:text-gray-400">
            <b>Open to:</b> Full Stack, ML, Data positions, part/full-time or
            internships.
          </p>
          {/* Quick cards for contact/download */}
          <div className="mb-6 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <Layout size={18} /> View Projects
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-lg border-2 border-primary-600 px-6 py-3 font-medium text-primary-600 transition-colors hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20"
            >
              <Mail size={18} /> Get in Touch
            </Link>
            <a
              href={withBasePath('/cv.pdf')}
              download
              className="flex items-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <Download size={18} /> CV
            </a>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Find me on:
            </span>
            <a
              href="mailto:ouertatanimohamedaziz@gmail.com"
              target="_blank"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-primary-700 shadow transition-transform hover:scale-110 dark:bg-gray-700 dark:text-primary-400"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://linkedin.com/in/mohamed-aziz-ouertatani"
              target="_blank"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-blue-700 shadow transition-transform hover:scale-110 dark:bg-gray-700 dark:text-blue-300"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.314 3.5c2.579 0 4.186 1.608 4.186 4.187v8.627c0 2.588-1.607 4.186-4.186 4.186H7.687C5.099 20.5 3.5 18.902 3.5 16.314V7.687C3.5 5.099 5.099 3.5 7.687 3.5H16.314zm-6.905 14.036V9.968H6.211v7.568h3.198zm-1.614-8.589a1.817 1.817 0 1 1 0-3.634 1.817 1.817 0 0 1 0 3.634zm10.506 8.589v-4.211c0-1.021-.362-1.719-1.266-1.719-.692 0-1.102.466-1.283.916-.066.159-.083.38-.083.601v4.413h-3.198s.043-7.161 0-7.568h3.198v1.074a3.178 3.178 0 0 1 2.864-1.54c2.092 0 3.663 1.369 3.663 4.313v3.721h-3.195z" />
              </svg>
            </a>
            <a
              href="https://github.com/mohamedaziz-ouertatani"
              target="_blank"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900 shadow transition-transform hover:scale-110 dark:bg-gray-700 dark:text-gray-300"
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                  0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11
                  -1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531
                  1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22
                  -.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253
                  -.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112
                  6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546
                  1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339
                  4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012
                  2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522
                  2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Static Image -- no parallax, no tilt, no floating */}
        <div className="flex flex-col items-center">
          <div
            className="relative mx-auto h-[250px] w-[250px] overflow-hidden rounded-full border-8 border-white shadow-2xl transition-transform duration-200 will-change-transform dark:border-gray-800 sm:h-[325px] sm:w-[325px] lg:h-[420px] lg:w-[420px]"
            style={{
              transform: `scale(${hover ? 1.03 : 1})`,
              boxShadow: hover
                ? '0 0 64px 16px rgba(59, 130, 246, 0.33), 0px 0px 0px 1px rgba(59,130,246,0.08)'
                : '0 12px 56px 0 rgba(0,0,0,.11), 0px 0px 0px 1px rgba(59,130,246,0.09)',
              transition:
                'transform 0.12s cubic-bezier(.3,.7,.4,1.5), box-shadow 0.2s',
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {/* Animated long glow (optional, remains) */}
            <div className="pointer-events-none absolute inset-0 z-10 rounded-full">
              <div
                className="animate-hero-glow pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    'radial-gradient(ellipse at 60% 40%, rgba(59, 130, 246, 0.12) 0%, transparent 80%)',
                }}
              />
            </div>
            <Image
              src={withBasePath('/me.jpg')}
              alt="Mohamed Aziz Ouertatani"
              fill
              className="object-cover transition-transform duration-200 will-change-transform"
              priority
              draggable={false}
            />
            {/* Subtle floating shimmer/scan */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <div className="animate-hero-shimmer absolute h-full w-full bg-gradient-to-t from-transparent via-white/5 to-transparent" />
            </div>
          </div>
          {/* Caption */}
          <span className="mt-5 block text-center text-lg font-semibold text-gray-700 dark:text-gray-200">
            <span className="block">"If you can automate it, you should."</span>
            <span className="text-sm text-gray-400">
              — Let&apos;s build something exceptional!
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
