# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers at data-engineering, MLOps and full-stack teams (Tunisia and EU, remote/hybrid) deciding whether to offer Mohamed Aziz Ouertatani a 6-month End-of-Studies Internship (PFE) starting February 2027. They arrive from a CV, LinkedIn or a referral, skim quickly, and want proof of real, shipped work before they open a résumé or write an email.

Secondary audiences (technical peers, collaborators) are welcome but are not the design target.

## Product Purpose

A personal portfolio for a Data Science Engineering student at ESPRIT (Tunis). It exists to convert a visitor into a PFE conversation: open a project case study, read the résumé, or send an email. Success is a recruiter reaching a case study or the contact link with a clear sense of what the candidate can own end to end.

## Positioning

Data to product, end to end, built solo: ingestion, feature engineering and ML/MLOps, APIs, and a polished front end, backed by earlier professional React and Next.js work. Case studies such as ResearchBridge, the Smart Inventory Forecasting platform and Estate-Mind show the whole path, not one layer.

## Operating Context

- Home page is a single scrolling environment of six zones (Identity, Work, Stack, Experience, About, Contact) defined in `lib/sections.ts`, as alternating cobalt and plaster bands (tile-wall hero, Work tiles, a Stack tile wall, and a scroll-scrubbed experience timeline).
- Project detail pages follow a case-study structure (problem, approach, result, decisions, challenges, metrics), driven by `lib/projects.ts`.
- Also: `/resume` (server-rendered, print-optimised, with `public/cv.pdf`), `/about`, `/contact`, a Cmd/Ctrl+K command palette, per-project Open Graph images and View Transitions between pages.
- Deployed on Vercel: https://mohamedaziz-ouertatani.vercel.app

## Capabilities and Constraints

- Stack: Next.js 14 App Router, TypeScript, Tailwind, Framer Motion. No WebGL.
- Identity and contact constants live in `lib/site.ts` (single source of truth); content in `lib/projects.ts`, `lib/experiences.ts`, `lib/education.ts`, `lib/skills.ts`, `lib/social.ts`.
- Contact is email and social links only. The contact form was deliberately removed; `README.md` still mentions it and is stale.
- Motion must degrade gracefully: `prefers-reduced-motion` support is required (WebGL was retired in the redesign).
- Availability: "Available for PFE, Feb 2027, 6 mo" (Data Engineering, MLOps or Full-Stack; remote/hybrid, Tunisia/EU).

## Evidence on Hand

- Real projects with problem, approach and result copy in `lib/projects.ts` (ResearchBridge, Smart Inventory Forecasting, Estate-Mind, FLOCK OFF, others). Some entries carry `metrics`, `decisions` and `challenges`.
- Professional experience: Next.js developer intern at iTransform365 (May to Aug 2024), React.js developer and intern at Swiver (2022 to 2023). See `lib/experiences.ts`.
- Assets: `public/cv.pdf`, portraits (`me.jpg`, `me2.jpg`, `me3.png`), project screenshots in `public/images/`.
- Absent: client testimonials, press, and independently verified benchmarks. Do not fabricate any.

## Product Principles

1. Proof before polish: every claim points at a real project, a repo or a résumé line. No invented clients, metrics, testimonials or results; metrics come only from `lib/projects.ts`.
2. The PFE ask stays visible and truthful: availability, dates and a direct path to email or résumé are never buried.
3. Show the whole path, not a skill list: end-to-end ownership from data to product is the differentiator.
4. Craft is evidence, but never a barrier: the interactive experience must not block a recruiter from reaching content quickly, and it must degrade cleanly.
5. One source of truth: identity, contact and availability come from `lib/site.ts`, not duplicated strings.

## Accessibility & Inclusion

- Target WCAG 2.1 AA (as stated in the README): semantic HTML, keyboard navigation, skip links.
- Honour `prefers-reduced-motion`.
