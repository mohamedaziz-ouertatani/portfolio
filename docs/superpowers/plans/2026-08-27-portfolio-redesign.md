# Portfolio Full Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign and re-engineer the Next.js portfolio: a coherent dark-first design system (Inter + JetBrains Mono, one accent color, semantic color/spacing/radius tokens, framer-motion), consolidated content (single source of truth in `lib/*.ts`), a real backend contact form, and a hosting migration off GitHub Pages to Vercel that removes the `basePath` workaround.

**Architecture:** Two layers of change applied together: (1) a token layer — CSS variables in `app/globals.css` plus a matching `tailwind.config.ts` extension — that every page consumes via Tailwind utility classes, replacing the current ad hoc `gray-*`/`blue-*` classes; (2) a content layer — `lib/projects.ts`, `lib/experiences.ts`, `lib/skills.ts` become the only place data is declared, with every page importing from them instead of re-declaring arrays. Framer-motion replaces the hand-rolled CSS keyframes for scroll reveals. The GitHub Pages `basePath`/`withBasePath` plumbing is deleted in favor of plain asset paths, since Vercel needs no basePath.

**Tech Stack:** Next.js 14 (App Router, TypeScript), Tailwind CSS, framer-motion, `next/font` (Google Fonts), Resend (email), Zod (validation), Jest + Testing Library (unit tests), Vercel (hosting).

**Spec:** [docs/superpowers/specs/2026-08-27-portfolio-redesign-design.md](../specs/2026-08-27-portfolio-redesign-design.md)

## Global Constraints

- No fabricated content, projects, metrics, or credentials — every task using real content must trace it to what already exists in `lib/*.ts` or the current pages (see spec §4).
- One accent color only (`#22C55E` dark / `#16A34A` light); no gradients, no glassmorphism, no emoji icons (spec §2).
- All new/changed color pairs must hit 4.5:1 contrast in both themes; all interactive targets ≥44×44px (spec §5).
- All motion must respect `prefers-reduced-motion` (spec §2, §5).
- Projects without a real screenshot/link are kept and visually de-emphasized, never hidden or faked (spec §4, user decision).
- Run `npm run typecheck && npm run lint` after every task; run `npm run build` at the end of each phase (Foundation, Content, Pages, Engineering) and before the final task.

---

## Task 1: Design tokens — Tailwind config, CSS variables, fonts

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx:1-8` (font imports + `<body>` className)

**Interfaces:**
- Produces: Tailwind color tokens `background`, `foreground`, `card` (+ `card-foreground`), `muted` (+ `muted-foreground`), `border`, `accent` (+ `accent-foreground`), `destructive`, and a recolored `primary` 50-950 scale (green-based, replacing the old blue scale) — every later task's className references these names exactly. Font families `font-sans` (Inter) and `font-mono` (JetBrains Mono). Radius tokens `rounded-sm/md/lg` mapped to 6px/10px/16px via `borderRadius` extension. Type scale via `fontSize` extension (`text-xs` … `text-6xl` per spec §2 line-heights).

- [ ] **Step 1: Replace `tailwind.config.ts` theme extension**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: {
          DEFAULT: 'var(--color-card)',
          foreground: 'var(--color-card-foreground)',
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
        border: 'var(--color-border)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)',
          foreground: '#FFFFFF',
        },
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.625rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.875rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.375rem'],
        '4xl': ['2.25rem', '2.75rem'],
        '5xl': ['3rem', '3.5rem'],
        '6xl': ['3.75rem', '4.25rem'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.06)',
        md: '0 4px 12px 0 rgb(0 0 0 / 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 2: Replace `app/globals.css` entirely**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-background: #f8fafc;
  --color-foreground: #0f172a;
  --color-card: #ffffff;
  --color-card-foreground: #0f172a;
  --color-muted: #f1f5f9;
  --color-muted-foreground: #475569;
  --color-border: #e2e8f0;
  --color-accent: #16a34a;
  --color-accent-foreground: #ffffff;
}

:root.dark {
  --color-background: #0f172a;
  --color-foreground: #f8fafc;
  --color-card: #1b2336;
  --color-card-foreground: #f8fafc;
  --color-muted: #272f42;
  --color-muted-foreground: #94a3b8;
  --color-border: #334155;
  --color-accent: #22c55e;
  --color-accent-foreground: #0f172a;
}

@layer base {
  html {
    @apply scroll-smooth;
  }

  body {
    @apply bg-background text-foreground;
  }

  *:focus-visible {
    @apply outline-none ring-2 ring-accent ring-offset-2 ring-offset-background;
  }
}

@layer components {
  .container {
    @apply mx-auto max-w-7xl;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This deletes every hand-rolled `@keyframes`/`.animate-*` rule (`hero-glow`, the duplicated `hero-shimmer`, `fade-in`, `fade-in-more`, `slide-from-left/right`, `pop-in`, `fade-in-long`, `slide-up`, `float-up`, `resume-glow`, `highlight-glow`) — Task 3 replaces every usage with the `Reveal` component, so no page should still reference an `.animate-*` class after Task 9-13 land. `npm run build` in Task 14 (final validation) will catch any leftover reference as an unstyled class, not a build error, so grep for `animate-` across `app/` and `components/` as part of Task 14's cleanup check.

- [ ] **Step 3: Load Inter and JetBrains Mono via `next/font` in `app/layout.tsx`**

Replace lines 1-8 of `app/layout.tsx`:

```typescript
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
```

Then update the `<body>` tag (originally line 116) to:

```tsx
<body
  className={`${inter.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col font-sans`}
>
```

- [ ] **Step 4: Verify**

Run: `npm run dev` and visually confirm the app still boots with no console errors (colors will look unstyled/default in places until later tasks retoken each page — that's expected at this stage). Run `npm run typecheck && npm run lint`.
Expected: no TypeScript/lint errors; dev server starts.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts app/globals.css app/layout.tsx
git commit -m "feat: establish design token system (colors, type scale, fonts)"
```

---

## Task 2: Shared UI primitives (Reveal, Chip, Button, TypingEffect)

**Files:**
- Create: `components/ui/Reveal.tsx`
- Create: `components/ui/Chip.tsx`
- Create: `components/ui/Button.tsx`
- Create: `components/TypingEffect.tsx`
- Test: `components/__tests__/Reveal.test.tsx`

**Interfaces:**
- Consumes: `framer-motion` (already a dependency), design tokens from Task 1 (`bg-muted`, `font-mono`, `bg-accent`, etc.)
- Produces:
  - `Reveal({ children, delay?, className?, as? }: { children: React.ReactNode; delay?: number; className?: string; as?: keyof JSX.IntrinsicElements })` — wraps children in a `motion.div` (or `motion[as]`) that fades in + translates up 12px on scroll into view, once, 400ms, respecting `prefers-reduced-motion` via `useReducedMotion()`.
  - `Chip({ children, className? }: { children: React.ReactNode; className?: string })` — renders a `<span>` with `font-mono text-xs` styling on a `bg-muted` pill, used for tech-stack tags and metrics everywhere.
  - `Button({ href, children, variant = 'primary', icon, download }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary'; icon?: React.ReactNode; download?: boolean })` — renders a `next/link` styled CTA (primary = `bg-accent text-accent-foreground`, secondary = `border border-border text-foreground`), external hrefs get `target="_blank" rel="noopener noreferrer"`, `download` prop passes through as an HTML attribute.
  - `TypingEffect({ texts }: { texts: string[] })` — the single canonical typing-effect component (consolidating the two near-duplicates currently in `app/page.tsx:40-73` and `components/HomeHero.tsx:17-50`), styled with `text-primary-600 dark:text-primary-400`.

- [ ] **Step 1: Write `components/ui/Reveal.tsx`**

```tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Write the failing test for `Reveal`**

```tsx
import { render, screen } from '@testing-library/react';
import { Reveal } from '../ui/Reveal';

