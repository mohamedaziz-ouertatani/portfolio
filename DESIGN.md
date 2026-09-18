---
name: Mohamed Aziz Ouertatani, Portfolio
description: A portfolio laid like a zellige tile wall, in Sidi Bou Said cobalt and lime-wash plaster, cut in chamfered tiles with no shadows.
colors:
  cobalt: '#163E93'
  cobalt-strong: '#0F2F73'
  cobalt-deep: '#0E2A6B'
  cobalt-wall-surface: '#1B47A3'
  cobalt-dim: '#C7D3EC'
  plaster: '#EFF1EA'
  plaster-elevated: '#E6E9E0'
  plaster-surface: '#FAFBF7'
  plaster-glaze: '#F5F6F1'
  grout: '#C9CFC0'
  grout-strong: '#98A08F'
  ink: '#0B1533'
  ink-muted: '#3E4A66'
  ink-faint: '#5B6580'
  mist-on-cobalt: '#C6D2EE'
  mist-faint-on-cobalt: '#A9B9E0'
  turquoise: '#12A79D'
  turquoise-text: '#0B6E67'
  turquoise-light: '#7FDED6'
  saffron: '#F0A81C'
  saffron-bright: '#FFC247'
  bisque: '#D9C7A8'
  brick-red: '#B93A22'
typography:
  display-hero:
    fontFamily: 'Bricolage Grotesque, system-ui, sans-serif'
    fontSize: 'clamp(2.75rem, 8.6vw, 6rem)'
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: '-0.035em'
  display:
    fontFamily: 'Bricolage Grotesque, system-ui, sans-serif'
    fontSize: '3.75rem'
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: '-0.025em'
  headline:
    fontFamily: 'Bricolage Grotesque, system-ui, sans-serif'
    fontSize: '1.875rem'
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: '-0.025em'
  title:
    fontFamily: 'Bricolage Grotesque, system-ui, sans-serif'
    fontSize: '1.5rem'
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: '-0.025em'
  lead:
    fontFamily: 'Hanken Grotesk, system-ui, sans-serif'
    fontSize: '1.125rem'
    fontWeight: 400
    lineHeight: 1.75
  body:
    fontFamily: 'Hanken Grotesk, system-ui, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.625
  ui:
    fontFamily: 'Hanken Grotesk, system-ui, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 600
    lineHeight: 1.25rem
  label:
    fontFamily: 'Hanken Grotesk, system-ui, sans-serif'
    fontSize: '0.75rem'
    fontWeight: 600
    lineHeight: 1rem
    letterSpacing: '0.12em'
rounded:
  chip: '2px'
  chamfer-sm: '8px'
  chamfer: '14px'
spacing:
  grout-gap: '12px'
  grout-gap-wide: '14px'
  tile-padding: '24px'
  tile-padding-lg: '40px'
  band-y: '80px'
  band-y-wide: '112px'
components:
  button-primary:
    backgroundColor: '{colors.cobalt}'
    textColor: '{colors.plaster-glaze}'
    rounded: '{rounded.chamfer-sm}'
    typography: '{typography.ui}'
    padding: '12px 24px'
  button-primary-hover:
    backgroundColor: '{colors.cobalt-strong}'
  button-primary-on-wall:
    backgroundColor: '{colors.saffron}'
    textColor: '{colors.ink}'
  button-primary-on-wall-hover:
    backgroundColor: '{colors.saffron-bright}'
  button-secondary:
    backgroundColor: '{colors.plaster-elevated}'
    textColor: '{colors.ink}'
    rounded: '{rounded.chamfer-sm}'
    typography: '{typography.ui}'
    padding: '12px 24px'
  button-secondary-hover:
    backgroundColor: '{colors.plaster-surface}'
  filter-tile:
    backgroundColor: '{colors.plaster-elevated}'
    textColor: '{colors.ink-muted}'
    rounded: '{rounded.chamfer-sm}'
    typography: '{typography.ui}'
    padding: '6px 12px'
  filter-tile-selected:
    backgroundColor: '{colors.cobalt}'
    textColor: '{colors.plaster-glaze}'
  chip:
    backgroundColor: '{colors.plaster-elevated}'
    textColor: '{colors.ink-muted}'
    rounded: '{rounded.chip}'
    padding: '4px 10px'
  availability-tile:
    backgroundColor: '{colors.saffron}'
    textColor: '{colors.ink}'
    rounded: '{rounded.chamfer-sm}'
    padding: '8px 16px'
  project-tile-code-public:
    backgroundColor: '{colors.cobalt}'
    textColor: '{colors.plaster-glaze}'
    rounded: '{rounded.chamfer}'
    padding: '24px'
  project-tile-unlinked:
    backgroundColor: '{colors.bisque}'
    textColor: '{colors.ink}'
    rounded: '{rounded.chamfer}'
    padding: '24px'
  stack-tile:
    backgroundColor: '{colors.cobalt-wall-surface}'
    textColor: '{colors.plaster-glaze}'
    rounded: '{rounded.chamfer-sm}'
    padding: '8px 14px'
  stack-tile-active:
    backgroundColor: '{colors.saffron}'
    textColor: '{colors.ink}'
  stack-tile-related:
    backgroundColor: '{colors.plaster-glaze}'
    textColor: '{colors.ink}'
  site-header:
    backgroundColor: '{colors.cobalt-deep}'
    textColor: '{colors.plaster-glaze}'
    padding: '12px 16px'
