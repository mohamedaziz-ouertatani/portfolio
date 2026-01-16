import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Code2,
  Database,
  Layout,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Download,
  Mail,
  Dumbbell,
  Gamepad2,
  Bike,
  Swords,
} from 'lucide-react';
import { withBasePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Home - Mohamed Aziz Ouertatani',
  description:
    'Computer Science Engineering student specializing in Data Science and Full Stack Development. Experienced in React, Next.js, Node.js, TypeScript, and modern web technologies.',
  alternates: {
    canonical: 'https://mohamedaziz-ouertatani.github.io/portfolio/',
  },
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{' '}
              <span className="text-primary-600 dark:text-primary-400">
                Mohamed Aziz Ouertatani
              </span>
            </h1>
            <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
              Full Stack Developer & Engineering Student
            </p>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              I build scalable web applications using{' '}
              <strong>React, Next.js, Node.js, and TypeScript</strong>.
              Currently pursuing Computer Science at{' '}
              <a
                href="https://esprit.tn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline dark:text-primary-400"
              >
                ESPRIT
              </a>{' '}
              with a focus on Data Science.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="/projects"
                className="flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700"
              >
                <Layout size={18} /> View Projects
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-lg border-2 border-primary-600 px-6 py-3 font-medium text-primary-600 transition-colors hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20"
              >
                <Mail size={18} /> Get in Touch
              </Link>
              <a
                href={withBasePath('/cv.pdf')}
                download
                className="flex items-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <Download size={18} /> CV
              </a>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="relative mx-auto h-[320px] w-[320px] overflow-hidden rounded-full border-8 border-white shadow-2xl dark:border-gray-800 lg:h-[400px] lg:w-[400px]">
              <Image
                src="/me.jpg"
                alt="Mohamed Aziz Ouertatani"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="mb-20">
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
              description="Developed scalable web apps using Next.js and Tailwind."
            />
            <ExperienceCard
              role="React.js Developer"
              company="Swiver"
              date="2022 – 2023"
              description="Built responsive UI components and multilingual support."
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

/* Helper Components */

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
    <div className="group rounded-xl border border-gray-200 p-8 transition-all hover:border-primary-500 hover:shadow-xl dark:border-gray-800">
      <div className="mb-4 inline-block rounded-lg bg-primary-50 p-3 transition-transform group-hover:scale-110 dark:bg-primary-900/20">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

function ExperienceCard({
  role,
  company,
  date,
  description,
}: {
  role: string;
  company: string;
  date: string;
  description: string;
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
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
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
    <div className="flex flex-col items-center gap-2">
      <div className="rounded-full bg-white p-4 text-primary-600 shadow-md dark:bg-gray-800">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </span>
    </div>
  );
}
