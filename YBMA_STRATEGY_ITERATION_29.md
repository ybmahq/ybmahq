# YBMA — Strategy Iteration 29

**Website content and positioning pass**
Session 29 · 14 September 2026 · `site/` (Session 28 built the first implementation)

> Founder instruction: the site is structurally sound but reads like an explanation of internal
> strategy, is Nigeria-centric, and narrows YBMA Technology to inventory. Fix the content; do not
> touch the identity. **Complied with: no change to logo, U3, colour, Söhne, visual language,
> component system or layout system.**

## What changed
- **Public voice, not internal strategy.** Removed every explanation of structure (company vs
  division vs subsidiary), every "one business today" qualification, the future-sector list and its
  "none of these exist" caveat, the internal validation and pricing language, and every "what we
  are not" sentence. The footer no longer explains the legal structure.
- **Global positioning.** Origin stated once, on `/company/`: *Founded in Nigeria. Built to a
  standard that travels.* "Built for Nigerian conditions" removed everywhere; the underlying idea
  is now the value *Built for how things actually run*. The footer states the country; nothing else
  frames the company by geography.
- **YBMA Technology broadened.** `/technology/` rebuilt around what we build (five capability
  areas at their real breadth) · what we solve (four operational problems) · how we work (four
  principles of approach, not contractual commitments) · what that can look like (six representative
  situations; a retailer's stock view is one of them, fourth in the list) · who this is for. The
  sector ranking and the four commitments are off the site pending founder decisions on the offer.
- **Hero line** kept as editorial copy, rewritten as a sentence: *We build businesses, and we stay
  to run them.* Once, never under the logo.
- **Photography.** Three licensed stock photographs (Pexels License) replace the empty slots:
  technicians at a machine (home hero), a print-shop operator with a tablet (home, Technology), a
  pharmacist using her phone at work (Technology hero). Credits in `site/src/photos/SOURCES.md`;
  swappable by file for YBMA's own documentary photography.
- **Contact** simplified; the unconfirmed address is marked as a development placeholder until
  `confirmed: true`; the public "before launch" paragraph is gone.
- **Em dashes: 0** in generated pages; the build now counts them.

## Factuality
No clients, revenue, statistics, partnerships, products, subsidiaries, future businesses,
locations, awards or testimonials were invented. The five values and the capability categories
are the recorded ones, written at their real breadth.

## QA
Desktop, tablet and mobile checked; no horizontal overflow; console clean on all routes; every
internal link and asset resolves; one h1 per page; every image has alt text; keyboard order skip
link → logo → menu with visible focus rings; labels at grey-700 (AA) per the Session 28 note.

## Honest critique
- The company page carries the one origin section; it is confident but short, and a reader who
  wants to know "who are these people" will not find names. That is by decision, not omission.
- With commitments and sectors removed, `/technology/` sells an approach rather than an offer.
  That is correct for now and thin for later; the offer section returns when the founders define it.
- The hero line still risks being quoted as a slogan by whoever builds the next deck.