describe('Reveal', () => {
  it('renders its children', () => {
    render(
      <Reveal>
        <p>Hello world</p>
      </Reveal>
    );
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});
```

- [ ] **Step 3: Run test to verify it passes (this is a smoke test on real code, not TDD-first — framer-motion's `motion.div` renders synchronously in jsdom)**

Run: `npm test -- Reveal.test.tsx`
Expected: PASS

- [ ] **Step 4: Write `components/ui/Chip.tsx`**

```tsx
import type { ReactNode } from 'react';

export function Chip({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-muted px-3 py-1 font-mono text-xs font-medium text-muted-foreground ${className}`}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 5: Write `components/ui/Button.tsx`**

```tsx
import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  download?: boolean;
}

const base =
  'inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none';
const variants = {
  primary: 'bg-accent text-accent-foreground hover:opacity-90',
  secondary:
    'border border-border text-foreground hover:bg-muted',
};

export function Button({
  href,
  children,
  variant = 'primary',
  icon,
  download,
}: ButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');
  const className = `${base} ${variants[variant]}`;

  if (isExternal || download) {
    return (
      <a
        href={href}
        className={className}
        download={download}
        target={isExternal && !download ? '_blank' : undefined}
        rel={isExternal && !download ? 'noopener noreferrer' : undefined}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {icon}
      {children}
    </Link>
  );
}
```

- [ ] **Step 6: Write `components/TypingEffect.tsx`**

```tsx
'use client';

import { useEffect, useState } from 'react';

export function TypingEffect({ texts }: { texts: string[] }) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;
    if (subIndex === texts[index].length + 1 && !deleting) {
      const t = setTimeout(() => setDeleting(true), 1300);
      return () => clearTimeout(t);
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
      deleting ? 24 : 42
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts]);

  return (
    <span className="inline-block min-h-[1.5em] text-primary-600 dark:text-primary-400">
      {text}
      <span aria-hidden="true" className="animate-pulse">
        |
      </span>
    </span>
  );
}
```

Note: this component keeps one small `animate-pulse` (a Tailwind built-in utility, not one of the deleted custom keyframes) for the cursor blink — that's acceptable since it's a single opacity pulse, not one of the removed hand-rolled effects, and Tailwind's built-in respects `prefers-reduced-motion` via the global rule added in Task 1 Step 2.

- [ ] **Step 7: Run full test suite and typecheck**

Run: `npm test && npm run typecheck && npm run lint`
Expected: all PASS

- [ ] **Step 8: Commit**

```bash
git add components/ui components/TypingEffect.tsx components/__tests__/Reveal.test.tsx
git commit -m "feat: add shared UI primitives (Reveal, Chip, Button, TypingEffect)"
```

---

## Task 3: Remove GitHub Pages basePath plumbing

**Files:**
- Modify: `next.config.mjs`
- Delete: `lib/basePath.ts`
- Modify (remove `withBasePath` import/usage): `app/layout.tsx`, `app/page.tsx`, `components/HomeHero.tsx`, `components/Header.tsx`, `components/ProjectCard.tsx`, `app/about/page.tsx`, `app/resume/page.tsx`, `app/projects/[id]/page.tsx`

**Interfaces:**
- Consumes: nothing new
- Produces: every asset reference becomes a plain root-relative path (e.g. `/cv.pdf`, `/me.jpg`, `/favicon.ico`) — later tasks (4 rewrites `app/page.tsx`/`HomeHero.tsx` fully; this task only needs to land in files that survive untouched, i.e. `Header.tsx`, `ProjectCard.tsx`, `about/page.tsx`, `resume/page.tsx`, `projects/[id]/page.tsx`, `layout.tsx`). Where a later task fully rewrites a file (Home, HomeHero), this task's edit there is superseded — do it anyway so the file compiles at every commit checkpoint.

- [ ] **Step 1: Rewrite `next.config.mjs`**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

- [ ] **Step 2: Delete `lib/basePath.ts`**

```bash
rm lib/basePath.ts
```

- [ ] **Step 3: Remove `withBasePath` from `app/layout.tsx`**

Remove the import on line 7 (`import { withBasePath } from '@/lib/basePath';`). Replace line 71 `<link rel="icon" href={withBasePath('/favicon.ico')} sizes="any" />` with `<link rel="icon" href="/favicon.ico" sizes="any" />`, and line 72 `<link rel="manifest" href={withBasePath('/manifest.json')} />` with `<link rel="manifest" href="/manifest.json" />`.

- [ ] **Step 4: Remove `withBasePath` from `components/Header.tsx`**

Remove the import on line 7. Replace both `href={withBasePath('/cv.pdf')}` occurrences (lines 55 and 126) with `href="/cv.pdf"`.

- [ ] **Step 5: Remove `withBasePath` from `components/ProjectCard.tsx`**

Remove the import on line 5. Replace line 20 `const imgSrc = withBasePath(first);` with `const imgSrc = first;`. (Task 11 revisits this file for the weak-project placeholder state — this step just keeps it compiling.)

- [ ] **Step 6: Remove `withBasePath` from `app/about/page.tsx`**

Remove the import on line 4. Replace line 81 `src={withBasePath('/me2.jpg')}` with `src="/me2.jpg"`.

- [ ] **Step 7: Remove `withBasePath` from `app/resume/page.tsx`**

Remove the import on line 4. Replace line 135 `src={withBasePath('/me3.png')}` with `src="/me3.png"`, and line 149 `href={withBasePath('/cv.pdf')}` with `href="/cv.pdf"`.

- [ ] **Step 8: Remove `withBasePath` from `app/projects/[id]/page.tsx`**

Remove the import on line 7. Replace lines 22-23:
```typescript
  const imagesWithBasePath =
    project.images?.map((img) => withBasePath(img)) ?? [];
```
with:
```typescript
  const images = project.images ?? [];
```
and update line 41 from `<ProjectImagesZoom images={imagesWithBasePath} />` to `<ProjectImagesZoom images={images} />`.

- [ ] **Step 9: Remove `withBasePath` from `app/page.tsx` and `components/HomeHero.tsx`**

Both files are fully rewritten in Task 9 — for this step, just delete the `import { withBasePath } from '@/lib/basePath';` lines and replace any `withBasePath('/x')` call with `'/x'` so the build doesn't break between commits.

- [ ] **Step 10: Verify no references remain**

Run: `grep -rn "withBasePath\|lib/basePath" app components lib` (PowerShell: `Select-String -Path app,components,lib -Pattern "withBasePath|lib/basePath" -Recurse`)
Expected: no matches.

Run: `npm run typecheck && npm run lint && npm run build`
Expected: all PASS. The build now produces a `.next/` server build (no more static `out/` export) — this is expected and matches the Vercel migration in Task 5.

- [ ] **Step 11: Commit**

```bash
git add next.config.mjs app components
git rm lib/basePath.ts
git commit -m "refactor: remove GitHub Pages basePath plumbing"
```

---

## Task 4: Real contact form backend (Resend + Zod)

**Files:**
- Create: `app/api/contact/route.ts`
- Test: `app/api/contact/__tests__/route.test.ts`
- Modify: `app/contact/page.tsx`

**Interfaces:**
- Consumes: `contactFormSchema` and `ContactFormData` from `lib/validations.ts` (already exist, currently unused), `resend` package, `process.env.RESEND_API_KEY`.
- Produces: `POST /api/contact` accepting JSON `{ name, email, subject, message }`, returning `{ ok: true }` with status 200 on success, `{ ok: false, errors: Record<string, string> }` with status 400 on validation failure, `{ ok: false, error: string }` with status 500 on send failure.

- [ ] **Step 1: Write the failing test**

```typescript
import { POST } from '../route';
import { NextRequest } from 'next/server';

const sendMock = jest.fn();
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: { send: (...args: unknown[]) => sendMock(...args) },
  })),
}));

