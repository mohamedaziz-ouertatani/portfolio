import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Work - Mohamed Aziz Ouertatani',
  description:
    'Production-oriented projects in data engineering, MLOps and full-stack development, each written up as problem, approach and result. ResearchBridge, Estate-Mind, Smart Inventory forecasting and more.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
