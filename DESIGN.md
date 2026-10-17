---
name: Mohamed Aziz Ouertatani, Portfolio
description: A portfolio set as one statistical sheet in the Tufte data-ink school; cool white paper, graphite ink, hairline range frames, and viridis used only as data.
colors:
  sheet: '#f6f7f7'
  sheet-band: '#eceeef'
  paper-white: '#ffffff'
  paper-hover: '#f0f2f3'
  hairline: '#d5d9dc'
  hairline-strong: '#9aa2a9'
  graphite-ink: '#14181c'
  ink-muted: '#48515a'
  ink-faint: '#646d75'
  viridis-blue: '#2a6589'
  viridis-blue-deep: '#1b4a68'
  stage-data: '#440154'
  stage-analysis: '#414487'
  stage-model: '#2a788e'
  stage-serve: '#21918c'
  stage-interface: '#1f9a7a'
  highlighter-yellow: '#fde725'
typography:
  display:
    fontFamily: 'Archivo, system-ui, sans-serif'
    fontSize: 'clamp(2.75rem, 4.3vw, 4.25rem)'
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: '-0.022em'
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: 'Archivo, system-ui, sans-serif'
    fontSize: '3rem'
    fontWeight: 600
    lineHeight: 1
    letterSpacing: '-0.022em'
    fontVariation: "'wdth' 118"
  title:
    fontFamily: 'Archivo, system-ui, sans-serif'
    fontSize: '1.5rem'
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: '-0.022em'
    fontVariation: "'wdth' 118"
  body:
    fontFamily: 'Archivo, system-ui, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "'lnum'"
  body-compact:
    fontFamily: 'Archivo, system-ui, sans-serif'
    fontSize: '0.9375rem'
    fontWeight: 400
    lineHeight: 1.625
  caption:
    fontFamily: 'Archivo, system-ui, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: 'Archivo, system-ui, sans-serif'
    fontSize: '0.75rem'
    fontWeight: 500
    lineHeight: 1
    letterSpacing: '0.08em'
  figure-number:
    fontFamily: 'Archivo, system-ui, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 500
    fontFeature: "'tnum', 'lnum'"
rounded:
  sm: '1px'
  md: '2px'
  lg: '3px'
  dot: '9999px'
spacing:
  gutter: '16px'
  gutter-sm: '24px'
  column-gap: '40px'
  section-top: '48px'
  section-bottom: '112px'
components:
  button-primary:
    backgroundColor: '{colors.graphite-ink}'
    textColor: '{colors.sheet}'
    typography: '{typography.caption}'
    rounded: '{rounded.sm}'
    padding: '10px 20px'
  button-primary-hover:
    backgroundColor: '{colors.viridis-blue-deep}'
    textColor: '{colors.sheet}'
  button-secondary:
    backgroundColor: 'transparent'
    textColor: '{colors.graphite-ink}'
    rounded: '{rounded.sm}'
    padding: '10px 20px'
  button-secondary-hover:
    backgroundColor: '{colors.paper-white}'
  button-ghost:
    textColor: '{colors.viridis-blue}'
    padding: '10px 0'
  button-ghost-hover:
    textColor: '{colors.viridis-blue-deep}'
  chip:
    textColor: '{colors.ink-muted}'
    typography: '{typography.label}'
    rounded: '{rounded.sm}'
    padding: '2px 8px'
  link:
    textColor: '{colors.viridis-blue}'
  link-hover:
    textColor: '{colors.viridis-blue-deep}'
  highlight-mark:
    backgroundColor: '{colors.highlighter-yellow}'
    textColor: '{colors.graphite-ink}'
  header:
    backgroundColor: '{colors.sheet}'
    textColor: '{colors.graphite-ink}'
    height: '68px'
  command-palette:
    backgroundColor: '{colors.paper-white}'
    textColor: '{colors.graphite-ink}'
    rounded: '{rounded.sm}'
    width: '512px'
---

# Design System: Mohamed Aziz Ouertatani, Portfolio

## Overview

**Creative North Star: "The Data-Ink Sheet"**