function makeRequest(body: unknown) {
  return new NextRequest('http://localhost/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    sendMock.mockReset();
    process.env.RESEND_API_KEY = 'test-key';
  });

  it('rejects an invalid payload with 400 and field errors', async () => {
    const res = await POST(
      makeRequest({ name: 'A', email: 'not-an-email', subject: '', message: 'short' })
    );
    const body = await res.json();

    expect(res.status).toBe(400);
    expect(body.ok).toBe(false);
    expect(body.errors.name).toBeDefined();
    expect(body.errors.email).toBeDefined();
    expect(sendMock).not.toHaveBeenCalled();
  });

  it('sends an email and returns 200 for a valid payload', async () => {
    sendMock.mockResolvedValue({ data: { id: 'email_123' }, error: null });

    const res = await POST(
      makeRequest({
        name: 'Jane Recruiter',
        email: 'jane@example.com',
        subject: 'Internship opportunity',
        message: 'We would love to talk to you about a role.',
      })
    );
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.ok).toBe(true);
    expect(sendMock).toHaveBeenCalledTimes(1);
  });

  it('returns 500 when Resend fails to send', async () => {
    sendMock.mockResolvedValue({ data: null, error: { message: 'send failed' } });

    const res = await POST(
      makeRequest({
        name: 'Jane Recruiter',
        email: 'jane@example.com',
        subject: 'Internship opportunity',
        message: 'We would love to talk to you about a role.',
      })
    );
    const body = await res.json();

    expect(res.status).toBe(500);
    expect(body.ok).toBe(false);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- route.test.ts`
Expected: FAIL with "Cannot find module '../route'"

- [ ] **Step 3: Write `app/api/contact/route.ts`**

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  const json = await request.json();
  const parsed = contactFormSchema.safeParse(json);

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      errors[String(issue.path[0])] = issue.message;
    }
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const { name, email, subject, message } = parsed.data;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <contact@resend.dev>',
    to: 'ouertatanimohamedaziz@gmail.com',
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- route.test.ts`
Expected: PASS (all 3 cases)

- [ ] **Step 5: Update `app/contact/page.tsx` to POST to the real endpoint**

Replace the `validateForm`/`handleMailtoSubmit`/`isFormValid` logic (lines 18-37, 47-51, 89-97) — keep the same field-level validation UX but submit to the API instead of only building a mailto link. Add submission status state and replace the submit handler:

```typescript
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    setServerError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const body = await res.json();

      if (!res.ok || !body.ok) {
        if (body.errors) setErrors(body.errors);
        setServerError(body.error ?? 'Something went wrong sending your message.');
        setStatus('error');
        return;
      }

      setStatus('success');
      resetForm();
    } catch {
      setServerError('Network error — please try again or email me directly.');
      setStatus('error');
    }
  };
```

Change `<form onSubmit={handleMailtoSubmit} ...>` (line 179) to `<form onSubmit={handleSubmit} ...>`. Replace the "Send via Email" button block (lines 316-370, the `mailto`-preview card) with a real submit button reflecting `status`:

```tsx
          <div className="rounded-md border border-border bg-card p-6">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Send a Message
            </h2>
            <button
              type="submit"
              disabled={!isFormValid() || status === 'submitting'}
              aria-disabled={!isFormValid() || status === 'submitting'}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 font-medium transition-colors focus-visible:outline-none ${
                isFormValid() && status !== 'submitting'
                  ? 'bg-accent text-accent-foreground hover:opacity-90'
                  : 'cursor-not-allowed bg-muted text-muted-foreground'
              }`}
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="mt-4 text-sm text-primary-600 dark:text-primary-400">
                Message sent — thanks for reaching out, I'll reply soon.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm text-destructive">{serverError}</p>
            )}
          </div>
```

Keep the "Quick email link" (`mailto:`) at the bottom of the page (line 411-417) as a visible fallback per spec §5 — do not remove it. Remove the now-unused `copyEmailContent`, `mailtoPreview`, `showFormspreeNote` state/handlers and the "Alternative: External Form Service" card (lines 372-409) and the static hosting note (lines 144-149, no longer true).

- [ ] **Step 6: Run full test suite and typecheck**

Run: `npm test && npm run typecheck && npm run lint`
Expected: all PASS

- [ ] **Step 7: Manually verify in the browser**

Run `npm run dev`, open `/contact`, submit a valid message with `RESEND_API_KEY` unset in `.env.local` — confirm it shows the error state gracefully (since there's no real key yet) rather than crashing. This is expected until the user supplies a real `RESEND_API_KEY` in Vercel's environment variables (flagged in Task 5).

- [ ] **Step 8: Commit**

```bash
git add app/api app/contact/page.tsx
git commit -m "feat: wire real contact form backend via Resend + Zod validation"
```

---

## Task 5: Vercel hosting migration

**Files:**
- Delete: `.github/workflows/deploy.yml`
- Modify: `.env.example`
- Modify: `README.md` (architecture/deployment sections)

**Interfaces:**
- Consumes: `NEXT_PUBLIC_SITE_URL` env var (already declared in `.env.example`)
- Produces: nothing consumed by later tasks — this task only removes the old deploy path and documents the new one.

- [ ] **Step 1: Delete the GitHub Pages deploy workflow**

```bash
rm .github/workflows/deploy.yml
```

Vercel's git integration deploys on every push without a custom workflow once the repo is connected in the Vercel dashboard — that connection step is an account action only the user can perform (connect the GitHub repo at vercel.com, no code change). `ci.yml` and `lighthouse.yml` stay as-is; they're host-agnostic (lint/typecheck/test and Lighthouse CI don't care where the site is deployed).

- [ ] **Step 2: Update `.env.example`**

```
# Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=

# Email Service (Resend) — required for the contact form to send mail
RESEND_API_KEY=

# Site Configuration — the deployed origin, e.g. https://mohamedaziz-ouertatani.vercel.app
NEXT_PUBLIC_SITE_URL=https://mohamedaziz-ouertatani.vercel.app
```

- [ ] **Step 3: Update `README.md`**

Replace the "🎯 Architecture" callout (currently claiming "100% static... optimized for GitHub Pages") and the "🌐 Live Demo" section's GitHub Pages URL with Vercel-hosted language, and update the "Static Export" bullet under Core Technologies to reflect that the app now runs as a standard Next.js server deployment (SSR/API routes enabled) rather than `output: 'export'`. Keep the rest of the README's structure intact — this is a content correction, not a rewrite.

- [ ] **Step 4: Commit**

```bash
git add .env.example README.md
git rm .github/workflows/deploy.yml
git commit -m "chore: migrate hosting from GitHub Pages to Vercel"
```

**Note for the user (surface this after the plan finishes, not silently):** connecting the repo to Vercel and setting `RESEND_API_KEY` + `NEXT_PUBLIC_SITE_URL` as Vercel environment variables are account actions that must be done in the Vercel dashboard — no code change can do this. Until `RESEND_API_KEY` is set, the deployed contact form will show the error state from Task 4.

---

## Task 6: Consolidate skills data (single source of truth)

**Files:**
- Modify: `lib/skills.ts`

**Interfaces:**
- Produces: `skillsData: SkillsData` (interface unchanged) — Task 9 (Home), Task 10 (About), Task 13 (Resume) all import and render from this single object instead of declaring their own arrays. The numeric levels used across the three pages currently disagree (e.g. About's inline `Python (Expert), 95` vs. this file's `Python, 85`); this task picks one true number per skill by taking the **higher** of the two real self-assessments already present in the codebase (the more detailed About-page numbers reflect the more recent, more specific self-assessment) and keeps every skill name that appears in any of the three sources.

- [ ] **Step 1: Rewrite `lib/skills.ts`, merging in the About-page and Resume-page skills not already present**

```typescript
export interface Skill {
  name: string;
  level: number;
}

