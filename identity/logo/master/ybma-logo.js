/* YBMA — approved logo, production geometry.  Session 25 · 14 September 2026.
   Source of truth: the approved artifact (mirror study, branch A, second pass):
   https://claude.ai/code/artifact/92298032-0841-475c-a5bb-30987259383e

   THE WORDMARK — "one arch, four letters"
   Cap 100 · stroke 16 · one radius: 21 on the stroke centreline (outer 29, inner 13) · tracking 12.
   Every curve is a true semicircle tangent to a straight; every terminal is square.
     Y  cup: sides 0→24, semicircle below, stem to the baseline           width 58
     B  stem + two equal bowls lying on it, waist at 50                     width 63
     M  two arches standing on legs                                          width 100
     A  one arch standing on legs, bar at 58–74                              width 58
   Total 315 × 100. The strokes in the artifact are outlined here exactly (arcs stay arcs).
   ONE production correction: the M and A crowns overshoot the cap by 1.2 units so the round
   tops read level with the flat tops of the Y and B. Nothing else is altered.

   THE SYMBOL — U3, "two stones, one joint" (Sessions 22–24, unchanged)
   120 square · joint enters the top edge at x=18 · descends at dx/dy 0.5625 · turns square at 86 ·
   joint 11 · lower-right corner sheared across the band on the same angle. */
