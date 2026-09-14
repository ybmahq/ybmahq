# YBMA web foundation · Session 27 (14 September 2026)

The identity layer the website consumes. **The website is an implementation of this; it invents no
visual language.** Files: `../colour/tokens.css` (tokens) · `ybma.css` (components) ·
`components.html` (living demo) · `../../logo/master/ybma-logo.js` (logo rendering) ·
`../../logo/**/*.svg` (static logo files).

## Tokens the site must use
- **Colour:** `--ybma-indigo` `--ybma-ink` `--ybma-chalk` (brand) · `--ybma-white` `--ybma-mist`
  `--ybma-grey-*` (supporting) · `--ybma-indigo-60` (focus/selected/hover only). Nothing else. No
  page may define a colour outside `tokens.css`.
- **Type:** `--ybma-display` `--ybma-heading` `--ybma-label` `--ybma-body` `--ybma-data` `--ybma-mono`;
  font stack `--ybma-font` (Söhne, self-hosted WOFF2; `font-display: swap`). Headlines sentence
  case; labels the only caps; tabular figures wherever numbers align.
- **Spacing:** `--ybma-s1…s10` (4 → 128 px, 8-unit baseline). Section padding s8/s9; component
  padding s5/s6; never arbitrary pixel values.
- **Grid:** 12 columns, 24 px gutter, 32 px margin, 1240 px max; 6 columns ≤ 900 px; 4 columns
  ≤ 560 px. `.y-wrap` + `.y-grid` + `.y-c-*`.
- **Shape:** `--ybma-radius-brand` (999px) on **one side only**; `--ybma-radius-ui` (4px) for product
  controls only; `--ybma-rule` 2 px.
- **Motion:** a cut (0 ms) or a quarter-turn (320 ms linear). No easing curves, no fades between
  states longer than 120 ms, no parallax, no scroll-triggered animation. `prefers-reduced-motion`
  respected.

## Layout rules
1. **One round thing per view.** Choose it deliberately — the hero photograph, a proof panel, the
   key bar. Everything else square-cornered.
2. **One field per view.** At most one inverted indigo or ink block per screen; the rest is chalk.
   Sections alternate chalk and indigo down the page, never two indigo sections adjacent.
3. **Hierarchy in order:** label → headline → body → proof, left-aligned, asymmetric. Text column
   ≤ 68ch. Headline max 16ch (display) / 24ch (heading).
4. **Indigo and ink never meet.** An indigo section is followed by chalk, never by ink.
5. **Photography is the colour.** Every hero has a photograph of people at work; type sits beside
   it or on a field, never on it. Crops: square, or one full-height quarter curve on one corner.

## Components (in `ybma.css`)
`.y-logo` · `.y-label` · `.y-display` · `.y-h` · `.y-body` · `.y-proof` · `.y-field` (`--ink`) ·
`.y-panel` + `.y-curve--top|right|bottom|left` · `.y-crop--tl|tr|br|bl` · `.y-cut` · `.y-stem` ·
`.y-rule` · `.y-btn` (`--ghost`) · `.y-link` · `.y-bars` (`.is-key`, `.is-second`) · `.y-division`
(`--inline`) · `.y-endorse` · `.y-nav` · `.y-status--*` (product only) · `.y-ui` (product only).

**Buttons:** ink fill / chalk text on light; chalk fill / ink text on dark; square; hover indigo. One
primary button per view. **Links:** underlined ink, 2 px, offset 4 px; hover indigo; focus ring
Indigo 60. **Cards/panels:** white on chalk with a 1 px grey-200 border, square unless they are the
view's one round thing. **Navigation:** the wordmark at 22 px, plain links, one ink button; no icons,
no mega-menus; mobile: a menu icon from the icon set and a full-screen chalk list.

## Responsive behaviour
- Display type scales with `clamp()` (44 → 96 px); headline measure holds by `max-width: 16ch`.
- The hero is a two-column grid ≥ 900 px (text 1.1fr / image 1fr) and stacks below, image first,
  keeping its one round corner.
- `.y-cut` stacks below 560 px (photo above the field).
- Fields keep 32 px padding on mobile; proof numbers scale 40 → 96 px.
- The wordmark never drops below 20 px; the symbol replaces it in the mobile bar only below 360 px.

## Logo usage on the web
- Header: wordmark, ink on chalk, 22 px. Footer: horizontal lockup at 28 px, or wordmark + descriptor.
- Favicon: symbol, ink on transparent (16/32/48) and white on indigo for the app icon (180/512).
- Social/OpenGraph: symbol on indigo, or a proof-style chalk card with the wordmark.
- Never the Y alone; never the wordmark set in Söhne; never the symbol as decoration.

## Accessibility
All text/ground pairs in `tokens.css` pass AA; brand pairs pass AAA (see `COLOUR.md`). Focus rings
2 px Indigo 60 with 2 px offset on every interactive element. Semantic status colours never carry
information alone — always with a label or icon.