export interface SkillsData {
  languages: Skill[];
  librariesFrameworks: Skill[];
  tools: Skill[];
}

const skillsData: SkillsData = {
  languages: [
    { name: 'Python', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'SQL', level: 85 },
    { name: 'HTML', level: 70 },
    { name: 'CSS3', level: 65 },
    { name: 'PHP', level: 60 },
    { name: 'C', level: 75 },
    { name: 'C++', level: 75 },
    { name: 'Java', level: 75 },
    { name: 'R', level: 70 },
  ],
  librariesFrameworks: [
    { name: 'ReactJS', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 70 },
    { name: 'Fastify', level: 85 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'Symfony', level: 65 },
    { name: 'scikit-learn', level: 88 },
    { name: 'Pandas', level: 92 },
    { name: 'NumPy', level: 92 },
    { name: 'statsmodels', level: 80 },
    { name: 'SDL', level: 60 },
    { name: 'Qt', level: 60 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'VS Code', level: 80 },
    { name: 'PostgreSQL', level: 88 },
    { name: 'SQL Server', level: 70 },
    { name: 'MongoDB', level: 75 },
    { name: 'Neo4j', level: 70 },
    { name: 'Oracle', level: 75 },
    { name: 'R Markdown', level: 65 },
    { name: 'Adobe Photoshop', level: 60 },
    { name: 'Adobe Illustrator', level: 60 },
    { name: 'Adobe Suite', level: 60 },
    { name: 'Arduino', level: 60 },
    { name: 'Docker', level: 87 },
    { name: 'MLflow', level: 85 },
    { name: 'Joblib', level: 65 },
    { name: 'Makefile', level: 65 },
    { name: 'Supervisor', level: 65 },
    { name: 'Power BI', level: 82 },
    { name: 'Power Query', level: 70 },
    { name: 'Google Data Studio', level: 70 },
    { name: 'EDA (Exploratory Data Analysis)', level: 70 },
    { name: 'Statistics', level: 70 },
    { name: 'JWT/RBAC', level: 82 },
  ],
};

export default skillsData;
```

- [ ] **Step 2: Verify**

Run: `npm run typecheck`
Expected: PASS (interface unchanged, so no consumer breaks yet — Tasks 9/10/13 wire up the new consumers).

- [ ] **Step 3: Commit**

```bash
git add lib/skills.ts
git commit -m "refactor: consolidate skill levels into lib/skills.ts as single source of truth"
```

---

## Task 7: Header & Footer — retoken + design system pass

**Files:**
- Modify: `components/Header.tsx`
- Modify: `components/Footer.tsx`
- Modify: `components/DarkModeToggle.tsx`

**Interfaces:**
- Consumes: `Button` from `components/ui/Button.tsx` (Task 2), design tokens from Task 1.
- Produces: no new exports — `Header`/`Footer` keep their existing named exports and prop signatures (none) so `app/layout.tsx` needs no change.

- [ ] **Step 1: Retoken `components/Header.tsx`**

Replace every occurrence of the old surface classes with token equivalents:
- `border-gray-200 bg-white/80 ... dark:border-gray-800 dark:bg-gray-900/80` (line 22) → `border-border bg-background/80`
- `text-gray-900 dark:text-white` (line 32) → `text-foreground`
- `text-primary-600 dark:text-primary-400` / `text-gray-700 dark:text-gray-300` (lines 43-47) → keep `text-primary-600 dark:text-primary-400` for the active link (primary scale is intentionally still used for accents), change the inactive-link fallback to `text-muted-foreground`
- Replace the raw `<a href={withBasePath('/cv.pdf')} download ...>Download CV</a>` blocks (already de-basePathed in Task 3) with `<Button href="/cv.pdf" download variant="primary"><Download size={16} />Download CV</Button>` (import `Download` from `lucide-react`) in both the desktop nav (line 53-60) and mobile menu (line 124-131)
- `hover:bg-gray-200 dark:hover:bg-gray-700` (line 72) → `hover:bg-muted`
- Mobile menu panel `border-gray-200 bg-white ... dark:border-gray-800 dark:bg-gray-900` (line 107) → `border-border bg-background`
- Mobile menu active/inactive link classes (lines 114-118) → active: `bg-muted text-primary-600 dark:text-primary-400`; inactive: `text-muted-foreground hover:bg-muted`

- [ ] **Step 2: Retoken `components/Footer.tsx`**

- `border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900` (line 5) → `border-border bg-background`
- All `text-gray-900 dark:text-white` headings → `text-foreground`
- All `text-gray-600 dark:text-gray-400` body/link text → `text-muted-foreground`, with `hover:text-primary-600 dark:hover:text-primary-400` kept as-is (accent hover)
- Bottom copyright border/text (lines 119-123) same token swap

- [ ] **Step 3: Retoken `components/DarkModeToggle.tsx`**

`hover:bg-gray-200 dark:hover:bg-gray-700` (lines 17, 38) → `hover:bg-muted`

- [ ] **Step 4: Verify in the browser**

Run `npm run dev`, load `/`, toggle dark/light mode, confirm the header/footer/nav render with the new palette in both themes, mobile menu opens/closes correctly, focus ring shows on Tab through nav links (Task 1's `*:focus-visible` rule).

- [ ] **Step 5: Run typecheck/lint**

Run: `npm run typecheck && npm run lint`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add components/Header.tsx components/Footer.tsx components/DarkModeToggle.tsx
git commit -m "style: retoken Header, Footer, DarkModeToggle to new design system"
```

---

## Task 8: Home hero rebuild (delete dead code, consolidate typing effect)

**Files:**
- Modify: `components/HomeHero.tsx` (full rewrite)

**Interfaces:**
- Consumes: `TypingEffect` (Task 2), `Button` (Task 2), design tokens (Task 1)
- Produces: same default export `HomeHero()` — `app/page.tsx` (Task 9) renders `<HomeHero />` unchanged as a component reference.

- [ ] **Step 1: Rewrite `components/HomeHero.tsx`**

```tsx
'use client';

import Image from 'next/image';
import { Layout, Mail, Download } from 'lucide-react';
import { TypingEffect } from '@/components/TypingEffect';
import { Button } from '@/components/ui/Button';

const HEADLINES = [
  'Computer Science Engineering Student',
  'Full Stack & Data Engineering',
  'ML • MLOps • Production Pipelines',
];

export default function HomeHero() {
  return (
    <section className="mb-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Mohamed Aziz Ouertatani
          </h1>
          <div className="mb-4 text-xl font-semibold sm:text-2xl">
            <TypingEffect texts={HEADLINES} />
          </div>
          <p className="mb-6 text-lg text-muted-foreground">
            Fourth-year Computer Science Engineering student at ESPRIT,
            building production data pipelines, ML forecasting systems, and
            full-stack web applications — from Next.js/TypeScript frontends to
            Fastify APIs and MLflow-tracked ML pipelines.
          </p>
          <p className="mb-8 text-base text-muted-foreground">
            Open to Data Engineering, MLOps, and Full-Stack roles — internship
            or junior, remote/hybrid (Tunisia/EU).
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button href="/projects" icon={<Layout size={18} />}>
              View Projects
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              icon={<Mail size={18} />}
            >
              Get in Touch
            </Button>
            <Button
              href="/cv.pdf"
              variant="secondary"
              download
              icon={<Download size={18} />}
            >
              CV
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative mx-auto h-[280px] w-[280px] overflow-hidden rounded-lg border border-border shadow-md sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]">
            <Image
              src="/me.jpg"
              alt="Mohamed Aziz Ouertatani"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="mt-5 block text-center text-lg font-semibold text-foreground">
            <span className="block">
              &ldquo;If you can automate it, you should.&rdquo;
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
```

