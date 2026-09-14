/* YBMA parent website — the only script on the site.
   One job: the mobile menu. Motion is a cut, per the identity's motion rule, so the menu
   appears and disappears without a transition. No scroll effects, no observers, no libraries. */
(function () {
  var btn = document.querySelector('.s-menu-btn');
  var menu = document.getElementById('s-menu');
  if (!btn || !menu) return;

  function setOpen(open) {
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.querySelector('.s-vh').textContent = open ? 'Close menu' : 'Open menu';
    document.body.style.overflow = open ? 'hidden' : '';
  }

  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      btn.focus();
    }
  });

  // The menu is a small-screen control; close it if the viewport grows past the breakpoint.
  var mq = window.matchMedia('(min-width: 901px)');
  (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))(function (e) {
    if ((e.matches !== undefined ? e.matches : mq.matches)) setOpen(false);
  });
})();

/* ── Easter eggs ─────────────────────────────────────────────────────────
   Six small things for people who look closely. Each one obeys the identity: plain speech, the
   three colours, and the motion rule (a cut or a quarter-turn; nothing else). All are inert for
   assistive technology and respect prefers-reduced-motion. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var symbol = document.querySelector('.s-header__logo .y-logo');
  var toastEl = null, toastTimer = null;

  function toast(text) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 's-toast';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = text;
    toastEl.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-on'); }, 2400);
  }

  /* 1 · The Konami code: the symbol makes one quarter-turn and settles. */
  var konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  var kIndex = 0;
  function quarterTurn() {
    if (!symbol) return;
    symbol.classList.remove('is-turned');
    void symbol.offsetWidth;
    symbol.classList.add('is-turned');
    setTimeout(function () { symbol.classList.remove('is-turned'); }, reduce ? 0 : 1400);
  }

  /* 2 · Type the name: every wordmark on the page performs the four cuts. */
  var word = 'ybma', wIndex = 0;
  function fourCuts() {
    var marks = document.querySelectorAll('.ltr');
    if (!marks.length) return;
    var groups = new Map();
    marks.forEach(function (l) {
      var svg = l.closest('svg'); if (!svg) return;
      if (!groups.get(svg)) groups.set(svg, []);
      groups.get(svg).push(l);
    });
    groups.forEach(function (letters) {
      letters.forEach(function (l) { l.style.opacity = '0'; });
      letters.forEach(function (l, i) {
        setTimeout(function () { l.style.opacity = ''; }, reduce ? 0 : 140 * (i + 1));
      });
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.target && /^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
    var k = e.key;
    // Konami
    if (k === konami[kIndex] || k.toLowerCase() === konami[kIndex]) { kIndex++; if (kIndex === konami.length) { kIndex = 0; quarterTurn(); } }
    else kIndex = (k === konami[0]) ? 1 : 0;
    // the name
    if (k.length === 1) {
      if (k.toLowerCase() === word[wIndex]) { wIndex++; if (wIndex === word.length) { wIndex = 0; fourCuts(); } }
      else wIndex = (k.toLowerCase() === word[0]) ? 1 : 0;
    }
    // 4 · The grid the site is built on.
    if (k === '.' && !e.metaKey && !e.ctrlKey) {
      var g = document.getElementById('s-grid');
      if (!g) {
        g = document.createElement('div'); g.id = 's-grid'; g.setAttribute('aria-hidden', 'true');
        var inner = document.createElement('div'); inner.className = 's-grid__cols';
        for (var i = 0; i < 12; i++) inner.appendChild(document.createElement('i'));
        var label = document.createElement('span'); label.className = 's-grid__label'; label.textContent = '12 columns · 24 gutter · 32 margin · 1240 max · 8 baseline';
        g.appendChild(inner); g.appendChild(label); g.hidden = true; document.body.appendChild(g);
      }
      g.hidden = !g.hidden;
    }
  });

  /* 3 · Five clicks on the symbol: its name. */
  if (symbol) {
    var clicks = [], link = symbol.closest('a');
    link.addEventListener('click', function (e) {
      var now = Date.now();
      clicks = clicks.filter(function (t) { return now - t < 2000; });
      clicks.push(now);
      if (clicks.length >= 2) e.preventDefault();   // a fast second click is not a navigation
      if (clicks.length === 5) { clicks = []; toast('Two stones, one joint.'); }
    });
  }

  /* 5 · The console. */
  try {
    var mark = [
      '█ ████████████',
      '██ ███████████',
      '███ ██████████',
      '████ █████████',
      '█████ ████████',
      '██████ ███████',
      '███████       ',
      '█████████████ ',
    ].join('\n');
    console.log('%c' + mark, 'font-family:monospace;line-height:1.05;color:#1F2C6B');
    console.log('%cYBMA%c\nYou opened the console. That usually means you build things.\nIf you would rather run something than be employed by it, write to hello@ybmahq.com.', 'font-weight:600;font-size:14px;color:#151412', 'color:#4B4A46');
  } catch (err) { /* nothing to do */ }
})();
