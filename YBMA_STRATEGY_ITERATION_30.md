# YBMA — Strategy Iteration 30

**Website: geography, imagery and contact pass**
Session 30 · 14 September 2026 · `site/` · identity untouched

> Founder instruction: remove Nigeria from public positioning without replacing it with Africa;
> replace the photography with believable, naturally diverse people doing real work; confirm the
> public email and domain; keep Technology broad; no em dashes; no AI-sounding copy. Content and
> imagery only. **Complied with.**

## What changed
- **Geography removed from public copy, metadata, alt text and the footer.** The `/company/` origin
  section is replaced by *The standard* (build it properly, hand it over cleanly, keep the number
  honest). The footer is the lockup, navigation, the email and the copyright line. No Africa
  substitute anywhere.
- **Photography replaced** (all Pexels License, credits in `site/src/photos/SOURCES.md`): home hero,
  a technician in safety glasses at a machine (Mikhail Nilov, 9242287) · home Technology, a manager
  with a badge working on a handheld device outside a building (Roberto Hund, 5356232) · Technology
  hero, a worker at a computer station on a factory floor (EqualStock IN, 31321050). Three
  complementary contexts; Black subjects present without ethnicity as the subject; nobody posed to
  camera in a boardroom; no motifs; natural colour.
- **Contact confirmed:** `hello@ybmahq.com` everywhere a public address appears; the development
  placeholder note no longer renders. **Domain** `ybmahq.com` used for canonical and Open Graph URLs.
- **Voice:** contractions where natural; "Technology is one of the ways we build and operate"
  replaces the last "seen today" phrasing.
- A per-slot image position option (content, not layout) so a crop can keep the part of a
  photograph that carries its meaning.

## QA
Build 4 pages · em dashes 0 · geographic references in generated pages 0 · email
hello@ybmahq.com on every page · canonical and og:url set · desktop, tablet, mobile: no overflow ·
console clean · all internal links and assets resolve · one h1 per page, hierarchy in order · every
image has alt · keyboard: skip link → logo → menu with visible focus · banned-word scan clean (the
only "transform" hits are SVG attributes).

## Remaining founder decisions
None new. Still open from Session 29: whether and when YBMA Technology's commercial commitments
return to the site once the offer is defined; phone, address, social and RC number if wanted public.
