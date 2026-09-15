# YBMA — Strategy Iteration 32

**Website: deployment readiness, easter eggs, Technology photograph. Website phase closed.**
Session 32 · 15 September 2026 · `site/` · identity untouched

> Founder instructions across the session: explain how the site runs (it is not React); prepare it
> for Vercel; add easter eggs (six, then four more); replace the Technology hero photograph; give a
> closing summary of the website phase. **Complied with.**

## What changed
- **Build output moved to `site/dist/`** (git-ignored, rebuilt on every deploy). `vercel.json` at the
  repository root: build `node site/build.js`, output `site/dist`, no install step, clean URLs with
  trailing slashes, security headers, immutable cache for `/assets/`.
- **404 page** (`/404.html`), served automatically by Vercel: the wordmark arrives with its M missing,
  lying on its side below; click it and it quarter-turns back into place ("Found it. The page is
  still gone."). `site/serve.js` added: a dependency-free local preview that serves `dist/` the way
  Vercel does, including the 404 page, because `python3 -m http.server` returns its own.
- **Ten easter eggs**, all in `site/src/site.js` and the tail of `site/src/site.css`, none adding copy
  to a page, none touching the identity, all obeying the motion rule (a cut or a quarter-turn) and
  `prefers-reduced-motion`: Konami code (symbol quarter-turn) · type `ybma` (the four cuts on every
  wordmark) · five clicks on the symbol ("Two stones, one joint.") · `.` (the layout grid overlay) ·
  the console (the mark and a note to people who build things) · the 404 page · type `turn` (the
  page quarter-turns) · type `drop` (the headline lets go of its letters) · type `ink` (night
  ground: chalk and ink swap) · type `u3` (the pointer becomes the symbol). Documented in
  `site/README.md` with testing notes.
- **Technology hero photograph replaced:** a professional thinking through a problem at his laptop
  in a modern office (Isaiah Galadima, Pexels 33176070, Pexels License). Crop positioned at 68%
  so the subject sits in the 4:5 slot. Previous image (The Oluseyi, 18286965) retired; record in
  `SOURCES.md`.
- **Deployment path recorded** for the founder's existing Vercel project (which currently serves an
  unrelated React repo): Settings → Git → disconnect → connect `ybmahq/YBMA-Branding` → clear any
  lingering framework overrides → redeploy. The domain stays on the project; no DNS change.

## QA
Build 7 pages · em dashes 0 · all ten eggs verified in the browser (Konami, `ybma`, five clicks on
the home page, `.`, console, 404 file, `turn`, `drop`, `ink`, `u3`) · console clean · Technology
hero checked at 1280 wide.

## Website phase: closed
Sessions 28 to 32. What exists: a static site on the locked identity (7 routes), public copy with
no internal strategy, no geography, no invented facts, no em dashes; three licensed photographs;
privacy and terms pages with counsel points flagged; Vercel configuration; ten easter eggs.
Nothing is committed yet; `git add -A && git commit && git push` then reconnect the Vercel project.

## Remaining founder decisions
Unchanged: counsel review of the legal pages before launch; phone, address, social and RC number
only if wanted public; whether Technology's commercial commitments return once the offer is
defined. New, minor: the Technology photograph shows a branded cap (Jordan); acceptable as
temporary stock, one more reason to commission documentary photography.