This drops: the duplicate `TypingEffect` (now imported from Task 2), the mouse-hover glow/scale transform state (`hover`, inline `boxShadow`/`transform` styles), the `animate-hero-glow`/`animate-hero-shimmer` layers (both deleted from `globals.css` in Task 1), and the circular-portrait treatment in favor of a `rounded-lg` frame consistent with the new Swiss/minimal direction (spec §2 — "no glow effects, no decorative gradients").

- [ ] **Step 2: Verify in the browser**

Run `npm run dev`, load `/`, confirm the hero renders correctly in both themes, image loads, all three CTAs work (Projects link, Contact link, CV download).

- [ ] **Step 3: Run typecheck/lint**

Run: `npm run typecheck && npm run lint`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add components/HomeHero.tsx
git commit -m "refactor: rebuild HomeHero, remove dead hover/glow state and duplicate typing effect"
```

---

## Task 9: Home page rebuild

**Files:**
- Modify: `app/page.tsx` (full rewrite)

**Interfaces:**
- Consumes: `HomeHero` (Task 8), `Reveal`/`Chip`/`Button` (Task 2), `skillsData` (Task 6), `experiencesData` from `lib/experiences.ts`, `projectsData` from `lib/projects.ts`.
- Produces: default export `Home()` — no other file imports this.

- [ ] **Step 1: Rewrite `app/page.tsx`**

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Briefcase,
  GraduationCap,
  Dumbbell,
  Gamepad2,
  Bike,
  Swords,
  ArrowRight,
} from 'lucide-react';
import HomeHero from '@/components/HomeHero';
import { Reveal } from '@/components/ui/Reveal';
import { Chip } from '@/components/ui/Chip';
import { projectsData } from '@/lib/projects';
import { experiencesData } from '@/lib/experiences';
import skillsData from '@/lib/skills';

export const metadata: Metadata = {
  title: 'Home - Mohamed Aziz Ouertatani',
  description:
    'Computer Science Engineering student specializing in Data Science and production MLOps platforms. Experienced with Next.js, Fastify, PostgreSQL, MLflow, and Docker.',
  alternates: {
    canonical: '/',
  },
};

const featuredProjects = [...projectsData]
  .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
  .slice(0, 2);

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-10 md:py-16">
      <HomeHero />

      <Reveal className="mb-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Featured Work
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group flex flex-col rounded-md border border-border bg-card p-8 transition-colors hover:border-primary-500"
            >
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {project.result ?? project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                View case study <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal className="mb-20" delay={0.05}>
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground lg:text-left">
          Technical Expertise
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkillGroup title="Languages" skills={skillsData.languages} />
          <SkillGroup
            title="Frameworks & Libraries"
            skills={skillsData.librariesFrameworks}
          />
          <SkillGroup title="Tools & Platforms" skills={skillsData.tools} />
        </div>
      </Reveal>

      <div className="mb-20 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="text-primary-600 dark:text-primary-400" />
            <h2 className="text-3xl font-bold text-foreground">Experience</h2>
          </div>
          <div className="space-y-6">
            {experiencesData
              .filter((exp) => exp.companyName !== 'ESPRIT')
              .map((exp) => (
                <div
                  key={exp.jobTitle + exp.companyName}
                  className="relative border-l-2 border-border pl-6"
                >
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-accent" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.jobTitle}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-primary-600 dark:text-primary-400">
                    {exp.companyName} • {exp.date}
                  </p>
                  <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
                    {exp.contributions.slice(0, 3).map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary-600 dark:text-primary-400" />
            <h2 className="text-3xl font-bold text-foreground">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="rounded-md border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground">
                ESPRIT
              </h3>
              <p className="text-muted-foreground">
                Engineering in CS (Data Science)
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                2021 – Present
              </p>
            </div>
            <div className="rounded-md border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground">
                L&apos;école Arabe Jordanienne
              </h3>
              <p className="text-muted-foreground">
                General Secondary Certificate
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                2019 – 2021
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mb-16 rounded-md bg-muted p-8">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          Beyond Coding
        </h2>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Outside of engineering, I'm committed to physical discipline and
            adventure — the strategic intensity of <strong>Muay Thai</strong>,
            the focus required for <strong>motorcycling</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-6 lg:justify-end">
            <InterestItem icon={<Swords />} label="Muay Thai" />
            <InterestItem icon={<Bike />} label="Motorcycling" />
            <InterestItem icon={<Dumbbell />} label="Fitness" />
            <InterestItem icon={<Gamepad2 />} label="Gaming" />
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; level: number }[];
}) {
  return (
    <div className="rounded-md border border-border bg-card p-6">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-card-foreground">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.slice(0, 6).map((skill) => (
          <span
            key={skill.name}
            className="rounded-full bg-muted px-3 py-1 font-mono text-sm font-medium text-muted-foreground"
          >
            {skill.name}
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
      <div className="rounded-full bg-card p-4 text-primary-600 shadow-sm dark:text-primary-400">
        {icon}
      </div>
      <span className="text-sm font-medium text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
```

This deletes the dead commented-out original hero block (old lines 114-194), the `imgOffset`/scroll-parallax state, `useScrollFadeIn`, the duplicated in-page `TypingEffect`, and replaces the three near-identical "What I Bring" / "Data Science Focus" / "Featured Projects" sections (which restated content available elsewhere) with one real Featured Work spotlight sourced from `lib/projects.ts` (spec §3) plus a Technical Expertise section sourced from the now-consolidated `lib/skills.ts` (Task 6) — eliminating the third/fourth copy of the skills list this page used to hardcode. The commented-out `metadata` export is replaced with a real, filled-in one (spec §5, SEO).

- [ ] **Step 2: Verify in the browser**

Run `npm run dev`, load `/` in both themes, scroll through every section confirming `Reveal` fade-ins trigger once and respect reduced motion (toggle `prefers-reduced-motion` in devtools), confirm the two featured project links go to `/projects/10` (Smart Inventory) and `/projects/11` (Estate-Mind).

- [ ] **Step 3: Run typecheck/lint/tests**