The site reads as one rigorous statistical sheet in the Tufte school. Every claim is a figure, every group of projects a set of small multiples, and every mark on the page earns its ink. Cool white paper carries graphite type, hairline rules and range-frame axes; there are no cards, no panels, no fills and no shadows. Numbered figures ("Fig. 1", "Fig. 3", "Table 1") with sentence captions replace decorative section furniture.

Colour is data. Viridis is the single ordered scale, and it encodes exactly one thing: the five stages of the data-to-product path (Data, Analysis, Model, Serve, Interface). Its yellow end is held back from the scale and used for the ask alone, as a highlighter behind ink. Links take the viridis blue. Everything else is graphite on paper.

One family, Archivo, speaks in two widths: opened up on its width axis for display, normal for reading, with tabular figures wherever numbers align. Density is analytical rather than airy: margin totals, counts, ticks and labels sit close to the data they describe. The retired zellige tile wall (cobalt, plaster, saffron, chamfered tiles) and the dark neon developer portfolio are the confirmed anti-references; the scheme is light only.

**Key Characteristics:**

- Flat paper and hairline rules; no fills, panels or shadows outside the command-palette overlay.
- Viridis encodes the five path stages and nothing else; the yellow end is reserved for the ask.
- Range-frame figures with margin totals, one total rule, and hover isolation that dims the rest to 25%.
- Small multiples on one shared label grid.
- Archivo only, with width (118% stretch) as the display voice and tabular figures for numbers.
- Headings stand alone, opened by a rule, with a figure-style caption beside them.

## Colors

A cool graphite-on-paper neutral field with one ordered data scale and one held-back highlighter.

### Primary

- **Viridis Blue** (viridis-blue): every text link, the hover tint of project titles, the focus outline (2px, 3px offset), and the input caret. Deepens to **Viridis Blue Deep** (viridis-blue-deep) on link hover and as the primary button's hover fill.

### Secondary

- **The Five Stages** (stage-data, stage-analysis, stage-model, stage-serve, stage-interface): viridis sampled at 0, .2, .4, .5 and .6 for marks on white, in path order. The last stop is deepened from the sampled value so it holds 3:1 on the sheet. These fill the dots of Fig. 1, the stage strips on every project, and the five-dot PathMark beside the name in the header.

### Tertiary

- **Highlighter Yellow** (highlighter-yellow): the yellow end of viridis, removed from the scale and kept for the ask. It sits behind graphite ink as a highlighter band (12% to 88% of the line box): the availability line, the email address, a selected technology filter, the PFE window bar in Fig. 3, the skip link, and text selection. In print it drops to semibold ink.

### Neutral

- **Sheet** (sheet): the page ground and the sticky header ground.
- **Sheet Band** (sheet-band): the hover/focus band on a Fig. 1 row and the backing behind a loading screenshot. Never a resting panel.
- **Paper White** (paper-white) and **Paper Hover** (paper-hover): the command-palette surface and its row hover; the secondary button's hover ground.
- **Hairline** (hairline): rules between panels, rows, table lines and chip frames.
- **Hairline Strong** (hairline-strong): secondary-button frames, empty-stage rings and dashes, timeline ticks in prose, the scrollbar thumb.
- **Graphite Ink** (graphite-ink): all headings and primary text, the rule that opens each section, figure axes and total rules, the primary button fill.
- **Ink Muted** (ink-muted) and **Ink Faint** (ink-faint): body/caption text and the quiet tier (labels, categories, margin units, year ticks).

### Named Rules

**The Colour Is Data Rule.** The stage colours appear only where they encode a stage of the data-to-product path. They never decorate a heading, a button, a divider or a background.

