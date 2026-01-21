'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import type { Metadata } from 'next';
import {
  Code2,
  Database,
  Layout,
  Briefcase,
  GraduationCap,
  Download,
  Mail,
  Dumbbell,
  Gamepad2,
  Bike,
  Swords,
} from 'lucide-react';
import { withBasePath } from '@/lib/basePath';
import HomeHero from '@/components/HomeHero';

// export const metadata: Metadata = {
//   title: 'Home - Mohamed Aziz Ouertatani',
//   description:
//     'Computer Science Engineering student specializing in Data Science and Full Stack Development. Experienced in React, Next.js, Node.js, TypeScript, and modern web technologies.',
//   alternates: {
//     canonical: 'https://mohamedaziz-ouertatani.github.io/portfolio/',
//   },
// };

// Simple typing effect for headlines
const HEADLINES = [
  'Computer Science Engineering Student',
  'React & Next.js Enthusiast',
  'ML & Data Science Explorer',
  'Building Production-ready Solutions',
];

function TypingEffect({ texts }: { texts: string[] }) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1300);
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
      deleting ? 32 : 48
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts]);

  return (
    <span className="inline-block min-h-[1.5em] text-primary-600 transition-all dark:text-primary-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// Scroll-into-view effect for section reveals
function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 80) setVisible(true);
    };
    window.addEventListener('scroll', handler);
    handler(); // Run on mount
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return [ref, visible] as const;
}

