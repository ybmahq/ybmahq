#!/usr/bin/env node
/* YBMA parent website — build.
     node site/build.js            → writes the deployable site to site/dist/

   Renders six static pages and copies the identity assets the site consumes. The identity is
   never duplicated: colour, type, spacing, shape and logo geometry are read from identity/ and
   copied verbatim into site/assets/brand/. If a brand value looks wrong on the site, it is wrong
   in identity/ — fix it there and rebuild.

   Also reports every content placeholder, so nothing unresolved reaches launch unnoticed. */

const fs = require('fs');
const path = require('path');

const SITE = __dirname;
const ROOT = path.resolve(SITE, '..');
const OUT = path.join(SITE, 'dist');   // everything public is written here; nothing else is deployed
const IDENTITY = path.join(ROOT, 'identity');

// ── identity inputs ───────────────────────────────────────────────────────
require(path.join(IDENTITY, 'logo/master/ybma-logo.js'));           // defines global YBMA
const sprite = fs.readFileSync(path.join(IDENTITY, 'brand/icons/ybma-icons-sprite.svg'), 'utf8');
const { render, logo, icon } = require('./src/layout');
const content = require('./src/content');

const ctx = { YBMA: global.YBMA, sprite, logo, icon };

// ── assets ────────────────────────────────────────────────────────────────
const copies = [
  // Only what a page actually loads. Logos and icons are inlined at build time from the geometry
  // and the sprite, so their files are not shipped again here.
  ['brand/colour/tokens.css', 'assets/brand/tokens.css'],
  ['brand/web/ybma.css', 'assets/brand/ybma.css'],
  ['logo/symbol/ybma-symbol-ink.svg', 'assets/brand/logo/ybma-symbol-ink.svg'],   // favicon
];

function copyAssets() {
  for (const [from, to] of copies) {
    const src = path.join(IDENTITY, from);
    const dest = path.join(OUT, to);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
  // ybma.css imports ../colour/tokens.css; in the flat assets folder both sit side by side.
  const css = path.join(OUT, 'assets/brand/ybma.css');
  fs.writeFileSync(css, fs.readFileSync(css, 'utf8').replace('@import url("../colour/tokens.css");', '@import url("tokens.css");'));

  for (const f of ['site.css', 'site.js']) {
    fs.copyFileSync(path.join(SITE, 'src', f), path.join(OUT, 'assets', f));
  }
  // Photography: temporary stock files, swappable for YBMA's own. Sources in src/photos/SOURCES.md.
  const photoDir = path.join(OUT, 'assets/photos'); fs.mkdirSync(photoDir, { recursive: true });
  for (const f of fs.readdirSync(path.join(SITE, 'src/photos'))) if (/\.(jpe?g|png|webp)$/i.test(f)) fs.copyFileSync(path.join(SITE, 'src/photos', f), path.join(photoDir, f));
}

// ── pages ─────────────────────────────────────────────────────────────────
const pages = ['home', 'company', 'technology', 'contact', 'privacy', 'terms'].map(name => require(`./src/pages/${name}`)(ctx));

function outPath(route) {
  return route === '/' ? path.join(OUT, 'index.html') : path.join(OUT, route.replace(/^\/|\/$/g, ''), 'index.html');
}

function build() {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  copyAssets();
  const written = [];
  for (const page of pages) {
    const file = outPath(page.route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, render(ctx, page));
    written.push(path.relative(ROOT, file));
  }

  // ── report ──────────────────────────────────────────────────────────────
  const unresolved = [];
  for (const [key, v] of Object.entries(content.contact)) {
    if (v && typeof v === 'object' && v.placeholder) unresolved.push(`contact.${key}${v.value ? ` (${v.value})` : ' (omitted)'} — ${v.note}`);
  }
  if (content.meta.rcNumber.placeholder) unresolved.push('meta.rcNumber (omitted) — no registration number in the record');
  if (!content.contact.email.confirmed) unresolved.push('contact.email is UNCONFIRMED');

  // Copy rule: no em dashes anywhere in public copy.
  const dashes = written.map(w => [w, (fs.readFileSync(path.join(ROOT, w), 'utf8').match(/\u2014/g) || []).length]).filter(x => x[1]);

  console.log(`YBMA site build — ${written.length} pages`);
  written.forEach(w => console.log(`  ${w}`));
  console.log(`\nPlaceholders (${unresolved.length}):`);
  unresolved.forEach(u => console.log(`  · ${u}`));
  console.log(`\nEm dashes in generated pages: ${dashes.length ? dashes.map(d => `${d[0]} ${d[1]}`).join(', ') : '0'}`);
  console.log('Photography: temporary stock imagery (src/photos/SOURCES.md), swappable for YBMA documentary photography.');
  console.log('Typeface: Söhne is not installed; the site falls back to Helvetica Neue (operational only).');
}

build();