Run: `npm run typecheck && npm run lint && npm test`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "refactor: rebuild Home page around featured work, remove duplicated content"
```

---

## Task 10: About page — consolidate data, retoken

**Files:**
- Modify: `app/about/page.tsx`

**Interfaces:**
- Consumes: `experiencesData` (unchanged shape), `skillsData` (Task 6), `projectsData` (to source the Estate-Mind case-study bullets instead of the hardcoded special case).
- Produces: no new exports.

- [ ] **Step 1: Replace the hardcoded Estate-Mind special case (lines 159-181) with data pulled from `lib/projects.ts`**

Add the import `import { projectsData } from '@/lib/projects';` alongside the existing imports. Replace:

```tsx
              {experience.jobTitle === 'Academic Project Developer' ? (
                <div>
                  <p className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Developed <strong>Estate-Mind</strong>: an advanced
                    end-to-end data pipeline and exploratory analytics system
                    for Tunisian real estate market data.
                  </p>
                  <ul className="mb-6 ml-6 list-disc space-y-3 text-gray-700 dark:text-gray-300">
                    <li>
                      Automated ETL and normalization for 15,000+ multi-source
                      real estate listings across Tunisia.
                    </li>
                    <li>
                      Designed clustering algorithms, outlier detection, and
                      interactive price benchmarking dashboards for agencies and
                      investors.
                    </li>
                    <li>
                      Delivered reproducible EDA notebooks, geospatial mapping,
                      and reduced manual data prep by 80%.
                    </li>
                  </ul>
                </div>
              ) : (
```

with:

```tsx
              {experience.jobTitle === 'Academic Project Developer' ? (
                <div>
                  <p className="mb-4 text-lg font-semibold text-card-foreground">
                    Developed{' '}
                    <Link
                      href="/projects/11"
                      className="text-primary-600 underline dark:text-primary-400"
                    >
                      Estate-Mind
                    </Link>
                    : {projectsData.find((p) => p.id === '11')?.description}
                  </p>
                  <ul className="mb-6 ml-6 list-disc space-y-3 text-muted-foreground">
                    <li>{projectsData.find((p) => p.id === '11')?.approach}</li>
                    <li>{projectsData.find((p) => p.id === '11')?.result}</li>
                  </ul>
                </div>
              ) : (
```

Add `import Link from 'next/link';` to the imports if not already present.

- [ ] **Step 2: Replace the hardcoded `SkillGroup` calls (lines 219-247) to source from `lib/skills.ts`**

Replace:

```tsx
          <SkillGroup
            title="Languages"
            items={[
              ['Python (Expert)', 95],
              ['TypeScript', 90],
              ['SQL', 85],
              ['Java', 75],
              ['R', 70],
            ]}
          />
          <SkillGroup
            title="Data/ML"
            items={[
              ['Pandas/NumPy', 92],
              ['scikit-learn', 88],
              ['MLflow', 85],
              ['statsmodels', 80],
              ['Metabase/Power BI', 82],
            ]}
          />
          <SkillGroup
            title="DevOps/Backend"
            items={[
              ['Docker', 87],
              ['Fastify/Node', 85],
              ['PostgreSQL', 88],
              ['JWT/RBAC', 82],
            ]}
          />
```

with:

```tsx
          <SkillGroup
            title="Languages"
            items={skillsData.languages
              .slice(0, 5)
              .map((s) => [s.name, s.level] as [string, number])}
          />
          <SkillGroup
            title="Frameworks & Libraries"
            items={skillsData.librariesFrameworks
              .slice(0, 5)
              .map((s) => [s.name, s.level] as [string, number])}
          />
          <SkillGroup
            title="Tools & Platforms"
            items={skillsData.tools
              .slice(0, 5)
              .map((s) => [s.name, s.level] as [string, number])}
          />
```

Add `import skillsData from '@/lib/skills';` to the imports.

- [ ] **Step 3: Retoken the rest of the file**

Systematic replacements throughout `app/about/page.tsx`:
- `text-gray-900 dark:text-white` → `text-foreground`
- `text-gray-700 dark:text-gray-300` / `text-gray-600 dark:text-gray-400` → `text-muted-foreground`
- `border-gray-200 ... dark:border-gray-800 dark:bg-gray-900/50` (article cards, line 124) → `border-border bg-card`
- `bg-gray-200 dark:bg-gray-700` (skill bar track, line 286) → `bg-muted`
- `bg-primary-600` (skill bar fill, line 288) → keep as-is (still the accent scale)
- The dynamic Tailwind class interpolation at lines 55-62 (`` `bg-${color}-100 ...` ``) is a real bug risk (Tailwind can't tree-shake dynamically interpolated class names, so most of these classes are already being purged in production). Replace the whole block with a static `Chip` usage:

```tsx
            <div className="mt-8 flex flex-wrap gap-3">
              {['TypeScript', 'React/Next.js', 'Python', 'MLflow/Docker', 'PostgreSQL'].map(
                (label) => (
                  <Chip key={label} className="text-sm">
                    {label}
                  </Chip>
                )
              )}
            </div>
```

Add `import { Chip } from '@/components/ui/Chip';` to the imports.

- [ ] **Step 4: Verify in the browser**

Run `npm run dev`, load `/about` in both themes, confirm the Estate-Mind bullet points now match `lib/projects.ts`'s id `11` entry, confirm the tech chips render (previously-broken dynamic classes are now visibly correct), confirm skill bars still render proportional widths.

- [ ] **Step 5: Run typecheck/lint**

Run: `npm run typecheck && npm run lint`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add app/about/page.tsx
git commit -m "refactor: consolidate About page onto lib/projects.ts and lib/skills.ts, fix dynamic Tailwind classes"
```

---

## Task 11: Projects list + ProjectCard + FilterBar — retoken, weak-project handling

**Files:**
- Modify: `app/projects/page.tsx`
- Modify: `components/ProjectCard.tsx`
- Modify: `components/FilterBar.tsx`

**Interfaces:**
- Consumes: `Chip` (Task 2), design tokens (Task 1)
- Produces: `ProjectCard` keeps its existing `ProjectCardProps` shape — no signature change, so `app/projects/page.tsx`'s call sites are untouched by the prop contract, only by class tokens.

- [ ] **Step 1: Add a "no public link yet" placeholder state to `components/ProjectCard.tsx`**

Per spec §4, projects without a real screenshot show a clean placeholder instead of borrowing `/og-image.png`. Replace lines 15-20:

```typescript
  // Fallback to a known existing asset so cards never show a broken image
  const first =
    project.images && project.images.length > 0
      ? project.images[0]
      : '/og-image.png';
  const imgSrc = first;
```

with:

```typescript
  const hasImage = project.images && project.images.length > 0;
  const imgSrc = hasImage ? project.images[0] : undefined;
  const hasLinks = Boolean(project.githubLink || project.liveDemoLink);
```

Replace the image block (lines 45-54):

```tsx
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <Image
          src={imgSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
```

with:

```tsx
      <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-t-md bg-muted">
        {hasImage ? (
          <Image
            src={imgSrc}
            alt={project.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        ) : (
          <span className="font-mono text-xs text-muted-foreground">
            No screenshot yet
          </span>
        )}
      </div>
```

Near the Links section (around line 124), add a fallback when `!hasLinks`:

```tsx
        <div className="mt-auto flex flex-wrap items-center gap-3">
          {project.githubLink && ( /* ...unchanged... */ )}
          {project.liveDemoLink && ( /* ...unchanged... */ )}
          {!hasLinks && (
            <span className="font-mono text-xs text-muted-foreground">
              No public link yet
            </span>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center text-xs text-primary-700 underline hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
          >
            View Details
          </Link>
        </div>
```

- [ ] **Step 2: Retoken the rest of `components/ProjectCard.tsx`**

- `border-gray-200 bg-white ... dark:border-gray-800 dark:bg-gray-900` (line 37) → `border-border bg-card`
- `text-gray-900 dark:text-white` → `text-card-foreground`
- `text-gray-700 dark:text-gray-300` / `text-gray-600 dark:text-gray-400` → `text-muted-foreground`
- Technologies chips (lines 112-121) → replace with `<Chip key={idx}>{tech}</Chip>` (import `Chip` from `@/components/ui/Chip`)
- Featured badge `bg-yellow-300 ... text-gray-900 dark:bg-yellow-400 dark:text-gray-900` (line 40) → `bg-accent text-accent-foreground` (keep one accent color per spec §2, no separate yellow)

- [ ] **Step 3: Retoken `components/FilterBar.tsx`**

- `text-gray-900 dark:text-white` (line 29) → `text-foreground`
- Selected/unselected pill classes (lines 52-56): selected → `bg-accent text-accent-foreground`, unselected → `bg-muted text-muted-foreground hover:bg-border`

- [ ] **Step 4: Retoken `app/projects/page.tsx`**

- `text-gray-900 dark:text-white` / `text-gray-600 dark:text-gray-400` → `text-foreground` / `text-muted-foreground`
- The "Filter active" badge (line 76) and "Data & ML Emphasis" strip (lines 102-108) currently use raw `bg-primary-100`/`bg-blue-50` — replace both with `bg-muted text-muted-foreground` (single accent discipline — the strip's `<b>` text can use `text-primary-600 dark:text-primary-400` for emphasis instead of a whole colored panel)
- "Featured Projects" / "More Projects" headings → `text-foreground`

- [ ] **Step 5: Verify in the browser**

Run `npm run dev`, load `/projects`, confirm: featured/more sections render, filter chips toggle correctly with visible focus rings, the PhotoCube Shop card shows "No screenshot yet" instead of a placeholder image, cards with empty `githubLink`/`liveDemoLink` show "No public link yet" instead of no links at all, both themes look correct.

- [ ] **Step 6: Run typecheck/lint**

Run: `npm run typecheck && npm run lint`
Expected: PASS

- [ ] **Step 7: Commit**

```bash
git add app/projects/page.tsx components/ProjectCard.tsx components/FilterBar.tsx
git commit -m "style: retoken Projects page and cards, add clean placeholder state for link-less projects"
```

---

## Task 12: Project detail page — retoken

**Files:**
- Modify: `app/projects/[id]/page.tsx`
- Modify: `components/ProjectImagesZoom.tsx`

**Interfaces:**
- No signature changes — `generateStaticParams`/`ProjectDetails` keep their existing shapes.

- [ ] **Step 1: Retoken `app/projects/[id]/page.tsx`**

- `text-gray-900 dark:text-white` → `text-foreground`
- `text-gray-700 dark:text-gray-300` → `text-muted-foreground`
- Technology chips (lines 61-70) → replace with `<Chip key={tech}>{tech}</Chip>` (import from `@/components/ui/Chip`)
- GitHub/Live Demo links (lines 73-92) keep `text-primary-600`/`text-green-700` distinction as-is — these are functional external-link affordances, not decorative color use, so they're allowed outside the single-accent rule (spec §2's "used sparingly for CTAs and status" already covers a green "live" link as a status signal)

- [ ] **Step 2: Retoken `components/ProjectImagesZoom.tsx`**

- Image tile border `dark:border-gray-700` (line 17) → `border-border`
- Modal close button `bg-gray-900 bg-opacity-80` (line 44) stays as-is (deliberately a neutral overlay control, not a themed surface)

- [ ] **Step 3: Verify in the browser**

Run `npm run dev`, load `/projects/11` (Estate-Mind, has 1 image) and `/projects/1` (FLOCK OFF, has 3 images), confirm image grid renders, click an image to open the zoom modal, close via the × button and by clicking the backdrop, confirm keyboard Escape doesn't need to be added (existing modal has no keydown handler — flag but don't silently add scope; see Task 14 for the accessibility check that catches this).

- [ ] **Step 4: Run typecheck/lint**

Run: `npm run typecheck && npm run lint`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add app/projects/[id]/page.tsx components/ProjectImagesZoom.tsx
git commit -m "style: retoken project detail page and image zoom modal"
```

---

## Task 13: Resume page — consolidate data, retoken

**Files:**
- Modify: `app/resume/page.tsx`

**Interfaces:**
- Consumes: `projectsData`, `experiencesData`, `skillsData` — removes the three locally-declared `featuredProjects`/`SKILLS`/`INTERESTS` arrays (lines 15-94) entirely.

- [ ] **Step 1: Replace the local data arrays with imports from `lib/*.ts`**

Remove lines 15-94 (`featuredProjects`, `SKILLS`, `INTERESTS` constants) and add:

```typescript
import { projectsData } from '@/lib/projects';
import { experiencesData } from '@/lib/experiences';
import skillsData from '@/lib/skills';

const featuredProjectIds = ['11', '1', '10', '6', '7'];
const resumeProjects = featuredProjectIds
  .map((id) => projectsData.find((p) => p.id === id))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const allSkills = [
  ...skillsData.languages,
  ...skillsData.librariesFrameworks,
  ...skillsData.tools,
].sort((a, b) => b.level - a.level);

const INTERESTS = ['Muay Thai', 'Motorcycling', 'Fitness', 'Gaming'];
```

- [ ] **Step 2: Update the "Featured Projects" section (around line 250-268) to use `resumeProjects` with the `Project` shape instead of the old bespoke shape**

Replace the `.map` call's prop passing:

```tsx
          {resumeProjects.map((proj, idx) => (
            <ResumeProjectCard
              key={proj.id}
              name={proj.title}
              role={proj.role ?? ''}
              description={proj.description}
              stack={proj.technologies.join(', ')}
              impact={proj.result ?? ''}
              url={proj.githubLink}
              animate={idx === 0}
            />
          ))}
```

- [ ] **Step 3: Update the "Professional Experience" section (around line 196-217) to map over `experiencesData` instead of two hardcoded `ResumeExperience` calls**

```tsx
          {experiencesData
            .filter((exp) => exp.companyName !== 'ESPRIT')
            .map((exp) => (
              <ResumeExperience
                key={exp.jobTitle + exp.companyName}
                role={exp.jobTitle}
                company={exp.companyName}
                date={exp.date}
                highlights={exp.contributions.slice(0, 3)}
              />
            ))}
```

- [ ] **Step 4: Update the "Skills" section (around line 275-279) to use `allSkills`**

```tsx
          {allSkills.slice(0, 22).map((skill) => (
            <SkillBadge key={skill.name}>{skill.name}</SkillBadge>
          ))}
```

- [ ] **Step 5: Remove the `animate` prop's dependence on the deleted keyframes**

`ResumeProjectCard`'s `animate` prop (line 339-353) currently applies `.animate-highlight-glow` — that class no longer exists after Task 1. Replace the conditional class:

```tsx
        ${animate ? 'ring-1 ring-accent hover:scale-[1.02] hover:shadow-md' : 'hover:scale-[1.01] hover:shadow-sm'}
```

Similarly strip every other `animate-*` className reference in this file (`animate-fade-in`, `animate-slide-from-left`, `animate-fade-in-more`, `animate-float-up`, `animate-slide-from-right`, `animate-pop-in`, `animate-fade-in-long`, `animate-slide-up` — appearing on lines 103, 106, 109, 113, 133, 147, 151, 159, 192, 221, 250, 271, 283, 382, 390) since none of those keyframes exist anymore. These sections don't need scroll-reveal treatment (Resume is a single scroll-free-feeling print-friendly page per spec — motion here would fight the print use case), so simply delete the `animate-*` classes rather than replacing them with `Reveal`.

- [ ] **Step 6: Retoken remaining surface colors**

- `bg-white dark:bg-gray-800` (hero card, line 103) → `bg-card`
- `text-gray-900 dark:text-white` → `text-foreground` / `text-card-foreground` as appropriate
- `text-gray-700 dark:text-gray-300` / `text-gray-700 dark:text-gray-200` → `text-muted-foreground`
- `border-gray-200 bg-gray-50 ... dark:bg-gray-900` (project cards, line 351) → `border-border bg-muted`
- `bg-gray-100 ... dark:bg-gray-700` (skill badges, line 382) → `bg-muted`
- `border-gray-200 ... dark:border-gray-800` (interest badges, line 390) → `border-border`

- [ ] **Step 7: Verify in the browser**

Run `npm run dev`, load `/resume`, confirm all sections render from `lib/*.ts` data (no visual regression in content), use the browser's print preview to confirm `print:` classes still work correctly with no animation artifacts, confirm CV download link still works.

- [ ] **Step 8: Run typecheck/lint**

Run: `npm run typecheck && npm run lint`
Expected: PASS

- [ ] **Step 9: Commit**

```bash
git add app/resume/page.tsx
git commit -m "refactor: consolidate Resume page onto lib/*.ts data, remove dead animation classes"
```

---

## Task 14: SEO — dynamic sitemap, final metadata pass

**Files:**
- Create: `app/sitemap.ts`
- Delete: `public/sitemap.xml`
- Test: `app/__tests__/sitemap.test.ts`
- Modify: `app/layout.tsx` (metadataBase to use env var)

**Interfaces:**
- Produces: `sitemap()` default export matching Next.js's `MetadataRoute.Sitemap` type — a pure function, directly testable.

- [ ] **Step 1: Write the failing test**

```typescript
import sitemap from '../sitemap';
import { projectsData } from '@/lib/projects';

describe('sitemap', () => {
  it('includes every static route and every project detail route', () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);

    expect(urls.some((u) => u.endsWith('/'))).toBe(true);
    expect(urls.some((u) => u.endsWith('/about'))).toBe(true);
    expect(urls.some((u) => u.endsWith('/projects'))).toBe(true);
    expect(urls.some((u) => u.endsWith('/contact'))).toBe(true);
    expect(urls.some((u) => u.endsWith('/resume'))).toBe(true);

    for (const project of projectsData) {
      expect(urls.some((u) => u.endsWith(`/projects/${project.id}`))).toBe(
        true
      );
    }
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- sitemap.test.ts`
Expected: FAIL with "Cannot find module '../sitemap'"

- [ ] **Step 3: Write `app/sitemap.ts`**

```typescript
import type { MetadataRoute } from 'next';
import { projectsData } from '@/lib/projects';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mohamedaziz-ouertatani.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/projects`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/resume`, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes];
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- sitemap.test.ts`
Expected: PASS

- [ ] **Step 5: Delete the stale static sitemap**

```bash
rm public/sitemap.xml
```

Next.js's file-convention `app/sitemap.ts` serves `/sitemap.xml` automatically at request time — the static file would otherwise shadow it in `public/`.

- [ ] **Step 6: Update `public/robots.txt` if it hardcodes the old GitHub Pages sitemap URL**

Read `public/robots.txt`; if its `Sitemap:` line points at `https://mohamedaziz-ouertatani.github.io/portfolio/sitemap.xml`, change it to `${NEXT_PUBLIC_SITE_URL}/sitemap.xml` (use the same literal fallback domain as Task 14 Step 3 — since `robots.txt` is a static file, it can't read the env var, so use the real Vercel URL once known, defaulting to the placeholder from `.env.example` for now and flagging it as a TODO the user confirms once their Vercel URL is live).

- [ ] **Step 7: Update `app/layout.tsx` metadataBase and canonical/OG URLs to use the env var**

Replace the hardcoded `metadataBase: new URL('https://mohamedaziz-ouertatani.github.io/portfolio')` (line 13) and every hardcoded `https://mohamedaziz-ouertatani.github.io/portfolio/...` URL (lines 28, 36, 48, 81, 105) with `process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mohamedaziz-ouertatani.vercel.app'`, e.g.:

```typescript
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mohamedaziz-ouertatani.vercel.app';

export const metadata: Metadata = {
  // ...
  metadataBase: new URL(SITE_URL),
  // ...
  openGraph: {
    // ...
    url: `${SITE_URL}/`,
    // ...
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: '...' }],
  },
  twitter: {
    // ...
    images: [`${SITE_URL}/og-image.png`],
  },
  // ...
};
```

Apply the same `SITE_URL` constant to the two JSON-LD `<script>` blocks' `url` fields (lines 81, 105). Also update `app/about/page.tsx`'s and `app/resume/page.tsx`'s `alternates.canonical` (currently hardcoded GitHub Pages URLs) to relative paths (`'/about'`, `'/resume'`) — Next.js resolves relative canonicals against `metadataBase`.

- [ ] **Step 8: Verify**

Run `npm run build && npm run start`, visit `http://localhost:3000/sitemap.xml`, confirm it lists all 5 static routes + 11 project routes. Run `npm run typecheck && npm run lint && npm test`.
Expected: all PASS.

- [ ] **Step 9: Commit**

```bash
git add app/sitemap.ts app/layout.tsx app/about/page.tsx app/resume/page.tsx public/robots.txt app/__tests__/sitemap.test.ts
git rm public/sitemap.xml
git commit -m "feat: replace static sitemap with dynamic generator covering all project routes"
```

---

## Task 15: Final validation, dead-code sweep, accessibility pass

**Files:**
- No new files — this task is verification and small cleanup across the files already touched.

- [ ] **Step 1: Grep for any remaining reference to deleted keyframe classes**

Run: `grep -rn "animate-hero\|animate-fade-in\|animate-slide-\|animate-pop-in\|animate-float-up\|animate-resume-glow\|animate-highlight-glow" app components` (PowerShell: `Select-String -Path app,components -Pattern "animate-hero|animate-fade-in|animate-slide-|animate-pop-in|animate-float-up|animate-resume-glow|animate-highlight-glow" -Recurse`)
Expected: no matches. If any remain, remove them (they reference CSS deleted in Task 1 and will silently no-op).

- [ ] **Step 2: Grep for any remaining raw `gray-`/`blue-` surface color usage that should be a token**

Run: `grep -rn "gray-[0-9]\|dark:bg-gray\|dark:text-gray" app components` (PowerShell equivalent with `Select-String`)
Expected: a small remaining set is fine (e.g. neutral overlay controls intentionally left as-is per Task 12 Step 2) — review each hit and confirm it's an intentional exception, not a missed retoken pass. Fix any that were simply missed.

- [ ] **Step 3: Confirm `sharp` and `resend`/`zod` are genuinely used, not dead weight**

`sharp` is used implicitly by Next.js image optimization now that `images.unoptimized` is gone (Task 3) — no explicit import needed, this is expected. `resend` and `zod` are now imported in `app/api/contact/route.ts` (Task 4). Run: `grep -rn "from 'zod'\|from 'resend'" app lib` (PowerShell `Select-String`) to confirm both show at least one real usage.
Expected: both present.

- [ ] **Step 4: Accessibility spot-check**

- Tab through the full site (Header nav → hero CTAs → each page's interactive elements → Footer) confirming every focusable element shows the accent focus ring from Task 1's `*:focus-visible` rule and nothing traps focus.
- Confirm touch targets: `Button` (Task 2) uses `px-6 py-3` (≥44px height) — verify in devtools at the 375px viewport.
- Confirm `ProjectImagesZoom`'s modal (`components/ProjectImagesZoom.tsx`) closes on click-outside and its close button — it has no `Escape`-key handler; this is a pre-existing gap, not introduced by this redesign, so note it to the user as a follow-up rather than silently expanding this task's scope.
- Run Lighthouse (Chrome DevTools → Lighthouse → Accessibility) against `/` and `/projects/11` in production build (`npm run build && npm run start`), confirm score ≥95 per the project's existing `lighthouserc.js` target.

- [ ] **Step 5: Full validation suite**

Run in order:
```bash
npm run typecheck
npm run lint
npm test
npm run build
```
Expected: all four PASS with zero errors.

- [ ] **Step 6: Manual cross-viewport check**

Using the browser devtools responsive mode, load `/`, `/about`, `/projects`, `/projects/11`, `/contact`, `/resume` at 375px, 768px, 1024px, 1440px — confirm no horizontal scroll, no overlapping text, mobile nav menu works, project grid reflows correctly (1 col → 2 col → 3 col).

- [ ] **Step 7: Commit any final fixes found in Steps 1-6**

```bash
git add -A
git commit -m "chore: final cleanup pass — dead code sweep, accessibility spot-check"
```

(Skip this commit if Steps 1-6 found nothing to fix.)

---

## Post-implementation notes for the user (not a task — surface after the plan completes)

- **Vercel setup** (Task 5): connect the GitHub repo at vercel.com, then set `RESEND_API_KEY` and `NEXT_PUBLIC_SITE_URL` as environment variables in the Vercel project settings. Until then, the contact form will show its error state (Task 4 handles this gracefully) and OG/sitemap URLs fall back to a placeholder `*.vercel.app` domain.
- **Domain confirmation** (spec §7): once the real Vercel URL (or custom domain) is known, update `NEXT_PUBLIC_SITE_URL` in Vercel's environment variables — no code change needed, `app/layout.tsx` and `app/sitemap.ts` both read it at build/request time.
- **`ProjectImagesZoom` Escape-key handling**: pre-existing gap noted in Task 15 Step 4, intentionally left out of scope to avoid unrelated scope creep — worth a follow-up if the user wants it addressed.
