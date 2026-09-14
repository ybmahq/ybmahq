# YBMA — Brand Development.

Working repository for the YBMA LTD brand development project.

> **Start here: [`YBMA_BRAND_STATE.md`](YBMA_BRAND_STATE.md)**
> It is the single source of truth — current stage, confirmed decisions, rejected directions, open
> questions and the session log. **Read it before doing any branding work in a new session.**

---

## Status

| | |
|---|---|
| **Stage** | Stage 9 — identity locked · production-ready · next: website |
| **Strategy** | **Settled.** YBMA = The Operator |
| **Visual identity** | **LOCKED (Session 27).** Wordmark · U3 · Söhne · Indigo + Ink + Chalk all confirmed. **Brand guideline v1.0** and the master artwork package in `identity/` |
| **Confirmed brand-content decisions** | **None.** Nothing is approved |

**Next action:** **the YBMA parent website** — an implementation of `identity/brand/` (tokens,
components, web foundation), not an extension of the identity. In parallel, the operational tasks:
Söhne licences · physical proof and Pantone sign-off · templates · photo shoot · verbal identity.
**Identity exploration is closed.** Guideline v1.0: `identity/guidelines/YBMA_BRAND_GUIDELINE_v1.0.md`
(visual: https://claude.ai/code/artifact/382cf677-7758-42fb-a0e0-cbe56b8d75ea).

**Confirmed (14 Sep 2026):** the wordmark · U3 · Söhne · Indigo #1F2C6B + Ink #151412 + Chalk #F5F4F0,
no accent · logo family of five · clear space and minimum sizes · **the avatar is not a letter** ·
wordmark alone by default · emphasis by scale, field, curve, weight and photography.

**Out:** *One V* (Session 19) — withdrawn as clever rather than distinctive. *Unclosed* (Session 18)
— disqualified on production; simulated ink gain closes its gaps.

**Process rule, binding from Session 20:**
`IDEA → FORM → TASTE → DISTINCTIVENESS → SHORTLIST → PRODUCTION TEST`.
A mediocre logo that survives embroidery is still a mediocre logo.

---

## Structure

### Source of truth
- **`YBMA_BRAND_STATE.md`** — the state file. Everything else is supporting material.

### Identity — production files (Session 27) · start at `identity/README.md`
- **`identity/logo/master/ybma-logo.js`** — the locked geometry, source of truth; `export.js` regenerates the package
- **`identity/logo/{wordmark,symbol,lockups,reversed}/`** — 60 exports: SVG · PDF · PNG × ink · indigo · white
- **`identity/brand/`** — `colour/tokens.css|json`, `typography/`, `icons/`, `web/ybma.css` + `components.html` + `WEB_FOUNDATION.md`
- **`identity/guidelines/`** — guideline v1.0 (MD + HTML), `PRODUCTION.md`, `stress-test.html` · `identity/templates/` — the set to build
- `identity/archive/` — superseded construction files (Sessions 23–24)

### Customer evidence
- `YBMA_SME_INTERVIEWS_ROUND_01.md` — 5 respondents, Kaduna
- `YBMA_SME_INTERVIEWS_ROUND_02.md` — the same 5, re-interviewed with a behavioural guide

### Field instruments
- `YBMA_ROUND2_FIELD_GUIDE.md` — interview guide, printable
- `YBMA_COMMERCIAL_VALIDATION_KIT.md` — screening sheet, sales script, proposal template, score sheet

### Strategy — discovery and positioning
| File | Session |
|---|---|
| `YBMA_STRATEGIC_FOUNDATION.md` | 01 — discovery and first strategic foundation |
| `YBMA_STRATEGY_ITERATION_02.md` | 02 — positioning refinement |
| `YBMA_STRATEGY_ITERATION_03.md` | 03 — adversarial stress test |
| `YBMA_STRATEGY_ITERATION_04.md` | 04 — customer evidence analysis, round 1 |
| `YBMA_STRATEGY_ITERATION_05.md` | 05 — round 2 research design |
| `YBMA_STRATEGY_ITERATION_06.md` | 06 — synthesis of both rounds |
| `YBMA_STRATEGY_ITERATION_07.md` | 07 — commercial validation design |
| `YBMA_STRATEGY_ITERATION_08.md` | 08 — commercial decision and brand strategy gate |

### Identity — creative development
| File | Session |
|---|---|
| `YBMA_STRATEGY_ITERATION_09.md` | 09 — creative territories |
| `YBMA_STRATEGY_ITERATION_10.md` | 10 — three logo routes |
| `YBMA_STRATEGY_ITERATION_11.md` | 11 — identity refinement |
| `YBMA_STRATEGY_ITERATION_12.md` | 12 — Y–M geometry review |
| `YBMA_STRATEGY_ITERATION_13.md` | 13 — first complete reset |
| `YBMA_STRATEGY_ITERATION_14.md` | 14 — displacement mechanisms |
| `YBMA_STRATEGY_ITERATION_15.md` | 15 — T4 refinement |
| `YBMA_STRATEGY_ITERATION_16.md` | 16 — the block, tweaked |
| `YBMA_STRATEGY_ITERATION_17.md` | 17 — second complete reset, seven territories |
| `YBMA_STRATEGY_ITERATION_18.md` | 18 — Unclosed, developed |
| `YBMA_STRATEGY_ITERATION_19.md` | 19 — third complete reset · nine territories, ten candidates, mechanical testing introduced |
| `YBMA_STRATEGY_ITERATION_20.md` | 20 — expert reset · form first · seven directions, a drawn mark recommended |
| `YBMA_STRATEGY_ITERATION_21.md` | 21 — Cut refinement · avatar and tail-endpoint studies, motion test |
| `YBMA_STRATEGY_ITERATION_22.md` | 22 — symbol study · two stones, one joint · Y avatar retired |
| `YBMA_STRATEGY_ITERATION_23.md` | 23 — final refinement of Cut + U3 · lockup, motion, endorsement · recommended for lock |
| `YBMA_STRATEGY_ITERATION_24.md` | 24 — **Turned + U3 · wordmark replaced at founder decision · ready with two conditions** |
| `YBMA_STUDY_MIRROR.md` | side study — four letters from one arch · **branch A approved as the logo, Session 25** |
| `YBMA_STRATEGY_ITERATION_25.md` | 25 — logo approved · identity system · brand guideline v0.1 |
| `YBMA_STRATEGY_ITERATION_26.md` | 26 — refinement pass · Indigo + Ink + Chalk · Söhne · guideline v0.2 |
| `YBMA_STRATEGY_ITERATION_27.md` | 27 — **production readiness · identity locked · master artwork · guideline v1.0** |
| `identity/guidelines/YBMA_BRAND_GUIDELINE_v1.0.md` | **the brand guideline (v1.0)** — twenty sections, locked list, production files, next phase |

---

## Conventions

**Status tags are written inline** so they survive copy-paste into other tools:

`[CONFIRMED]` founder-agreed · `[PROPOSED]` awaiting verdict · `[HYPOTHESIS]` untested ·
`[INFERENCE]` reasoned guess · `[REJECTED]` ruled out · `[NEEDS VALIDATION]` requires evidence ·
`[DECISION NEEDED]` founders only

**Nothing is marked CONFIRMED without explicit founder agreement.**

---

## Working rules

Carried across sessions and recorded in the state file:

- Strategy before visuals. No visual work until the strategy is agreed.
- Every deliverable ships as a Markdown file in this repository.
- No further founder questionnaires, SME surveys or manufactured validation data.
- Generated visuals are exploration, **never production artwork**.
- A commercial win does not become the master brand.
- Marks are judged on form, not on strategic justification.
- Do not force a winner.
- Rejected directions stay rejected — the state file records why.
- **Form is judged before logic** *(Session 20, binding)*. `IDEA → FORM → TASTE → DISTINCTIVENESS →
  SHORTLIST → PRODUCTION TEST`. Production robustness is a constraint, not the creative objective.
- **Mechanical testing is kept — at the end** *(Session 19, repositioned Session 20)*. Build
  candidates as geometry on one grid, then apply identical size, reverse and ink-gain conditions.
  It disqualified Unclosed without an opinion being expressed; it cannot tell you whether a mark is
  any good.
- **The exclusion register is a set of lessons, not a prison** *(Session 20)*. It records what failed
  and why. It must not narrow the space until only what offends nothing survives.

---

## Confidentiality

This repository contains **real customer interview transcripts** including business details and
financial figures, along with commercial pricing and unpublished strategy. **Keep it private.**
