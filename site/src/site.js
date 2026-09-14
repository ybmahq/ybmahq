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
