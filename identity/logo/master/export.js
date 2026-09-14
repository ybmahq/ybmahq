#!/usr/bin/env node
/* YBMA master artwork export · Session 27 · 14 September 2026
   Regenerates the entire logo package from the locked geometry (ybma-logo.js).
     node identity/logo/master/export.js            → SVG + PDF for every asset, PNG via headless Chrome
   Nothing in the package is drawn by hand. If a file in logo/ is wrong, fix the geometry or this
   script and re-export; never edit an export.
   Naming: ybma-<asset>-<colour>[-<size>].<ext>
     asset  wordmark · symbol · lockup-horizontal · lockup-stacked
     colour ink · indigo · white  (white files live in logo/reversed/)
     size   PNG only: h<px> (height) for wordmark and lockups · <px> (side) for the symbol
*/
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
require('./ybma-logo.js');
const ROOT = path.resolve(__dirname, '..');
const COLOURS = { ink: '#151412', indigo: '#1F2C6B', white: '#FFFFFF' };
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const f = n => (Math.round(n * 1000) / 1000).toString();

// ---------- assets (inner SVG + bounds), from the locked geometry ----------
const W = YBMA.wordmark();
const ASSETS = {
  'wordmark': col => ({ inner: YBMA.wordmarkSVG({ fill: col }), width: W.width, height: 100, dir: 'wordmark' }),
  'symbol': col => ({ inner: YBMA.symbolSVG({ fill: col }), width: 120, height: 120, dir: 'symbol' }),
  'lockup-horizontal': col => Object.assign(YBMA.lockupHorizontal({ fill: col }), { dir: 'lockups' }),
  'lockup-stacked': col => Object.assign(YBMA.lockupStacked({ fill: col }), { dir: 'lockups' }),
};
const PNG_SIZES = { wordmark: [64, 256, 1024], symbol: [64, 256, 1024], 'lockup-horizontal': [64, 256, 1024], 'lockup-stacked': [128, 512, 1024] };

// ---------- SVG ----------
function svgFile(a, name, colour) {
  const hdr = `<!-- YBMA ${name} · ${colour} · master export · generated from identity/logo/master/ybma-logo.js · do not edit -->\n`;
  return hdr + `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${f(a.width)} ${f(a.height)}" width="${f(a.width)}" height="${f(a.height)}">${a.inner}</svg>\n`;
}

