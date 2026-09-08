/**
 * Single source of truth for identity, contact details and SEO constants.
 * Previously these strings were duplicated across the root layout, the
 * footer, the resume page and the contact page.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://mohamedaziz-ouertatani.vercel.app';

export const site = {
  name: 'Mohamed Aziz Ouertatani',
  shortName: 'MA',
  role: 'Data Science Engineer',
  disciplines: 'Data Engineering · MLOps · Full-Stack',
  school: 'ESPRIT',
  email: 'ouertatanimohamedaziz@gmail.com',
  phone: '+216 29 241 717',
  phoneHref: 'tel:+21629241717',
  location: 'Tunis, Tunisia',
  cv: '/cv.pdf',
  url: SITE_URL,
  availability: {
    label: 'Available for PFE — Feb 2027 · 6 mo',
    short: 'PFE — February 2027',
    detail:
      'Seeking a 6-month End-of-Studies Internship (PFE) starting February 2027 in Data Engineering, MLOps, or Full-Stack Development — remote/hybrid (Tunisia/EU).',
  },
} as const;