(function (global) {
  const f = n => (Math.round(n * 1000) / 1000).toString();
  const S = 16, H = 8, R = 21, RO = 29, RI = 13, TR = 12, OVER = 1.2;

  // ---- letters (each in its own box, x from 0) ----
  const yJoin = 24 + Math.sqrt(RO * RO - H * H); // where the cup's outer arc meets the stem: 51.875
  const LETTERS = {
    Y: { w: 58, d: `M0,0H16V24A${RI},${RI} 0 0 0 42,24V0H58V24A${RO},${RO} 0 0 1 37,${f(yJoin)}V100H21V${f(yJoin)}A${RO},${RO} 0 0 1 0,24Z` },
    B: { w: 63, d: `M0,0H34A${RO},${RO} 0 0 1 54,50A${RO},${RO} 0 0 1 34,100H0Z` +
                   `M16,16H34A${RI},${RI} 0 0 1 34,42H16ZM16,58H34A${RI},${RI} 0 0 1 34,84H16Z` },
    M: { w: 100, d: (() => { const c = 29 - OVER, pk = c - 20; // crowns overshoot; the two outer arcs meet at x=50, y=c-20
          return `M0,100V${f(c)}A${RO},${RO} 0 0 1 50,${f(pk)}A${RO},${RO} 0 0 1 100,${f(c)}V100H84V${f(c)}A${RI},${RI} 0 0 0 58,${f(c)}V100H42V${f(c)}A${RI},${RI} 0 0 0 16,${f(c)}V100Z`; })() },
    A: { w: 58, d: (() => { const c = 29 - OVER;
          return `M0,100V${f(c)}A${RO},${RO} 0 0 1 58,${f(c)}V100H42V74H16V100ZM16,58V${f(c)}A${RI},${RI} 0 0 1 42,${f(c)}V58Z`; })() },
  };
  const ORDER = ['Y', 'B', 'M', 'A'];

  function wordmark() {
    let x = 0; const letters = [];
    for (const n of ORDER) { letters.push({ name: n, x, w: LETTERS[n].w, d: LETTERS[n].d }); x += LETTERS[n].w + TR; }
    return { letters, width: x - TR, height: 100, cap: 100, stroke: S, radius: R, tracking: TR };
  }
  function wordmarkSVG(o = {}) {
    const wm = wordmark(), fill = o.fill || '#000';
    let s = `<g fill="${fill}" fill-rule="evenodd"${o.cls ? ` class="${o.cls}"` : ''}>`;
    for (const L of wm.letters) s += `<path class="ltr ltr-${L.name}" transform="translate(${L.x},0)" d="${L.d}"/>`;
    return s + '</g>';
  }

  // ---- symbol ----
  const SYM = { S: 120, entry: 18, turn: 86, joint: 11, tan: 0.5625 };
  function symbol() {
    const p = SYM, t = p.tan, cos = 1 / Math.sqrt(1 + t * t), jh = p.joint / cos;
    const xA = y => p.entry + t * y, xB = y => p.entry + jh + t * y;
    const bandTop = p.turn + p.joint, bandH = p.S - bandTop, shearX = bandH * t;
    return {
      S: p.S, bandTop, bandH, shearX, joint: p.joint,
      upper: `M${f(xB(0))},0H${p.S}V${p.turn}H${f(xB(p.turn))}Z`,
      lower: `M0,0H${p.entry}L${f(xA(bandTop))},${bandTop}H${p.S}L${f(p.S - shearX)},${p.S}H0Z`,
    };
  }
  function symbolSVG(o = {}) {
    const s = symbol(), fill = o.fill || '#000';
    return `<g fill="${fill}"${o.cls ? ` class="${o.cls}"` : ''}><path class="upper" d="${s.upper}"/><path class="lower" d="${s.lower}"/></g>`;
  }

  // ---- lockups (all in wordmark units, cap 100) ----
  const GAP = 40; // symbol → wordmark, 0.4 cap
  function lockupHorizontal(o = {}) {
    const wm = wordmark(), sc = 100 / 120;
    const inner = `<g transform="scale(${f(sc)})">${symbolSVG(o)}</g><g transform="translate(${100 + GAP},0)">${wordmarkSVG(o)}</g>`;
    return { inner, width: 100 + GAP + wm.width, height: 100 };
  }
  function lockupStacked(o = {}) {
    const wm = wordmark(), size = 100, gy = 40, x = (wm.width - size) / 2;
    const inner = `<g transform="translate(${f(x)},0) scale(${f(size / 120)})">${symbolSVG(o)}</g><g transform="translate(0,${size + gy})">${wordmarkSVG(o)}</g>`;
    return { inner, width: wm.width, height: size + gy + 100 };
  }
  /* Division lockup: descriptor below the wordmark in the system typeface, caps, tracked.
     capT = descriptor cap height (22% of the wordmark cap) · gap 24 below the baseline · left-aligned to the Y. */
  function lockupDivision(name, o = {}) {
    const wm = wordmark(), capT = 22, gy = 24, fill = o.fill || '#000';
    const font = o.font || 'Archivo, "Helvetica Neue", Arial, sans-serif';
    const text = `<text x="0" y="${100 + gy + capT}" font-family='${font}' font-weight="500" font-size="${f(capT * 1.39)}" letter-spacing="${f(capT * 0.14)}" fill="${fill}">${name.toUpperCase()}</text>`;
    return { inner: wordmarkSVG(o) + text, width: wm.width, height: 100 + gy + capT };
  }
  /* Endorsement: U3 at 1.9× the text cap, text standing on the symbol's baseline. */
  function endorsement(o = {}) {
    const capT = o.capT || 20, size = capT * 1.9, gx = capT * 0.9, fill = o.fill || '#000';
    const font = o.font || 'Archivo, "Helvetica Neue", Arial, sans-serif';
    const text = `<text x="${f(size + gx)}" y="${f(size)}" font-family='${font}' font-weight="500" font-size="${f(capT * 1.39)}" letter-spacing="${f(capT * 0.16)}" fill="${fill}">A YBMA COMPANY</text>`;
    return { inner: `<g transform="scale(${f(size / 120)})">${symbolSVG(o)}</g>` + text, width: size + gx + capT * 0.72 * 1.16 * 14, height: size };
  }
  function svgWrap(part, o = {}) {
    const pad = o.pad == null ? 0 : o.pad;
    const vb = `${-pad} ${-pad} ${f(part.width + 2 * pad)} ${f(part.height + 2 * pad)}`;
    const w = o.w, h = o.h || (w ? w * (part.height + 2 * pad) / (part.width + 2 * pad) : undefined);
    const size = w ? ` width="${f(w)}" height="${f(h)}"` : (h ? ` height="${f(h)}" width="${f(h * (part.width + 2 * pad) / (part.height + 2 * pad))}"` : '');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}"${size}${o.attrs ? ' ' + o.attrs : ''}>${part.inner}</svg>`;
  }

  const CLEAR = { wordmark: 32, symbol: 24 }; // clear space: 2 strokes (wordmark) · one fifth of the side (symbol)
  const MIN = { wordmark: { px: 20, mm: 6 }, symbol: { px: 16, mm: 5 }, lockup: { px: 24, mm: 7 } }; // by height

  global.YBMA = { S, R, RO, RI, TR, OVER, LETTERS, wordmark, wordmarkSVG, symbol, symbolSVG, lockupHorizontal, lockupStacked, lockupDivision, endorsement, svgWrap, CLEAR, MIN, GAP, SYM };
})(typeof window !== 'undefined' ? window : globalThis);