// ---------- PDF (vector; arcs converted to cubic Béziers) ----------
function arcToBeziers(x1, y1, rx, ry, phi, fa, fs_, x2, y2) {
  // SVG implementation notes F.6.5, circular case (rx = ry), phi = 0
  const r = rx; const dx = (x1 - x2) / 2, dy = (y1 - y2) / 2;
  let rr = r; const lam = (dx * dx + dy * dy) / (rr * rr); if (lam > 1) rr *= Math.sqrt(lam);
  let sq = Math.sqrt(Math.max(0, (rr * rr * rr * rr - rr * rr * dy * dy - rr * rr * dx * dx) / (rr * rr * dy * dy + rr * rr * dx * dx)));
  if (fa === fs_) sq = -sq;
  const cxp = sq * (rr * dy / rr), cyp = sq * (-(rr * dx) / rr);
  const cx = cxp + (x1 + x2) / 2, cy = cyp + (y1 + y2) / 2;
  const ang = (ux, uy, vx, vy) => { const d = ux * vx + uy * vy, l = Math.hypot(ux, uy) * Math.hypot(vx, vy); let a = Math.acos(Math.max(-1, Math.min(1, d / l))); if (ux * vy - uy * vx < 0) a = -a; return a; };
  const t1 = ang(1, 0, (x1 - cxp - (x1 + x2) / 2 + cxp) / rr, (y1 - cy) / rr);
  const start = Math.atan2(y1 - cy, x1 - cx);
  let dth = ang((x1 - cx) / rr, (y1 - cy) / rr, (x2 - cx) / rr, (y2 - cy) / rr);
  if (!fs_ && dth > 0) dth -= 2 * Math.PI; if (fs_ && dth < 0) dth += 2 * Math.PI;
  const segs = Math.max(1, Math.ceil(Math.abs(dth) / (Math.PI / 2))), d = dth / segs, k = 4 / 3 * Math.tan(d / 4);
  const out = []; let a = start;
  for (let i = 0; i < segs; i++) {
    const a2 = a + d;
    const p1 = [cx + rr * Math.cos(a), cy + rr * Math.sin(a)], p2 = [cx + rr * Math.cos(a2), cy + rr * Math.sin(a2)];
    const c1 = [p1[0] - k * rr * Math.sin(a), p1[1] + k * rr * Math.cos(a)], c2 = [p2[0] + k * rr * Math.sin(a2), p2[1] - k * rr * Math.cos(a2)];
    out.push([c1, c2, p2]); a = a2;
  }
  void t1; return out;
}
function pathToPdf(d) {
  // our generator emits absolute M/H/V/L/A/Z only
  const toks = d.match(/[MHVLAZ]|-?\d*\.?\d+(?:e-?\d+)?/g); let i = 0, x = 0, y = 0, sx = 0, sy = 0, out = '';
  const num = () => parseFloat(toks[i++]);
  while (i < toks.length) {
    const c = toks[i++];
    if (c === 'M') { x = num(); y = num(); sx = x; sy = y; out += `${f(x)} ${f(y)} m\n`; }
    else if (c === 'L') { x = num(); y = num(); out += `${f(x)} ${f(y)} l\n`; }
    else if (c === 'H') { x = num(); out += `${f(x)} ${f(y)} l\n`; }
    else if (c === 'V') { y = num(); out += `${f(x)} ${f(y)} l\n`; }
    else if (c === 'A') { const rx = num(), ry = num(), phi = num(), fa = num(), fs_ = num(), x2 = num(), y2 = num(); for (const [c1, c2, p] of arcToBeziers(x, y, rx, ry, phi, fa, fs_, x2, y2)) out += `${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p[0])} ${f(p[1])} c\n`; x = x2; y = y2; }
    else if (c === 'Z') { out += 'h\n'; x = sx; y = sy; }
  }
  return out;
}
function pdfFile(a, colour) {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(COLOURS[colour].slice(i, i + 2), 16) / 255);
  // walk the inner SVG: <g transform="..."> and <path d="...">
  let content = `${f(r)} ${f(g)} ${f(b)} rg\n1 0 0 -1 0 ${f(a.height)} cm\n`;
  const cmOf = t => { let cm = ''; const tr = /translate\(([-\d.]+),?\s*([-\d.]*)\)/.exec(t || ''), sc = /scale\(([-\d.]+)\)/.exec(t || '');
    if (tr) cm += `1 0 0 1 ${f(+tr[1])} ${f(+(tr[2] || 0))} cm\n`; if (sc) cm += `${f(+sc[1])} 0 0 ${f(+sc[1])} 0 0 cm\n`; return cm; };
  const re = /<g transform="([^"]*)">|<\/g>|<path([^>]*)\/>/g; let m;
  while ((m = re.exec(a.inner))) {
    if (m[0].startsWith('<g transform')) content += 'q\n' + cmOf(m[1]);
    else if (m[0] === '</g>') content += 'Q\n';
    else { const attrs = m[2]; const d = /d="([^"]*)"/.exec(attrs)[1]; const t = /transform="([^"]*)"/.exec(attrs);
      content += 'q\n' + cmOf(t && t[1]) + pathToPdf(d) + 'f*\nQ\n'; }
  }
  const objs = [];
  objs.push('<< /Type /Catalog /Pages 2 0 R >>');
  objs.push('<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
  objs.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${f(a.width)} ${f(a.height)}] /Contents 4 0 R /Resources << >> >>`);
  objs.push(`<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}endstream`);
  objs.push('<< /Title (YBMA logo master) /Producer (identity/logo/master/export.js) >>');
  let pdf = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n'; const offs = [];
  objs.forEach((o, i) => { offs.push(Buffer.byteLength(pdf, 'binary')); pdf += `${i + 1} 0 obj\n${o}\nendobj\n`; });
  const xref = Buffer.byteLength(pdf, 'binary');
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` + offs.map(o => String(o).padStart(10, '0') + ' 00000 n \n').join('') + `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R /Info 5 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return Buffer.from(pdf, 'binary');
}

// ---------- PNG via headless Chrome ----------
function pngFile(svg, w, h, out) {
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;background:transparent;overflow:hidden}svg{display:block}</style></head><body>${svg.replace(/width="[^"]*" height="[^"]*"/, `width="${w}" height="${h}"`)}</body></html>`;
  const tmp = path.join(require('os').tmpdir(), 'ybma-export.html'); fs.writeFileSync(tmp, html);
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--default-background-color=00000000', `--window-size=${w},${h}`, `--screenshot=${out}`, `file://${tmp}`], { stdio: 'ignore' });
}

// ---------- run ----------
const manifest = [];
for (const [name, make] of Object.entries(ASSETS)) for (const colour of Object.keys(COLOURS)) {
  const a = make(COLOURS[colour]); const dir = path.join(ROOT, colour === 'white' ? 'reversed' : a.dir); fs.mkdirSync(dir, { recursive: true });
  const base = `ybma-${name}-${colour}`;
  const svg = svgFile(a, name, colour); fs.writeFileSync(path.join(dir, base + '.svg'), svg); manifest.push(`${path.relative(ROOT, dir)}/${base}.svg`);
  fs.writeFileSync(path.join(dir, base + '.pdf'), pdfFile(a, colour)); manifest.push(`${path.relative(ROOT, dir)}/${base}.pdf`);
  for (const s of PNG_SIZES[name]) {
    const bySide = name === 'symbol'; const h = bySide ? s : s, w = Math.round(h * a.width / a.height);
    const fn = `${base}-${bySide ? s : 'h' + s}.png`; pngFile(svg, w, h, path.join(dir, fn)); manifest.push(`${path.relative(ROOT, dir)}/${fn}`);
  }
}
fs.writeFileSync(path.join(ROOT, 'MANIFEST.txt'), `YBMA logo package · generated ${new Date().toISOString().slice(0, 10)} by identity/logo/master/export.js\n` + manifest.join('\n') + '\n');
console.log(manifest.length, 'files');
