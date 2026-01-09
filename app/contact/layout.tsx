import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Mohamed Aziz Ouertatani',
  description:
    'Get in touch with Mohamed Aziz Ouertatani for project opportunities, collaborations, or general inquiries.',
  alternates: {
    canonical: 'https://mohamedaziz-ouertatani.github.io/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
