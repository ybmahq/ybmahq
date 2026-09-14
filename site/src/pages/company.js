/* Company. What YBMA is, how it thinks, its technology business, where it comes from.
   Not a corporate history and not an explanation of structure. */

const { values } = require('../content');

module.exports = ctx => ({
  route: '/company/',
  title: 'Company · YBMA',
  description:
    'YBMA builds businesses and stays involved in running them. How the company thinks, how it works, and what it builds.',
  body: `
<section class="s-hero s-hero--page">
  <div class="y-wrap s-hero__inner s-hero__inner--wide">
    <div class="s-hero__text">
      <p class="y-label">The company</p>
      <h1 class="y-display">We operate what we build.</h1>
      <p class="y-body s-lede">YBMA builds businesses and stays involved in running them. We're close
      to each one for as long as we own it: the decisions, the numbers, the people. The standard is
      the same in every case, and it's the reason the company exists.</p>
    </div>
  </div>
</section>

<section class="s-section s-section--field y-on-indigo">
  <div class="y-wrap">
    <div class="s-two">
      <div>
        <p class="y-label">How we think</p>
        <h2 class="y-h">A business YBMA owns or serves should run better than it did before.</h2>
      </div>
      <div class="s-two__aside">
        <p class="y-body">That is a promise you can break, which is what makes it worth making. It
        is also the test we apply to ourselves: if a business is not measurably better run for our
        being involved, we have not done the job.</p>
      </div>
    </div>
    <ol class="s-values s-values--field">
      ${values.map((v, i) => `<li class="s-values__item">
        <span class="s-values__n">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="s-values__h">${v.name}</h3>
        <p class="y-body">${v.note}</p>
      </li>`).join('')}
    </ol>
  </div>
</section>

<section class="s-section">
  <div class="y-wrap">
    <div class="s-two">
      <div>
        <p class="y-label">The technology business</p>
        <h2 class="y-h">Systems built around how organisations actually operate.</h2>
      </div>
      <div class="s-two__aside">
        <p class="y-body">YBMA Technology builds practical technology around how a business
        actually works: internal systems, reporting, integrations, automation and custom
        applications. Technology is one of the ways we build and operate, and the clearest place
        to see what we mean by building properly.</p>
        <p><a class="y-link" href="/technology/">About YBMA Technology</a></p>
      </div>
    </div>
  </div>
</section>

<section class="s-section">
  <div class="y-wrap">
    <div class="s-two">
      <div>
        <p class="y-label">The standard</p>
        <h2 class="y-h">Build it properly. Hand it over cleanly. Keep the number honest.</h2>
      </div>
      <div class="s-two__aside">
        <p class="y-body">Three things we hold every business to, whatever it does and wherever it
        works. They're simple to say and hard to keep, which is why they're the standard rather
        than the slogan.</p>
      </div>
    </div>
    <div class="s-longview y-stem">
      <p class="y-label">In ten years</p>
      <p class="s-longview__q">We would like YBMA to mean: it was built to do more than it had
      to.</p>
    </div>
  </div>
</section>

<section class="s-section s-cta">
  <div class="y-wrap">
    <div class="s-cta__inner">
      <div>
        <p class="y-label">Three kinds of conversation</p>
        <h2 class="y-h">Clients, people who would rather run something than be employed by it, and
        owners thinking about the future of a business they built.</h2>
      </div>
      <div class="s-actions">
        <a class="y-btn" href="/contact/">Get in touch</a>
      </div>
    </div>
  </div>
</section>
`,
});