export default function Home() {
  // Parallax effect for hero image, only for desktop screens
  const [imgOffset, setImgOffset] = useState(0);
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      setImgOffset(scrollY * 0.2);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  // Animated section fade-in
  const [valueRef, valueVisible] = useScrollFadeIn();
  const [dataRef, dataVisible] = useScrollFadeIn();
  const [skillsRef, skillsVisible] = useScrollFadeIn();

  return (
    <div className="container mx-auto px-4 py-6 sm:py-10 md:py-16">
      {/* HERO SECTION */}
      <HomeHero />
      {/* <section className="mb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex animate-fade-in flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Hi, I'm{' '}
              <span className="animate-gradient-x inline-block bg-gradient-to-r from-primary-600 via-blue-600 to-primary-400 bg-clip-text text-transparent dark:from-primary-400 dark:to-blue-300">
                Mohamed Aziz Ouertatani
              </span>
            </h1>
            <div className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200 sm:text-xl">
              <TypingEffect texts={HEADLINES} />
            </div>
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
              Specialized in <strong>React</strong>, <strong>Next.js</strong>,{' '}
              <strong>Node.js</strong>, <strong>TypeScript</strong>, and{' '}
              <strong>Data Science</strong> (Python, ML, MLOps).
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
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
            <div className="mt-6 flex flex-row gap-3">
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
            </div>
          </div>
          <div className="animate-slide-up">
            <div
              className="relative mx-auto h-[260px] w-[260px] overflow-hidden rounded-full border-8 border-white shadow-2xl will-change-transform dark:border-gray-800 sm:h-[320px] sm:w-[320px] lg:h-[400px] lg:w-[400px]"
              style={{ transform: `translateY(${imgOffset}px)` }}
            >
              <Image
                src={withBasePath('/me.jpg')}
                alt="Mohamed Aziz Ouertatani"
                fill
                className="object-cover"
                priority
              />
              <div className="animate-floating pointer-events-none absolute inset-0 rounded-full" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Value Proposition - fade up effect */}
      <section
        ref={valueRef}
        className={`mb-20 transition-opacity duration-1000 ${valueVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
          What I Bring
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ValueCard
            icon={<Code2 className="text-primary-600" />}
            title="Full Stack Development"
            description="End-to-end development with React, Next.js, Node.js, and MongoDB."
          />
          <ValueCard
            icon={<Database className="text-primary-600" />}
            title="Data Science & ML"
            description="Analysis and modeling using Python (Pandas, Scikit-Learn) and R."
          />
          <ValueCard
            icon={<Layout className="text-primary-600" />}
            title="Modern UI/UX"
            description="Responsive, accessible designs using Tailwind CSS and TypeScript."
          />
        </div>
      </section>

      {/* Data Science Focus - fade up effect */}
      <section
        ref={dataRef}
        className={`mb-20 transition-opacity duration-1000 ${dataVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Data Science Focus
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ValueCard
            icon={<Database className="text-primary-600" />}
            title="EDA & BI Dashboards"
            description="Exploratory analysis and dashboards in Power BI & Google Data Studio."
          />
          <ValueCard
            icon={<Database className="text-primary-600" />}
            title="ML Pipelines"
            description="Model training, evaluation, experiment tracking with scikit-learn/MLflow."
          />
          <ValueCard
            icon={<Database className="text-primary-600" />}
            title="MLOps"
            description="Containerized deployment with Docker and fully reproducible workflows."
          />
        </div>
        {/* Data & ML Projects Subsection */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <MiniProjectItem
            project="Business Intelligence Dashboard"
            type="BI dashboard & EDA"
            tools="Python, Pandas, Power BI"
            outcome="Streamlined report generation for 3 business units"
          />
          <MiniProjectItem
            project="End-to-end ML Pipeline"
            type="ML + MLOps"
            tools="scikit-learn, MLflow, Docker"
            outcome="Deployed scalable prediction workflow—improved accuracy by 14%"
          />
        </div>
      </section>

      {/* Featured Projects - fade in */}
      <section
        ref={skillsRef}
        className={`mb-20 transition-opacity duration-1000 ${skillsVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeaturedProjectCard
            name="FLOCK OFF E-Commerce"
            description="Built an affordable e-commerce platform for small businesses needing inventory and order management. Implemented with MERN stack, cart control, and admin dashboard."
            techStack="React • Node.js • MongoDB"
            impact="Launched for 5+ businesses; improved admin efficiency by 35%"
          />
          <FeaturedProjectCard
            name="ML/MLOps Pipeline"
            description="Designed an automated ML pipeline for experiment tracking and deployment. Used scikit-learn for modeling and MLflow/Docker for reproducible training and inference."
            techStack="Python • scikit-learn • MLflow • Docker"
            impact="Reduced deploy time from hours to minutes; enabled rapid retraining"
          />
          <FeaturedProjectCard
            name="BI Dashboard Solution"
            description="Developed a BI dashboard and reporting workflow for operations analysis. Integrated Python data pipelines with Power BI for clean visualization."
            techStack="Python • Power BI • Pandas"
            impact="Provided actionable insight for 3 business units"
          />
        </div>
      </section>

      {/* Experience & Education */}
      <div className="mb-20 grid gap-12 lg:grid-cols-2">
        <section>
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="text-primary-600" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Experience
            </h2>
          </div>
          <div className="space-y-6">
            <ExperienceCard
              role="Next.js Developer"
              company="iTransform365"
              date="2024"
              highlights={[
                'Brought 3 new features to production in Next.js/TypeScript stack',
                'Led transition to optimized static export, boosting CI speed by 40%',
                'Collaborated with cross-functional teams on scalable solutions',
              ]}
            />
            <ExperienceCard
              role="React.js Developer"
              company="Swiver"
              date="2022 – 2023"
              highlights={[
                'Built multilingual UI used by 200+ business users (EN/FR/AR)',
                'Upgraded invoice & stock management, saving manual steps',
                'Enhanced performance and accessibility of core components',
              ]}
            />
          </div>
        </section>

        <section>
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary-600" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>
          </div>
          <div className="space-y-6">
            <EducationCard
              school="ESPRIT"
              degree="Engineering in CS (Data Science)"
              date="2021 – Present"
            />
            <EducationCard
              school="L'école Arabe Jordanienne"
              degree="General Secondary Certificate"
              date="2019 – 2021"
            />
          </div>
        </section>
      </div>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white lg:text-left">
          Skills Snapshot
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkillGroup
            title="Languages"
            skills={['TypeScript', 'Python', 'Java', 'SQL', 'R']}
          />
          <SkillGroup
            title="Frameworks"
            skills={['React', 'Next.js', 'Node.js', 'Express', 'Tailwind']}
          />
          <SkillGroup
            title="Tools"
            skills={['Git', 'Docker', 'MongoDB', 'PostgreSQL', 'Scikit-Learn']}
          />
        </div>
      </section>

      {/* Interests */}
      <section className="mb-16 rounded-2xl bg-gray-50 p-8 dark:bg-gray-900/50">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Beyond Coding
        </h2>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Outside of engineering, I am deeply committed to physical discipline
            and adventure. Whether it&apos;s the strategic intensity of{' '}
            <strong>Muay Thai</strong> or the focus required for{' '}
            <strong>motorcycling</strong>, I enjoy pushing my limits.
          </p>
          <div className="flex flex-wrap justify-center gap-6 lg:justify-end">
            <InterestItem icon={<Swords />} label="Muay Thai" />
            <InterestItem icon={<Bike />} label="Motorcycling" />
            <InterestItem icon={<Dumbbell />} label="Fitness" />
            <InterestItem icon={<Gamepad2 />} label="Gaming" />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ====== Helper Components ====== (unchanged layout, but animated effects etc can be added) */

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-xl border border-gray-200 bg-white p-8 transition-all hover:border-primary-500 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4 inline-block rounded-lg bg-primary-50 p-3 transition-transform group-hover:scale-110 dark:bg-primary-900/20">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      <span className="absolute bottom-4 right-4 rounded bg-primary-100 px-2 py-1 text-xs text-primary-600 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-primary-900/20 dark:text-primary-400">
        Explore
      </span>
    </div>
  );
}

function FeaturedProjectCard({
  name,
  description,
  techStack,
  impact,
}: {
  name: string;
  description: string;
  techStack: string;
  impact: string;
}) {
  return (
    <div className="group relative rounded-xl border border-gray-200 bg-white p-8 transition-all hover:border-primary-500 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        {name}
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300">{description}</p>
      <div className="mb-1 text-xs font-semibold text-primary-600 dark:text-primary-400">
        {techStack}
      </div>
      <ul className="mt-2 list-inside list-disc pl-2 text-sm text-gray-700 dark:text-gray-300">
        <li>{impact}</li>
      </ul>
      <span className="absolute right-4 top-4 rounded bg-blue-100 px-2 py-1 text-xs text-blue-700 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-blue-900/20 dark:text-blue-300">
        Details
      </span>
    </div>
  );
}

function MiniProjectItem({
  project,
  type,
  tools,
  outcome,
}: {
  project: string;
  type: string;
  tools: string;
  outcome: string;
}) {
  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-900/20">
      <h4 className="font-semibold text-blue-800 dark:text-blue-300">
        {project}
      </h4>
      <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
        {type} &mdash; <span className="italic">{tools}</span>
      </p>
      {/* If you want an effect, animate on hover or reveal outcome */}
    </div>
  );
}

function ExperienceCard({
  role,
  company,
  date,
  highlights,
}: {
  role: string;
  company: string;
  date: string;
  highlights: string[];
}) {
  return (
    <div className="relative border-l-2 border-gray-200 pl-6 transition-colors hover:border-primary-500 dark:border-gray-800">
      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary-600" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {role}
      </h3>
      <p className="mb-2 text-sm font-medium text-primary-600 dark:text-primary-400">
        {company} • {date}
      </p>
      <ul className="ml-4 list-disc space-y-1 text-gray-700 dark:text-gray-300">
        {highlights.map((hl) => (
          <li key={hl}>{hl}</li>
        ))}
      </ul>
    </div>
  );
}

function EducationCard({
  school,
  degree,
  date,
}: {
  school: string;
  degree: string;
  date: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {school}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">{degree}</p>
      <p className="mt-1 text-sm text-gray-500">{date}</p>
    </div>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-800/50">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function InterestItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 transition-transform hover:scale-105">
      <div className="rounded-full bg-white p-4 text-primary-600 shadow-md dark:bg-gray-800">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </span>
    </div>
  );
}