---

# Design System: Mohamed Aziz Ouertatani, Portfolio

## Overview

**Creative North Star: "The Zellige Wall"**

The site is a tile wall. Every project, tool, role and action is a precisely cut piece with a flat glaze, set into a grid with visible grout gaps. Two grounds carry the whole thing: lime-wash plaster (#EFF1EA) for reading, and Sidi Bou Said cobalt (#163E93) for the wall itself. Home alternates the two as full-bleed bands (cobalt hero, plaster Work, cobalt Stack, plaster Experience, plaster About, cobalt Contact), so the wall cuts across the page rather than sitting in a box. Depth comes only from color, grout lines and the chamfered silhouette. There are no shadows, no gradients and no glow anywhere.

The voice is confident and warm rather than technical: a heavy, slightly condensed display grotesque (Bricolage Grotesque) for names and titles, a clear humanist grotesque (Hanken Grotesk) for everything read. There is no monospace voice, no terminal or code-window styling. Color is used with a strict meaning: saffron is the warmest glaze and marks the truthful ask (availability, the email address, the hovered stack tile); turquoise is the secondary glaze for statements and stages; bare bisque means "no public link yet".

Density is moderate and tile-driven. Content sits in tiles or on generous plaster/cobalt bands with 80-112px vertical padding. The hero is the densest moment: a twelve-column, five-row tile wall.

**Key Characteristics:**

- Two grounds (plaster, cobalt) swapped by re-declaring the same semantic tokens, never by per-component overrides.
- Every interactive or content block is a chamfered tile; corners are cut, never rounded.
- Glazes are flat fills; body text never sits in glaze on plaster except in the inked-glaze pairs defined below.
- Pattern fields (eight-point star tessellation) are the wall's texture, used only as full-bleed backgrounds and header/footer friezes.
- Light color scheme only; there is no dark mode.

## Colors

A plaster-and-cobalt palette with two warm/cool glazes, ink-navy text, and one earth tone for the unglazed.

### Primary

- **Sidi Bou Said Cobalt** (#163E93): the accent on plaster (primary buttons, links, selected filter, active timeline segments, hero surname) and the ground of the cobalt zone, hero wall and contact wall. `zone-cobalt` re-declares its background here.
- **Deep Cobalt** (#0E2A6B): the darkest wall. Header and footer ground, the `deep` project glaze, the pattern-field ground for cobalt bands, and the ground behind the friezes.
- **Cobalt Strong** (#0F2F73): the hover state of cobalt on plaster.

### Secondary

- **Saffron Glaze** (#F0A81C): the accent inside cobalt zones (it replaces cobalt as `accent` there), the availability tile, the email tile, the hovered stack tile, the star mark, text selection and focus outlines on cobalt. Hover brightens to Bright Saffron (#FFC247). Ink text only.
- **Kairouan Turquoise** (#12A79D): a fill glaze for the hero statement tile, project tiles and education tiles, with ink text. Never used as text on plaster.
- **Turquoise, text-safe** (#0B6E67): the deeper turquoise for anything read on plaster (secondary accent, success). On cobalt it lifts to #7FDED6.

### Tertiary

- **Bare Bisque** (#D9C7A8): the unglazed tile. It appears only on a project with no public code or demo, and carries no accent.

### Neutral

- **Lime-Wash Plaster** (#EFF1EA): the reading ground. Elevated wash #E6E9E0 (secondary buttons, chips, filter tiles at rest); surface #FAFBF7 (lifted plaster).
- **Plaster Glaze** (#F5F6F1): the bright tile: the hero name tile, "Explore my work" tile, the plaster tile set into cobalt, and the light text on cobalt.
- **Grout** (#C9CFC0, strong #98A08F): borders, dividers, the timeline track. On cobalt, grout becomes plaster at 24% and 50% alpha.
- **Ink Navy** (#0B1533): all text on plaster and on saffron, turquoise, bisque and plaster glazes. Muted (#3E4A66) for captions and secondary copy; faint (#5B6580) for the smallest metadata.
- **Mist on Cobalt** (#C6D2EE, faint #A9B9E0): muted and faint text inside cobalt zones.
- **Brick Red** (#B93A22): destructive state, reserved.

### Named Rules

**The Same-Names Rule.** A zone changes its ground by re-declaring the semantic tokens (`zone-cobalt`, `zone-plaster`), and every component inside inherits the inversion. Do not fork a component per ground.

**The Glaze Follows Truth Rule.** Glaze is a claim. A project with a public repository or live demo is glazed in a color (cobalt, turquoise, saffron or deep); a project with neither is bare bisque. The two never blend, so the wall never claims more than the links behind it. The status line on each tile ("Code is public" / "No public link yet") is derived from the same data.

**The Glaze Is Fill Rule.** Glazes are fills. Text on plaster is ink or cobalt or text-safe turquoise; text on a glaze is ink or plaster-glaze, chosen per the pairing (cobalt and deep take plaster-glaze; turquoise, saffron, bisque and plaster take ink).

## Typography

**Display Font:** Bricolage Grotesque (with system-ui, sans-serif), loaded through next/font as `--font-display`
**Body Font:** Hanken Grotesk (with system-ui, sans-serif), loaded through next/font as `--font-body`
**Label/Mono Font:** none. `font-mono` is aliased to the body face; the site has no monospace voice.

**Character:** A cut, slightly condensed display face with a point of view against a calm humanist text face with true tabular numerals. h1-h3 are always the display face at weight 800 with balanced wrapping; body copy wraps with `text-wrap: pretty`.

### Hierarchy

- **Display Hero** (800, clamp(2.75rem, 8.6vw, 6rem), 0.92, -0.035em): the name on the hero tile; surname in cobalt.
- **Display** (800, 2.25rem / 3rem / 3.75rem at base / sm / md, 1.02, -0.025em): section headings on home and pages ("Selected work", "How I build it"). The closing call to action scales to 5rem and 6rem.
- **Headline** (800, 1.875rem, 1.02): project tile titles (1.5rem on small screens), the hero availability statement (2.25rem to 3rem), the featured showcase tile title (2.25rem, 3rem on 2xl).
- **Title** (800, 1.5rem, 1.05): case-study tile titles, timeline job titles (1.5rem to 1.875rem), education tile names (1.25rem).
- **Lead** (400, 1.125rem, 1.75rem): section captions in muted ink; the hero statement runs 1.125rem to 1.25rem at weight 500.
- **Body** (400, 1rem, 1.625rem): default copy; line length capped near 62ch to 65ch in reading blocks.
- **UI** (600, 0.875rem, 1.25rem): buttons, nav links, filter and stack tiles.
- **Label** (600, 0.75rem, 0.12em tracking, uppercase, muted): the wall's signage voice for sub-blocks only: filter group title, footer column titles, stack category names, education title, and rows in a tile's spec back.

### Named Rules

**The Lining Numerals Rule.** Numerals are lining; dates and metrics add `tnum` for tabular figures (timeline dates, metric values, spec rows).

**The Heading Carries Itself Rule.** A heading stands alone: no kicker, eyebrow, index number or category tag above it. The label style may head a sub-block or a list, never sit over a heading.

## Layout

A single container (max-width 80rem, 16px side padding) inside full-bleed bands. Each section owns its ground and its own container, which is what lets cobalt bands cut across the page. Vertical rhythm is 80px (112px from md) on section bands and 96px (128px from md) on the closing wall; heading to content is 48px.

Tiles sit on a 12-column grid with grout gaps of 12px (14px from lg). The hero is 12 columns by 5 rows (rows at least 92px, at least the viewport minus the 88px header on lg). The Work wall uses 120px auto rows (130px from lg) with a showcase tile spanning 7 columns by 4 rows and five smaller tiles of 5 and 4 columns by 2 rows. The Stack wall is a plain four-column grid of category groups (two at sm, one below) holding tile buttons in flowing rows. Experience is a 2:1 two-column layout (timeline, education tiles).

Below lg the wall collapses to a single column and tiles are reordered: name, availability, primary route, statement, portrait. Nothing is scaled down into a mini-wall; tiles stack at full width. Anchored scrolling reserves 5.5rem for the sticky header.

## Elevation & Depth

Flat by construction. There are no drop shadows, no gradients, no blur and no glow. Depth is created by the ground change (plaster to cobalt to deep), by 12px to 14px grout gaps, by the chamfered silhouette, and by the two-tone pattern fields, whose tiles are one step lighter or darker than the ground and edged with a 1.25px lighter line. The sticky header and footer sit on deep cobalt, closed off by a pattern frieze rather than a line or shadow.

### Named Rules

**The No-Shadow Rule.** Nothing casts a shadow or glows. State is shown by a glaze swap (hover fills, selected tiles), a scale, or an outline drawn inside the tile.

## Shapes

The form language is the cut tile. `tile` clips a block to an octagon by removing a 14px triangle from each corner (`tile-sm`: 8px, for buttons, badges, filter and stack tiles). The cut echoes the eight-point star at the heart of the pattern. Because a clip removes anything at the corners, borders are never drawn on tiles: a secondary button is a solid elevated glaze, and focus outlines are drawn inside the tile with a negative offset (2px on small tiles, 3px on large ones, in the tile's own current color; saffron on cobalt walls).

The eight-point star (octagram) is the one ornament: a small inline mark for the brand, timeline nodes, status lines and the hero role. Timeline and list bullets are 8px diamonds (a square turned 45 degrees). Pattern art is a 80px star-and-cross tessellation (`field-cobalt`, `field-deep`, `field-plaster`) as full-bleed backgrounds, and a 32x16px star-and-diamond frieze (`frieze-saffron` under the header, `frieze-turquoise` above the footer), each 16px tall.

Portraits and screenshots are cropped square-edged inside a tile's clip; no rounded image corners.

## Components

### Buttons

- **Shape:** chamfered small tile (8px cut), 12px 24px padding, 14px semibold text, icon at 16px before the label.
- **Primary:** cobalt fill with plaster-glaze text on plaster; on a cobalt wall the accent inverts to saffron with ink text. Hover moves to Cobalt Strong (on plaster) or Bright Saffron (on cobalt).
- **Secondary:** solid elevated plaster wash with ink text (on cobalt, the elevated wall tone), lifting to surface on hover. No drawn border.
- **Ghost:** ink text with a 2px underline at 6px offset, hover fills the elevated wash.
- **Focus:** a 2px inside outline in current color, offset -4px.

### Chips

- **Style:** technology tag; elevated plaster wash, muted ink, 12px semibold text, 2px corner radius, 1px grout hairline.
- **State:** static, non-interactive. Filtering uses the filter tiles instead.

### Filter tiles

- **Style:** the interactive twin of a chip, cut as a small tile. At rest: elevated wash with muted ink text; hover deepens to grout. Selected: cobalt fill with plaster-glaze text (`aria-pressed`). A "Clear (n)" text button in cobalt appears once anything is selected.

### Project Tiles

- **Shape:** full 14px chamfer, 24px padding, glaze-filled, no border or shadow.
- **Glaze:** assigned by position (cobalt, turquoise, saffron, deep) when the project has public code or a demo; bare bisque otherwise (see the Glaze Follows Truth Rule). Ink or plaster-glaze text follows the pairing.
- **Content:** display title, role line, four-line result, up to five technology pills outlined in the tile's own ink, then Code / Demo links underlined at 2px and a "Case study" arrow. The whole tile is a stretched link; the Code and Demo links remain individually clickable.
- **Hover:** the screenshot scales 1.03 over 500ms; the arrow moves 4px.

### Work Wall Tile (signature)

Home Work tiles turn to a second face on hover or focus (hover-capable devices only). The front is the glazed face: title, category, three-line description, and a star-marked status line. The back is a deep cobalt spec sheet ruled with plaster-24% dividers: Role, Stack, Numbers (tabular), and a saffron "Read the case study" line. The turn is a flat scaleX pair, not a 3D flip: the front narrows to an edge in 0.2s, then the back widens from it over 0.5s with an exponential ease-out. A saffron 3px inside outline marks keyboard focus.

### Availability Tile

Saffron chamfered tile with an ink diamond and the availability label, and its larger twin on the hero (display statement plus detail line). It is the warmest object on the wall and states the ask truthfully.

### Stack Tiles

- **Style:** every technology is a small tile button on the cobalt wall, grouped by a label heading. At rest: cobalt wall surface (#1B47A3) with plaster-glaze text. Pointing at or focusing one glazes it saffron and lifts its defensible neighbours to plaster-glaze while the rest dim to 40% opacity. A reserved line beneath the wall names the connections so the layout never shifts under the pointer.

### Navigation

- **Style:** sticky deep cobalt header with the star mark and name in display 700 (1.125rem), 14px semibold links in muted mist, hover and current page in saffron with a 2px underline at 10px offset, a secondary CV button, and the saffron star frieze below. Mobile shows a menu button that opens a full-width drawer of 1.5rem display links on the same deep ground. A skip link turns into a saffron tile on focus. The footer mirrors it in deep cobalt with the turquoise frieze above, three columns, and a muted mist copyright.

### Timeline

A vertical grout track (3px) of stars: each node is a border-strong star that turns cobalt when reached, and the segment between nodes fills cobalt as the reader scrolls. Bullets are turquoise diamonds; skill chips sit beneath. Reduced motion shows the finished timeline.

### Motion

- **Settle:** hero tiles and Reveal are pressed into place with a Framer Motion spring (hero: stiffness 210, damping 13, from y -26 and -0.8deg with an 80ms stagger; Reveal: stiffness 220, damping 20, rise 22px, in view once at -80px margin, opacity from 0). The hero animates transform only, so text is painted before hydration.
- **CSS:** exponential ease-out `cubic-bezier(0.16, 1, 0.3, 1)` for state changes (200ms color, 300ms arrow travel, 500ms image scale and tile back). The page view transition uses the same curve over 0.3s.
- **No 3D:** the tile turn is flat scaleX by design, since a CSS 3D flip broke rendering. No perspective, no backface-visibility, no WebGL.
- **Reduced motion:** durations collapse to near zero; Reveal falls back to a 0.2s fade; MotionConfig skips the hero transform.

## Do's and Don'ts

### Do:

- **Do** cut every tile with the chamfer (14px for content tiles, 8px for buttons, filters, badges) and leave 12px to 14px of grout between neighbors.
- **Do** put the reading on lime-wash plaster (#EFF1EA) and the wall on cobalt (#163E93); switch grounds by re-declaring tokens with `zone-cobalt` or `zone-plaster`.
- **Do** pair text with its glaze: ink on turquoise, saffron, bisque and plaster glaze; plaster-glaze on cobalt and deep.
- **Do** use text-safe turquoise (#0B6E67) whenever turquoise is read as text on plaster.
- **Do** let a glaze reflect a real link: color for public code or demo, bare bisque for none.
- **Do** draw focus as an inside outline in the tile's current color (saffron on cobalt walls).
- **Do** keep h1-h3 in Bricolage Grotesque 800 and let the heading stand without anything above it.
- **Do** use tabular numerals for dates, metrics and spec rows.

### Don't:

- **Don't** add box shadows, gradients, blur, glow or backdrop effects; depth is color and grout.
- **Don't** put a kicker, eyebrow, index number or category tag above a heading.
- **Don't** use a monospace face or terminal styling; `font-mono` resolves to the body face.
- **Don't** use the dark-mode, neon, grid-glow or 3D-scene developer-portfolio look; no WebGL, no custom cursor, no constellation.
- **Don't** draw a border on a chamfered tile; the clip cuts it at the corners. Use a solid glaze or an inside outline.
- **Don't** set turquoise (#12A79D) as text on plaster, or saffron as text on plaster; both fail as text and are fills only.
- **Don't** glaze a project that has no public link, or leave a linked project bisque.
- **Don't** replace the flat scaleX tile turn with a 3D flip.

## Known Limitations

- Every tile is the same chamfer silhouette (one octagon cut, two sizes). There is no second tile shape, so long walls read as uniform.
- `Reveal` is one entrance (rise with spring settle) applied to every section; sections do not have their own entrances.
- Small technology tags (chips, project-tile pills) use a 2px corner radius rather than the chamfer, so they are not cut tiles like the filter tiles beside them.
