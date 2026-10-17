---
version: 1
slug: 'app-page-tsx'
primary_target: 'app/page.tsx'
related_targets:
  [
    'app/projects/page.tsx',
    'app/projects/[id]/page.tsx',
    'app/resume/page.tsx',
    'app/about/page.tsx',
    'app/contact/page.tsx',
  ]
---

# Surface brief: whole-site redesign (home, work, project case studies, resume, about, contact)

Mode: Experience. Scope: whole site; all copy, content, routes and behaviour unchanged. The zellige tile wall (cobalt/plaster/saffron, chamfered tiles, star patterns) is retired and is now the anti-reference, as is the dark/neon developer portfolio.

Audience and job: recruiters and hiring managers for a Feb 2027 PFE; they should read "rigorous analyst" in five seconds and reach a case study, the résumé or the email quickly. Proof is real projects only. Light scheme only.

Unresolved: none blocking. Stage coverage in the figures is derived from each project's real stack/pipeline data, never invented.

## Direction contract

THESIS: The portfolio as one rigorous statistical sheet in the Tufte data-ink school: every claim is a figure, every panel a small multiple. Refuses the card-deck portfolio, the dark neon dev look, and cream-plus-serif editorial.

OWN-WORLD: Cool white (#F6F7F7) sheet, graphite ink (#14181C), hairline range-frame axes and rules, no fills or shadows. Viridis is the single ordered data scale (#440154, #31688E, #21918C, #FDE725 held for the ask); links in viridis blue. Archivo throughout, width as voice (expanded display, normal text), tabular figures. Numbered figures with captions and margin notes.

STORY: The visitor sees one analyst who owns the whole data-to-product path, proven across real projects, available Feb 2027, and opens a case study, the résumé or the email.

FIRST VIEWPORT: Left five columns: name in expanded Archivo, role, the availability line marked with the yellow datum, Explore work (primary), résumé, email. Right seven columns: "Fig. 1" dot matrix, rows = eight projects, columns = the five path stages (transposed from the first sketch because eight project names cannot serve as column heads at 375px or in seven columns), viridis dots where covered, margin totals on both axes, one total rule and no per-row rules (a band appears only on hover/focus), caption beneath. Hovering a column or row isolates it, rest dims to 25%.

FORM: The Data-Ink Sheet (Tufte statistical graphics), candidate 3 of 7. Raises: isolate-and-dim (detector), numbered case-study steps with inventory first (bricks), one label grid across all project panels (sneaker). Seed key 0794b88c.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
