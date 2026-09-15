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
   Ten small things for people who look closely. Each one obeys the identity: plain speech, the
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

  /* Typed words. A short buffer of the last keys; each word fires when the buffer ends with it. */
  var typed = '';
  var words = {};
  function onWord(w, fn) { words[w] = fn; }

  /* 2 · Type the name: every wordmark on the page performs the four cuts. */
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
    // typed words
    if (k.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey) {
      typed = (typed + k.toLowerCase()).slice(-12);
      for (var w in words) if (typed.slice(-w.length) === w) { typed = ''; words[w](); break; }
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
      // On the home page the link goes nowhere, so no click navigates. Elsewhere the first
      // click is a real navigation and the rest of the run happens on the home page.
      if (clicks.length >= 2 || location.pathname === '/') e.preventDefault();
      if (clicks.length === 5) { clicks = []; toast('Two stones, one joint.'); }
    });
  }

  onWord('ybma', fourCuts);

  /* 7 · Type "turn": the whole page makes one quarter-turn and settles back. */
  var turning = false;
  onWord('turn', function () {
    if (turning) return;
    turning = true;
    var el = document.documentElement;
    document.body.style.transformOrigin = '50% ' + (window.scrollY + window.innerHeight / 2) + 'px';
    el.classList.add('is-turning');
    setTimeout(function () {
      el.classList.remove('is-turning');
      setTimeout(function () { document.body.style.transformOrigin = ''; turning = false; }, reduce ? 0 : 340);
    }, reduce ? 0 : 1400);
  });

  /* 8 · Type "drop": the headline lets go of its letters, one by one, then takes them back. */
  var dropping = false;
  onWord('drop', function () {
    var h = document.querySelector('h1');
    if (!h || dropping) return;
    dropping = true;
    var original = h.innerHTML, text = h.textContent;
    h.setAttribute('aria-label', text);
    h.innerHTML = '';
    var spans = [];
    text.split('').forEach(function (ch) {
      var sp = document.createElement('span');
      sp.className = 's-drop';
      sp.textContent = ch === ' ' ? '\u00a0' : ch;
      h.appendChild(sp); spans.push(sp);
    });
    var delay = reduce ? 0 : 28;
    spans.forEach(function (sp, i) { setTimeout(function () { sp.classList.add('is-gone'); }, i * delay); });
    var fallen = spans.length * delay + 900;
    spans.forEach(function (sp, i) { setTimeout(function () { sp.classList.remove('is-gone'); }, fallen + (spans.length - i) * delay); });
    setTimeout(function () { h.innerHTML = original; h.removeAttribute('aria-label'); dropping = false; }, fallen * 2 + 400);
  });

  /* 9 · Type "ink": the site goes to its night ground. Type it again to come back. */
  onWord('ink', function () {
    var on = document.documentElement.classList.toggle('is-ink');
    toast(on ? 'Ink.' : 'Chalk.');
  });

  /* 10 · Type "u3": the pointer becomes the symbol. Type it again to give it back. */
  var cursorStyle = null;
  onWord('u3', function () {
    if (!cursorStyle) {
      var svg = symbol && symbol.querySelector('svg');
      if (!svg) return;
      var src = svg.outerHTML
        .replace(/<title>[^<]*<\/title>/, '')
        .replace(/currentColor/g, '#1F2C6B')
        .replace(/<svg /, '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" ');
      cursorStyle = document.createElement('style');
      cursorStyle.textContent = 'html.is-u3, html.is-u3 * { cursor: url("data:image/svg+xml;utf8,' + encodeURIComponent(src) + '") 4 4, auto !important; }';
      document.head.appendChild(cursorStyle);
    }
    document.documentElement.classList.toggle('is-u3');
  });

  /* 6 · The 404 page: put the letter back. */
  var nf = document.getElementById('s-nf');
  if (nf) {
    var loose = nf.querySelector('.s-nf__loose'), whole = nf.querySelector('.s-nf__mark');
    var looseSvg = loose.querySelector('svg'), m = looseSvg.querySelector('.ltr-M');
    // turn the loose letter about its own centre, not the centre of the hidden wordmark
    try {
      var bb = m.getBBox(), vb = looseSvg.viewBox.baseVal;
      var tx = m.transform.baseVal.numberOfItems ? m.transform.baseVal.getItem(0).matrix.e : 0;
      looseSvg.style.transformOrigin = ((bb.x + tx + bb.width / 2) / vb.width * 100) + '% ' + ((bb.y + bb.height / 2) / vb.height * 100) + '%';
    } catch (err) {}
    loose.addEventListener('click', function () {
      if (nf.classList.contains('is-turned')) return;
      var gap = loose.getBoundingClientRect().top - whole.getBoundingClientRect().top;
      loose.style.transform = 'translateY(' + (-gap) + 'px)';
      nf.classList.add('is-turned');
      setTimeout(function () {
        nf.classList.add('is-found');
        ['.s-nf__h', '.s-nf__p'].forEach(function (sel) { var el = nf.querySelector(sel); el.textContent = el.getAttribute('data-found'); });
      }, reduce ? 0 : 340);
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