**The Held-Back Yellow Rule.** The highlighter yellow marks the ask (and the visitor's own selection), always behind ink and never as text colour, a fill panel, or a second data value.

## Typography

**Display Font:** Archivo (with system-ui, sans-serif), width axis at 118%
**Body Font:** Archivo (with system-ui, sans-serif), normal width
**Label/Mono Font:** Archivo; there is no second family, and numbers use its tabular figures.

**Character:** One grotesque whose width is the voice: expanded and slightly tightened (-0.022em) for headings, normal and open for reading. It reads like a well-set statistical report, not an editorial magazine.

### Hierarchy

- **Display** (600, clamp(2.5rem, 9.5vw, 4rem) on small screens, clamp(2.75rem, 4.3vw, 4.25rem) on large, 0.98): the name in the home hero only.
- **Headline** (600, 3rem rising to 3.75rem at sm, 1 to 1.04): page titles on Work, case studies, About, Contact and Résumé.
- **Section head** (600, 1.875rem rising to 2.25rem, 1.08): each home section heading, set in five columns beside its caption.
- **Title** (600, 1.25rem rising to 1.5rem, tight): project titles in small multiples and the work index.
- **Body** (400, 1rem, 1.625, max 52 to 62ch): reading text; 0.9375rem for project summaries and dense lists; 1.0625rem for long-form lead prose in case studies and About.
- **Caption** (400, 0.875rem, relaxed, muted ink): figure captions, opened by the figure number in medium-weight graphite ("Fig. 1").
- **Label** (500, 0.75rem, 0.08em, uppercase, faint ink): heads a sub-block or a table column (Path covered, Stack, Navigate, Filter by technology). It is itself the heading, never a kicker over another one.
- **Margin figures** (0.6875rem to 0.7rem): filter counts as superscripts and the "of 5", "projects", "/ 8" margin units of Fig. 1.

The off-ramp steps 0.6875, 0.7, 0.9375, 1.0625 and 1.75rem are intentional; the 1.75rem step sets the About preview pull statement.

### Named Rules

**The Width Is Voice Rule.** Hierarchy comes from width, weight and size inside one family. No second typeface, no italics-as-display, no system display face.

**The Tabular Figures Rule.** Any number that aligns with another number (totals, counts, metrics, dates, step numbers, year ticks) is set in tabular lining figures.

**The No Kicker Rule.** Nothing sits above a heading: no eyebrow, no overline, no section number label. A hairline rule opens the section and the heading carries its own weight.

## Layout

A 12-column grid inside a 1280px (max-w-7xl) container with 16px gutters (24px from sm) and 40px column gaps. Home sections open with a full-width graphite rule, then a heading in columns 1 to 5 and a figure-style caption in columns 7 to 12; content follows 48 to 56px below. Section padding runs 40/80px (top/bottom) on small screens and 48/112px from md.

The hero splits five columns of identity and ask from a seven-column (six at xl) figure, and fills the viewport below the 68px header on large screens.

**Small multiples.** Selected work is a 1/2/3-column list in which every panel is a six-row subgrid (title, field, summary, stage strip, reported numbers, status), so each slot aligns across the row. Panels are separated by hairlines between them, never boxed.

**Case studies.** Inventory comes first: path covered (stage strip), stack, and Table 1 of reported results. The write-up then runs as numbered steps (Architecture, Screens, Problem, Approach, Result, Key decisions, Challenges), each with its number and label in a three-column margin and prose in nine columns, ruled off from the step above. Numbering follows only the steps present.

**Figures.** Fig. 1 is a matrix: rows are projects, columns are the five stages, dots where the project's stack covers a stage, a dash where it does not, margin totals on both axes, one graphite total rule, and no per-row rules. Fig. 3 is a range chart whose axis stops where the data stops, with ticks hanging from the axis and two-digit year labels.

### Named Rules

**The Range Frame Rule.** Axes and rules extend only as far as the data. Rows are separated by whitespace; a single total rule closes a figure; a band appears only on hover or focus.

**The Isolate-and-Dim Rule.** Pointing at a row or column of a figure isolates it and dims everything else to 25% opacity over 300ms. Nothing else on the sheet uses opacity as state.

## Elevation & Depth

The sheet is flat. Depth is never conveyed; structure comes from hairline rules, the graphite section rule, and whitespace. Frames on buttons, chips and screenshots are drawn as 1px inset outlines, not borders or shadows. The one exception is the command palette, an overlay that must lift above the page.

### Shadow Vocabulary

- **Overlay lift** (`box-shadow: 0 0 0 1px var(--color-border-strong), 0 18px 48px -12px rgb(20 24 28 / 0.28)`): the command palette only.

### Named Rules

**The No Panels Rule.** No fills, panels or shadows at rest. If a group needs separating, use a hairline; if it needs emphasis, use ink weight or the highlighter.

## Shapes

Square, ruled geometry. Corners are effectively square (1px on buttons, chips and the palette; 2 to 3px is the ceiling). The only round forms are data marks: stage dots, status dots and the PathMark. Frames are 1px hairlines; the section-opening rule and figure total rules are 1px graphite. Bars in Fig. 3 are flat rectangles: a 3px graphite rule for the degree, 14px bars for roles, and the PFE window bar in highlighter yellow with a 1px ink frame.

## Components

### Buttons

Square, flat, ruled.

- **Shape:** near-square corners (1px).
- **Primary:** solid graphite with sheet-coloured text, 10px 20px, 0.875rem medium. The trailing arrow nudges 2px right on hover.
- **Hover / Focus:** primary fills to Viridis Blue Deep over 200ms on the exponential ease-out (cubic-bezier(0.16, 1, 0.3, 1)); focus is the global 2px viridis-blue outline at 3px offset.
- **Secondary:** transparent with a 1px inset Hairline Strong frame that turns graphite on hover, over a Paper White ground.
- **Ghost:** a viridis-blue underlined link with a leading icon; the underline thickens from 1px to 2px on hover.

### Chips

- **Style:** hairline-framed (1px inset), 0.75rem medium, muted ink, 2px 8px. Not interactive.
- **State:** none. Filters are not chips (see Filter list).

### Filter list

A frequency list rather than a wall of boxes: each technology name carries its project count as a faint tabular superscript, most used first. A selected technology is set in medium-weight ink under the highlighter.

### Cards / Containers

There are no cards. Project entries in the work index are table-like rows ruled by hairlines across 6/3/3 columns (summary, stage strip and links, screenshot). The title is a stretched link; Code and Demo stay individually clickable. Screenshots sit in a 16:10 frame with a 1px inset hairline.

### Navigation

- **Header:** sticky, sheet ground, hairline bottom rule, 68px tall. PathMark plus the name in display width at left. Links are 0.875rem muted ink, darkening to graphite on hover; the current page is graphite medium with a 1px underline. A secondary CV button closes the row.
- **Mobile:** a drawer within the nav landmark, items in display width at 1.25rem separated by hairlines.
- **Skip link:** graphite on highlighter yellow.

### Stage Strip (signature)

Fig. 1's encoding at the size of a word: five positions on a hairline, a filled stage-colour dot (4.5px radius) where the project's stack covers that stage and a hairline ring (3px) where it does not, with optional faint labels beneath. It repeats on every project so projects compare as small multiples. Coverage is derived only from each project's listed technologies.

### PathMark (signature)

Five 3px-radius dots in viridis order, the brand mark beside the name.

### Figure entrances

Marks draw in once in CSS: dots scale from zero over 500ms, bars extend from the axis over 900ms, both on the exponential ease-out with staggered delays. First-viewport text is never animated, so the name paints before hydration; below the fold, text and tables ease in once from an 8px rise over 600ms, with nothing that springs or slides. Reduced motion reduces the reveal to a plain fade and collapses CSS animation and transition to near zero.

## Do's and Don'ts

### Do:

- **Do** encode the five path stages, and only them, with the stage colours, in path order.
- **Do** put the ask under the highlighter: graphite ink on the yellow band, never yellow text.
- **Do** number figures and tables and caption them with one sentence opened by "Fig. n" in medium graphite.
- **Do** close figures with one graphite total rule and carry totals in the margins.
- **Do** align every comparable slot of a set of projects on one shared subgrid.
- **Do** set headings in Archivo at 118% width with -0.022em tracking, and every aligned number in tabular figures.
- **Do** separate with 1px hairlines and whitespace.

### Don't:

- **Don't** use fills, panels, cards or shadows at rest; the command palette's overlay lift is the only shadow.
- **Don't** use a stage colour as decoration, or the highlighter yellow as a data value or a fill panel.
- **Don't** place a kicker, eyebrow or overline above a heading.
- **Don't** add per-row rules to a figure; the band appears only on hover or focus.
- **Don't** introduce a second typeface or a dark scheme.
- **Don't** round corners beyond 3px; round shapes are reserved for data marks.
- **Don't** animate first-viewport text, or let anything spring or slide; figure marks draw in, and below-fold blocks only rise 8px once.
