import type { Metadata } from 'next';
import { Bricolage_Grotesque, Hanken_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { site, SITE_URL } from '@/lib/site';
import { sameAs } from '@/lib/social';

// Display: cut, slightly condensed grotesque with a point of view. Text: a
// clear humanist grotesque with real tabular numerals for dates and metrics.
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const TITLE = `${site.name} — ${site.role}`;
const DESCRIPTION = `${site.role} — ${site.disciplines}. Final-year Computer Science Engineering student at ${site.school} seeking a 6-month PFE internship starting February 2027. Python, PostgreSQL, MLflow, Docker, Fastify, Next.js.`;
const SHORT_DESCRIPTION =
  'Seeking a 6-month PFE internship starting Feb 2027 in Data Engineering, MLOps, or Full-Stack Development.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    'PFE Internship',
    'End of Studies Internship',
    'Data Engineering',
    'MLOps',
    'Data Science',
    'Full Stack Developer',
    'React',
    'TypeScript',
    'Python',
    'Portfolio',
    site.name,
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/`,
    siteName: `${site.name} Portfolio`,
    title: TITLE,
    description: SHORT_DESCRIPTION,
    images: [
      {
        // Absolute URL — relative OG images are not resolved by every crawler.
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SHORT_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: `${SITE_URL}/`,
  jobTitle: site.role,
  alumniOf: site.school,
  email: `mailto:${site.email}`,
  sameAs,
  knowsAbout: [
    'Data Engineering',
    'MLOps',
    'Data Science',
    'React',
    'TypeScript',
    'Python',
    'Full Stack Development',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${site.name} Portfolio`,
  url: `${SITE_URL}/`,
  description: DESCRIPTION,
  author: { '@type': 'Person', name: site.name },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#163E93" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} flex min-h-screen flex-col font-sans`}
      >
        <CommandPalette />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </body>
    </html>
  );
}
