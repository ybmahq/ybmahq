/* YBMA parent website — page shell.
   The header, footer and document head. Everything visual comes from the identity system:
   tokens.css, ybma.css and the logo geometry. This file adds structure, not design language. */

const { nav, legalNav, contact, meta } = require('./content');

/* Logo markup is generated from the locked geometry (identity/logo/master/ybma-logo.js),
   never redrawn. `currentColor` lets a mark inherit the surface it sits on. */
function logo(YBMA, kind, { title }) {
  const W = YBMA.wordmark();
  const part =
    kind === 'wordmark' ? { inner: YBMA.wordmarkSVG({ fill: 'currentColor' }), width: W.width, height: 100 } :
    kind === 'symbol' ? { inner: YBMA.symbolSVG({ fill: 'currentColor' }), width: 120, height: 120 } :
    YBMA.lockupHorizontal({ fill: 'currentColor' });
  const svg = YBMA.svgWrap(part, { attrs: `role="img" aria-label="${title}" focusable="false"` });
  return svg.replace('<svg ', '<svg preserveAspectRatio="xMinYMid meet" ');
}

function icon(sprite, name, label) {
  const m = new RegExp(`<symbol id="ybma-icon-${name}" viewBox="0 0 24 24">(.*?)</symbol>`).exec(sprite);
  return `<svg class="s-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true" focusable="false">${m ? m[1] : ''}</svg>${label ? `<span class="s-vh">${label}</span>` : ''}`;
}

function header(ctx, current) {
  const links = nav.map(l =>
    `<li><a href="${l.href}"${l.href === current ? ' aria-current="page"' : ''}>${l.label}</a></li>`).join('');
  return `
<a class="s-skip" href="#main">Skip to content</a>
<header class="s-header">
  <div class="y-wrap s-header__inner">
    <a class="s-header__logo" href="/" aria-label="YBMA home"${current === '/' ? ' aria-current="page"' : ''}>
      <span class="y-logo y-logo--symbol">${logo(ctx.YBMA, 'symbol', { title: 'YBMA home' })}</span>
    </a>
    <nav class="s-nav" aria-label="Primary">
      <ul class="s-nav__list">${links}</ul>
    </nav>
    <button class="s-menu-btn" type="button" aria-expanded="false" aria-controls="s-menu">
      ${icon(ctx.sprite, 'menu', 'Open menu')}
    </button>
  </div>
  <div class="s-menu" id="s-menu" hidden>
    <div class="y-wrap s-menu__inner">
      <ul class="s-menu__list">
        <li><a href="/"${current === '/' ? ' aria-current="page"' : ''}>Home</a></li>
        ${nav.map(l => `<li><a href="${l.href}"${l.href === current ? ' aria-current="page"' : ''}>${l.label}</a></li>`).join('')}
      </ul>
    </div>
  </div>
</header>`;
}

function footer(ctx) {
  const mail = contact.email.value;
  return `
<footer class="s-footer y-on-ink">
  <div class="y-wrap">
    <div class="s-footer__top">
      <a class="s-footer__logo" href="/" aria-label="YBMA home">
        <span class="y-logo">${logo(ctx.YBMA, 'lockup', { title: 'YBMA' })}</span>
      </a>
      <nav class="s-footer__nav" aria-label="Footer">
        <ul>
          <li><a class="y-link" href="/">Home</a></li>
          ${nav.map(l => `<li><a class="y-link" href="${l.href}">${l.label}</a></li>`).join('')}
        </ul>
      </nav>
      <div class="s-footer__contact">
        <p class="y-label">Get in touch</p>
        <p><a class="y-link" href="mailto:${mail}">${mail}</a></p>
      </div>
    </div>
    <p class="s-footer__legal">
      <span>© ${meta.year} ${meta.legal}.</span>
      <span class="s-footer__legal-links">${legalNav.map(l => `<a class="y-link" href="${l.href}">${l.label}</a>`).join('')}</span>
    </p>
  </div>
</footer>`;
}

/* @param {object} page  { route, title, description, body }  */
function render(ctx, page) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.description}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${meta.siteName}">
<meta property="og:url" content="${meta.domain}${page.route}">
<link rel="canonical" href="${meta.domain}${page.route}">
<link rel="icon" href="/assets/brand/logo/ybma-symbol-ink.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/brand/tokens.css">
<link rel="stylesheet" href="/assets/brand/ybma.css">
<link rel="stylesheet" href="/assets/site.css">
</head>
<body class="y-root">
${header(ctx, page.route)}
<main id="main">
${page.body}
</main>
${footer(ctx)}
<script src="/assets/site.js" defer></script>
</body>
</html>
`;
}

module.exports = { render, logo, icon };
