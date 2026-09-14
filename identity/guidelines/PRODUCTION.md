# YBMA physical-production specification · Session 27 (14 September 2026)

The numbers below are derived from the locked geometry (cap 100 · stroke 16 · tracking 12 · U3
joint 11 on a 120 side) and standard process tolerances. **They are the brief for the physical proof
stage, not a substitute for it.** Where a mark fails at a size, the answer is a larger size or the
other mark — never a thinner joint or a wider gap.

## 1 · Colour

| | Specification |
|---|---|
| **YBMA Indigo** | Screen #1F2C6B · RGB 31 44 107. Four-colour reference C71 M59 Y0 K58 (conversion — proof it). **Pantone direction: 2758 C on coated stock — PROVISIONAL until a physical swatch is signed off.** On uncoated stock expect the indigo to dull and darken: proof 2758 U and 2748 U side by side and choose on the swatch, not the screen. |
| **Ink** | Single-colour jobs: black (K100 / Pantone Black C). Four-colour: rich black C60 M50 Y40 K100 so large ink fields are not grey. Never register black under small type. |
| **Chalk** | Paper. Choose an uncoated warm-white stock close to #F5F4F0 rather than printing a tint; if a tint is unavoidable, C0 M0 Y2 K4. |
| **Two-colour standard** | Most YBMA print is **indigo + black** (Pantone 2758 + Black). Cheaper and more consistent than four-colour; specify it by default for stationery, folders and documents. |
| **Reversed** | White = the substrate. On indigo or ink fields the wordmark and symbol are knocked out; keep knockouts ≥ 0.35 mm (see minimums). No white ink unless the substrate is dark. |

## 2 · Minimum physical sizes, by process

Wordmark sizes are **cap height**; symbol sizes are **side**. "Tightest feature" is what fails first.

| Process | Wordmark min | Tightest feature | Symbol min | Tightest feature |
|---|---|---|---|---|
| Offset / digital print, positive | **6 mm** (guideline floor) | tracking gap 12% — would print open at 2.5 mm | **5 mm** (guideline floor) | joint 9.2% — would print open at 3.3 mm |
| Print, reversed (knockout) | **8 mm** | stroke 16% as a knockout ≥ 0.35 mm after spread | **6 mm** | joint as a knockout |
| **Rubber stamp** | **8 mm** | tracking gap: at 8 mm it is 0.96 mm, ≈ 0.55 mm after gain — open but tight. Below 6 mm the letters touch | **15 mm** | joint: at 15 mm it is 1.4 mm, ≈ 1.0 mm after gain. At 10 mm the joint is 0.9 mm and closes on a worn die — **do not stamp the symbol below 12 mm** |
| **Embroidery** (satin) | **15 mm** | tracking gap must stay ≥ 1 mm after pull compensation: 12 mm is the arithmetic minimum, 15 mm the safe one. Stroke 16% is a 2.4 mm satin column — ideal | **25 mm** | joint: 15.3 mm is the arithmetic minimum; at 25 mm the joint is 2.3 mm and survives fill pull. The top-left strip (15% of the side) needs a 1.5 mm fill column → also fine at 25 mm. **Below 20 mm the joint fills in — use the wordmark on small garments instead** |
| Cut vinyl / acrylic (fascia, door) | **20 mm** | stroke as a cut piece ≥ 3 mm | **25 mm** | the joint as a weed line ≥ 2 mm |
| Signage read distance | 150 mm cap for a fascia read at 20 m; 40 mm for a door plate at 3 m | | 200 mm as a door mark; 60 mm as a plate | |

**Result of the desk test:** no mark fails at its guideline minimum in print. **The symbol's joint is
the tightest feature in the identity** and sets the physical floors for stamp (15 mm) and embroidery
(25 mm). The wordmark is more forgiving than the symbol in every process. Nothing here calls for a
change to the geometry; the rule is *size or the other mark*.

## 3 · Process notes

- **Embroidery.** Satin stitch for the wordmark up to ~8 mm stroke (cap ≈ 50 mm); above that, fill.
  Symbol: fill stitch both stones with the stitch direction following the joint (top-left to bottom-
  right), so the pull runs along the gap rather than across it. Pull compensation 0.2 mm. Sample on
  the actual garment fabric — knit pulls more than twill. Thread: indigo on chalk, chalk on indigo,
  chalk on ink; match to the signed swatch, not the screen.
- **Rubber stamp.** Deep-etch photopolymer; ask for the negative to be made from the vector PDF, not a
  raster. Wordmark 8–12 mm cap; symbol 15–20 mm. Ink: black or indigo; never both on one impression.
- **Signage.** Flat-cut letters, no bevel, no return colour contrast (returns match the face). Indigo
  fascia panel with white cut wordmark, or ink panel with white symbol (the door). If illuminated,
  face-lit only — no halo, no backlit indigo (it shifts to violet). Vinyl: matte, never gloss.
- **Stationery.** Uncoated warm-white 120–135 gsm for letterhead; 350 gsm uncoated for cards, indigo
  back printed solid (allow for uncoated darkening); folders 300 gsm with indigo flood and a white
  wordmark.
- **What to bring to the proof.** Indigo swatches (2758 C, 2758 U, 2748 U) · the wordmark at 6, 8, 12,
  20 mm · the symbol at 5, 10, 15, 25 mm · one stamp each · one embroidered wordmark at 15 mm and
  symbol at 25 mm on the chosen fabric · a reversed wordmark at 8 mm on an indigo flood. Sign the
  swatch and record the Pantone in `identity/brand/colour/COLOUR.md`.

## 4 · Files for vendors

Send vendors **PDF masters** from `identity/logo/` (vector, one colour, no text to embed) — never a
PNG for print. Name the colour by Pantone or "black" in the order, and name the file in the order
(e.g. `ybma-lockup-horizontal-white.pdf`, knocked out of Pantone 2758 C).
