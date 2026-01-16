import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Mohamed Aziz Ouertatani',
  description:
    'Browse my portfolio of web development projects including MERN stack applications, full-stack solutions, and academic projects.',
  alternates: {
    canonical: 'https://mohamedaziz-ouertatani.github.io/portfolio/projects/',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
