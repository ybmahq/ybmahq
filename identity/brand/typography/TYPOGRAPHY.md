# YBMA typography · CONFIRMED — SÖHNE (Session 27)

**The design decision: YBMA uses Söhne.** Klim Type Foundry. One family, no second display face,
no substitute inside the brand system.

## Cuts and roles

| Role | Cut | Size · tracking · leading | Rule |
|---|---|---|---|
| Display | **Söhne Halbfett** | 44–96 · −3% · 0.98 | Sentence case. One idea. Never all caps |
| Heading | **Söhne Halbfett** | 24–40 · −2% · 1.1 | Left-aligned, balanced wrap |
| Label | **Söhne Kräftig** | 11–13 · +14% · caps | Eyebrows, section marks, endorsement, descriptors. Ink or grey 500 — never indigo |
| Body | **Söhne Buch** | 16–18 · 0 · 1.5 | ≤ 68 characters per line. Ink on chalk |
| Data | **Söhne Kräftig** | any · tabular lining figures | The number that matters, large; unit in the label style. The identity's main emphasis device |
| Mono | **Söhne Mono Buch** | 13 · 1.5 | Product UI, code, identifiers. Never in marketing |
| Cover word | **Söhne Breit Kräftig** | one word, huge | Covers and fascias only. Never body, never headings |

## Rules
- Emphasis by weight and scale, never by colour. A word that matters is Halbfett or larger; it is not indigo.
- Labels are the only caps in the system.
- Weight for emphasis, not italics; italics are for titles of things.
- Never set YBMA in the typeface where it is the brand — use the wordmark. In running text, YBMA is a word like any other.
- Numbers: tabular lining figures everywhere numbers align; `font-variant-numeric: tabular-nums`.
- Hierarchy on every surface: label → headline → body → proof.

## Operational note — licensing (separate from the design decision)
Söhne is licensed from klim.co.nz per environment: **desktop** (by number of users), **web** (by
domain, in pageview tiers), **app** (per app). Working assumption: one desktop seat per founder and
per designer producing brand material; a web licence covering ybma.ng and division subdomains; an
app licence when YBMA Technology ships a product. Files required: Söhne Buch, Kräftig, Halbfett;
Söhne Mono Buch; Söhne Breit Kräftig. Outgoing documents leave as PDF so the fonts never need to
travel. Until the licence is installed, Helvetica Neue stands in as an operational fallback only —
nothing set in it is final, and it is never to be described as the brand typeface.

Web loading: self-host the licensed WOFF2 files; `font-display: swap`; declare the fallback stack
`"Söhne", "Soehne", "Helvetica Neue", Helvetica, Arial, sans-serif` exactly as in `tokens.css`.
