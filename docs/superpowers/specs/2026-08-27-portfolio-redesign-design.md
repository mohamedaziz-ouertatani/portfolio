# Portfolio Full Redesign — Design Spec

Date: 2026-08-27
Owner: Mohamed Aziz Ouertatani

## 1. Context & Goals

The portfolio (Next.js 14 App Router, TypeScript, Tailwind, statically exported to GitHub Pages) has real, substantial content — two flagship data-engineering projects (Estate-Mind, Smart Inventory Forecasting Platform), real work history (iTransform365, Swiver), 11 total projects — but the presentation doesn't match the quality of the work:

- Design system is minimal: one custom color token, system fonts only, no real typography/spacing scale.
- Content is duplicated across 4 places (`lib/*.ts`, and inline arrays in `app/page.tsx`, `app/about/page.tsx`, `app/resume/page.tsx`) with drifting numbers (e.g. skill levels differ between pages).
- Animation is ad hoc: hand-rolled CSS keyframes (some duplicated), a duplicated typing-effect component, dead parallax state — while `framer-motion` sits installed and unused.
- Contact form is `mailto:`-only; `resend` and a `zod` validation schema are installed but never wired in — leftover scaffolding from a planned backend that never landed.
- GitHub Pages static export requires a `basePath`/`assetPrefix`/`withBasePath` workaround threaded through every asset reference, which has caused several recent bug-fix commits (image paths, CV download).
- Dead code: commented-out old hero markup, commented-out Home metadata export, duplicated `hero-shimmer` keyframes.
- SEO gap: sitemap lists only 5 static URLs, missing the dynamic `/projects/[id]` case-study pages.

Goal: a distinctive, technically credible, fast, accessible portfolio that reads as one coherent product — not a collection of individually styled sections — without fabricating any content, achievements, or credentials beyond what exists in the current site.

## 2. Design System

**Direction:** "Engineering documentation meets editorial portfolio." Swiss/minimalist grid discipline, dark-first with a real (not token) light mode, one restrained accent color. Explicitly avoiding: purple AI gradients, glassmorphism, glowing text, blobs, 3D effects, particle backgrounds, emoji icons.

**Colors** (CSS variables in `app/globals.css`, both modes defined explicitly — no relying on a single token set with implicit dark overrides):

| Token | Dark | Light |
|---|---|---|
| `--color-background` | `#0F172A` | `#F8FAFC` |
| `--color-foreground` | `#F8FAFC` | `#0F172A` |
| `--color-card` | `#1B2336` | `#FFFFFF` |
| `--color-card-foreground` | `#F8FAFC` | `#0F172A` |
| `--color-muted` | `#272F42` | `#F1F5F9` |
| `--color-muted-foreground` | `#94A3B8` | `#475569` |
| `--color-border` | `#334155` | `#E2E8F0` |
| `--color-primary` | `#F8FAFC` (near-white, for primary text/buttons) | `#0F172A` |
| `--color-accent` | `#22C55E` | `#16A34A` (darkened for AA contrast on light bg) |
| `--color-accent-foreground` | `#0F172A` | `#FFFFFF` |
| `--color-destructive` | `#EF4444` | `#DC2626` |

One accent color used sparingly: primary CTAs, active nav state, success/status indicators, project "featured" marker. Never used decoratively.

**Typography:**
- Single family: **Inter** (Google Fonts, self-hosted via `next/font` — no external network request at runtime, avoids FOUT/CLS), weights 400/500/600/700, tracking tightened at large sizes.
- **JetBrains Mono** loaded alongside, reserved narrowly for: tech-stack tags/chips, metrics/numbers in stat blocks, code-adjacent labels. Never for prose or headings.
- Type scale (Tailwind `fontSize` extension): `xs 12/16, sm 14/20, base 16/26, lg 18/28, xl 20/30, 2xl 24/32, 3xl 30/38, 4xl 36/44, 5xl 48/56, 6xl 60/68` — replaces ad hoc Tailwind defaults so every heading in the site comes from the same scale.

**Spacing/radius/shadow tokens:** adopt an 8px-based spacing scale (Tailwind default extended, not replaced), `--radius-sm: 6px`, `--radius-md: 10px`, `--radius-lg: 16px` (used consistently — audit showed inconsistent radii across cards), shadows kept minimal/flat (`--shadow-sm` for cards, one `--shadow-md` for elevated/hover states) — no heavy drop shadows.

**Motion:** framer-motion, replacing all hand-rolled keyframes.
- Page/section reveal: fade + 12px translate-y on scroll into view, 400ms, once per element.
- Hover: 150-250ms opacity/transform only (no width/height animation).
- Respect `prefers-reduced-motion`: disable translate/scale, keep only opacity crossfades.
- No parallax, no scroll-jacking, no auto-playing carousels.

