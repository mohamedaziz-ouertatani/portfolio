import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://mohamedaziz-ouertatani.vercel.app';

export const metadata: Metadata = {
  title: 'Mohamed Aziz Ouertatani - Final-Year CS Engineering Student',
  description:
    'Final-year Computer Science Engineering student (Data Science) seeking a 6-month PFE internship starting Feb 2027 in Data Engineering, MLOps, or Full-Stack Development. React, Next.js, Fastify, PostgreSQL, MLflow, Docker.',
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
    'Mohamed Aziz Ouertatani',
  ],
  authors: [{ name: 'Mohamed Aziz Ouertatani' }],
  creator: 'Mohamed Aziz Ouertatani',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/`,
    siteName: 'Mohamed Aziz Ouertatani Portfolio',
    title: 'Mohamed Aziz Ouertatani - Final-Year CS Engineering Student',
    description:
      'Seeking a 6-month PFE internship starting Feb 2027 in Data Engineering, MLOps, or Full-Stack Development.',
    images: [
      {
        // Use an absolute URL for OG images
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Mohamed Aziz Ouertatani - Final-Year CS Engineering Student',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Aziz Ouertatani - Final-Year CS Engineering Student',
    description:
      'Seeking a 6-month PFE internship starting Feb 2027 in Data Engineering, MLOps, or Full-Stack Development.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mohamed Aziz Ouertatani',
              url: `${SITE_URL}/`,
              jobTitle: 'Final-Year Computer Science Engineering Student',
              alumniOf: 'ESPRIT',
              sameAs: [
                'https://github.com/mohamedaziz-ouertatani',
                'https://www.linkedin.com/in/mohamed-aziz-ouertatani',
              ],
              knowsAbout: [
                'Data Engineering',
                'MLOps',
                'Data Science',
                'React',
                'TypeScript',
                'Python',
                'Full Stack Development',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Mohamed Aziz Ouertatani Portfolio',
              url: `${SITE_URL}/`,
              description:
                'Portfolio of Mohamed Aziz Ouertatani - Final-Year CS Engineering Student seeking a PFE internship',
              author: {
                '@type': 'Person',
                name: 'Mohamed Aziz Ouertatani',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
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
