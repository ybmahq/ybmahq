# YBMA website — what the founders still need to supply

Revised in the content, positioning and imagery passes (Sessions 29 to 31, 14 and 15 September 2026). Nothing on the site is
invented. `node site/build.js` prints the placeholders and the em-dash count on every build.

## 1 · Placeholders — content that does not exist yet

| Item | Current state | Needed |
|---|---|---|
| **Email address** | **Confirmed:** `hello@ybmahq.com` (`src/content.js`, `confirmed: true`). Used in the footer and on the contact page. | Nothing. |
| **Domain** | **Confirmed:** `ybmahq.com`, used for canonical and Open Graph URLs. | Nothing. |
| **Phone number** | Omitted rather than invented. | A number, if YBMA wants one public. |
| **Office address** | Omitted. The site states no location. | An address, if YBMA wants one public. |
| **Social accounts** | Omitted. | Any accounts that actually exist. |
| **Company registration (RC) number** | Omitted from the footer. | The RC number, if required. |
| **Photography** | Three licensed stock photographs (Pexels License, free to use), re-selected in Session 31: technology in the flow of real work in modern African businesses. Credits in `src/photos/SOURCES.md`. Swappable by replacing the file. | YBMA's own documentary photography. |
| **OG / social share image** | Not generated; needs the live domain. | Confirm the domain, then generate (symbol on indigo, 1200 × 630). |
| **App icon** | Not generated; the favicon is the symbol SVG. | White-on-indigo PNGs at 180 and 512 when hosted. |

## 2 · Removed from the public site in this pass

These were on the previous version and are now internal documentation only. Nothing needs
confirming to keep them off; a founder decision is needed only to put any of them back.

- The four YBMA Technology commitments (day-one handover, the support window, no new data entry,
  "built for Nigerian conditions"). Public commercial commitments belong to the Technology offer
  when the founders define it.
- The sector list (retail, hospitality, distribution, logistics, clinics, pharmacies, schools).
- The name's origin (the four founders' initials).
- The corporate-structure explanation (company vs division vs subsidiary), the "one business today"
  qualifications, and the list of future sectors.
- Every "what we are not" and "what does not exist yet" sentence.
- (Session 30) The origin section on `/company/` ("Founded in Nigeria. Built to a standard that
  travels."), the country line in the footer and on the contact page, and every other geographic
  reference in copy, metadata and alt text. The company communicates through its work, standards
  and people; it does not announce its geography.

## 3 · Legal pages: for counsel before launch

`/privacy/` and `/terms/` are written conservatively for the site as it exists (static, no cookies,
no analytics, no forms). Nothing is claimed that is not established. Source comments marked
`review` flag what counsel should confirm: the applicable data-protection laws (including the NDPA
and, for overseas visitors, GDPR/UK GDPR), the hosting provider's log retention, a correspondence
retention period, international-transfer wording once providers are chosen, and the governing law
and courts (currently stated as the country of incorporation, unnamed).

## 4 · Decisions for the founders

- **The hero line.** `/` opens with *"We build businesses, and we stay to run them."* It is a page
  headline, not a tagline: once, in the hero, never under the logo, nowhere else. It is written as a
  sentence with a full stop so that it reads as editorial copy. If the founders want a public line,
  that is the verbal-identity phase; if they want this one gone, it is one line in `src/pages/home.js`.
- **Pricing and the entry offer.** Nothing about price appears on the site. A commercial decision.
- **Commercial commitments for YBMA Technology.** When the offer is defined, its terms can return to
  `/technology/` as a public commitment section.