## 3. Information Architecture

Keep existing routes — they're sound: `/`, `/about`, `/projects`, `/projects/[id]`, `/contact`, `/resume`.

**Home** rebuilt around: Hero (positioning statement + specific stack, not "passionate developer") → Featured work spotlight (Estate-Mind + Smart Inventory, the two priority-100/90 projects, with real case-study framing: problem/approach/result) → Technical expertise (from `lib/skills.ts`, single source) → Experience timeline (from `lib/experiences.ts`) → Beyond-coding (kept — genuine personality signal, currently underused) → Contact CTA.

**About / Projects / Resume** stay as distinct pages but stop re-declaring their own copies of skills/experience/projects — they read from `lib/*.ts`.

## 4. Content Consolidation (single source of truth)

- `lib/projects.ts`, `lib/experiences.ts`, `lib/skills.ts` become the only place this data is declared.
- Remove inline duplicate arrays in `app/page.tsx`, `app/about/page.tsx`, `app/resume/page.tsx`; those pages import and render from `lib/*.ts` (with page-appropriate presentation, e.g. Resume renders a print-optimized layout from the same data).
- No content is invented. Any gap (e.g. missing project description depth) is flagged back to the user rather than filled with fiction.
- Projects without a real screenshot or links (PhotoCube Shop, and 2-3 link-less entries) are kept, per user decision, but visually de-emphasized: no fake screenshot, a clean "no public link yet" state instead of a dead/broken-looking link.

## 5. Engineering Changes

**Hosting migration (GitHub Pages → Vercel):**
- Remove `output: 'export'`, `basePath`, `assetPrefix`, `trailingSlash`, `images.unoptimized` from `next.config.mjs`.
- Delete `lib/basePath.ts` and all `withBasePath(...)` call sites — plain `/images/...` paths.
- Re-enable `next/image` optimization (remove `unoptimized: true`).
- Replace `.github/workflows/deploy.yml` (GitHub Pages Action) with a Vercel deployment (git-connected, no custom workflow needed) — keep `ci.yml` (lint/typecheck/test) and `lighthouse.yml` as-is, they're host-agnostic.
- Update `public/robots.txt` / `sitemap.xml` domain if the canonical URL changes; ask the user for the final Vercel/custom domain before hardcoding it.

**Real contact form:**
- New `app/api/contact/route.ts` (Next.js Route Handler) using the existing `resend` dependency to send mail, and the existing `lib/validations.ts` zod schema for server-side validation (currently defined but unused).
- `app/contact/page.tsx` form posts to this route instead of building a `mailto:` link; keep a `mailto:` link as a visible fallback/alternative, not the only path.
- Requires a `RESEND_API_KEY` (already in `.env.example`) set as a Vercel environment variable — user must supply this; I will not fabricate or guess a key.

**Dead code removal:**
- Commented-out old hero markup block in `app/page.tsx`.
- Dead parallax `imgOffset` state (tied to the removed hero block).
- Duplicated `hero-shimmer` keyframes in `globals.css` (defined twice) and the general keyframe cleanup once framer-motion replaces them.
- Commented-out Home page metadata export → replaced with a real, filled-in metadata export.
- Duplicated `TypingEffect` component (exists in both `app/page.tsx` and `components/HomeHero.tsx`) → single shared component.

**SEO:**
- `sitemap.xml` generation: switch from hand-maintained static file to a `app/sitemap.ts` dynamic generator (Next.js App Router convention) that includes all static routes plus every `projects/[id]` from `lib/projects.ts`.
- Fill in Home page's metadata export (title/description) instead of leaving it commented out.

**Accessibility:** carry forward existing good practices (skip link, alt text, aria-labels, focus-visible styles) and verify against the new design system — new color pairs must hit 4.5:1 contrast in both themes, all interactive elements ≥44×44px touch target, keyboard nav through the new motion-driven reveals must not trap or hide focus.

## 6. Non-goals

- No CMS migration — content stays in TypeScript files, this is a personal portfolio at this scale, a CMS would be premature.
- No fabricated content, projects, metrics, or credentials.
- No new sections not grounded in existing real content (e.g. no fake testimonials).
- No filtering/tagging complexity beyond what `FilterBar` already does, unless it's clearly broken.

## 7. Open item for the user

- Final production domain (Vercel default `*.vercel.app`, or a custom domain) — needed to finalize canonical URLs, OG metadata, and sitemap. Will proceed with Vercel's default domain and flag this as a follow-up if not specified.
