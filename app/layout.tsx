import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Mohamed Aziz Ouertatani - Full Stack Developer',
  description:
    'Full Stack Developer and Engineering Student specializing in web development with React, Node.js, and TypeScript. View my portfolio of projects and experience.',
  metadataBase: new URL('https://mohamedaziz-ouertatani.github.io/portfolio'),
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'React',
    'TypeScript',
    'Node.js',
    'Portfolio',
    'Mohamed Aziz Ouertatani',
  ],
  authors: [{ name: 'Mohamed Aziz Ouertatani' }],
  creator: 'Mohamed Aziz Ouertatani',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohamedaziz-ouertatani.github.io/portfolio/',
    siteName: 'Mohamed Aziz Ouertatani Portfolio',
    title: 'Mohamed Aziz Ouertatani - Full Stack Developer',
    description:
      'Full Stack Developer and Engineering Student specializing in web development with React, Node.js, and TypeScript.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohamed Aziz Ouertatani - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Aziz Ouertatani - Full Stack Developer',
    description:
      'Full Stack Developer and Engineering Student specializing in web development.',
    images: ['/og-image.png'],
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
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mohamed Aziz Ouertatani',
              url: 'https://mohamedaziz-ouertatani.github.io/portfolio',
              jobTitle: 'Full Stack Developer',
              alumniOf: 'ESPRIT',
              sameAs: [
                'https://github.com/mohamedaziz-ouertatani',
                'https://www.linkedin.com/in/mohamed-aziz-ouertatani',
              ],
              knowsAbout: [
                'Web Development',
                'React',
                'TypeScript',
                'Node.js',
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
              url: 'https://mohamedaziz-ouertatani.github.io/portfolio',
              description:
                'Portfolio of Mohamed Aziz Ouertatani - Full Stack Developer',
              author: {
                '@type': 'Person',
                name: 'Mohamed Aziz Ouertatani',
              },
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
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
