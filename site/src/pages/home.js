/* Home. What YBMA is, what it does, its technology business, how it works, where it is going,
   how to reach it. Public copy only: no structure, no plans, no caveats.
   Section grounds alternate: chalk · chalk · INDIGO (Technology) · chalk · INDIGO (the long view)
   · chalk · ink footer. Never two fields adjacent; indigo never touches the ink footer. */

const { capabilities, values, photos } = require('../content');
const { photo } = require('../parts');

module.exports = ctx => ({
  route: '/',
  title: 'YBMA',
  description:
    'YBMA builds businesses and stays involved in running them. Technology is one of the ways it builds and operates: YBMA Technology builds practical systems around how businesses actually work.',
  body: `
<section class="s-hero">
  <div class="y-wrap s-hero__inner">
    <div class="s-hero__text">
      <p class="y-label">YBMA</p>
      <h1 class="y-display">We build businesses, and we stay to run them.</h1>
      <p class="y-body s-lede">YBMA is an operating company. We build businesses, run them to one
      standard, and expect them to last. Technology is one of the ways we build and operate:
      <strong>YBMA Technology</strong> builds practical systems around how businesses actually
      work.</p>
      <div class="s-actions">
        <a class="y-btn" href="/technology/">YBMA Technology</a>
        <a class="y-link" href="/company/">About the company</a>
      </div>
    </div>
    ${photo(photos.homeHero, { crop: 'bl', ratio: '4 / 5', className: 's-hero__img', eager: true })}
  </div>
</section>

<section class="s-section">
  <div class="y-wrap">
    <div class="s-two">
      <div>
        <p class="y-label">What YBMA does</p>
        <h2 class="y-h">Building is the easy half. Running something well, for years, is the
        work.</h2>
      </div>
      <div class="s-two__aside">
        <p class="y-body">A business rarely fails for want of an idea. It fails because nobody is
        close enough to it, for long enough, to see what is going wrong while it is still small.</p>
        <p class="y-body">So YBMA is built as an operator. We start businesses and stay close to
        each one: the decisions, the numbers, the people. Over time the company will build and
        acquire businesses wherever there is room to make something useful and lasting, and hold
        every one of them to the same standard.</p>
      </div>
    </div>
    <ul class="s-principles">
      <li class="y-stem"><h3 class="s-principles__h">We build it</h3><p class="y-body">We start
      businesses ourselves, because operating well means being there from the first decision.</p></li>
      <li class="y-stem"><h3 class="s-principles__h">We run it</h3><p class="y-body">We stay
      responsible for how a business works once it is real, and for what it earns.</p></li>
      <li class="y-stem"><h3 class="s-principles__h">We keep one standard</h3><p class="y-body">Everything
      YBMA builds is held to the same way of working. That is what makes it a company rather than
      a collection.</p></li>
    </ul>
  </div>
</section>

<section class="s-section s-section--field y-on-indigo">
  <div class="y-wrap">
    <div class="s-tech">
      <div class="s-tech__text">
        <p class="y-label">The technology business</p>
        <span class="y-division s-tech__lockup">
          <span class="y-logo">${ctx.logo(ctx.YBMA, 'wordmark', { title: 'YBMA' })}</span>
          <span class="y-division__name">Technology</span>
        </span>
        <h2 class="y-h s-tech__prop">Practical technology, built around how a business actually
        works.</h2>
        <p class="y-body">Internal systems, reporting, integrations, automation and custom
        applications. We build technology the way we run businesses: start with the work, find
        where it gets stuck, and build what removes the friction.</p>
        <ul class="s-caps">
          ${capabilities.map(c => `<li><span class="s-caps__name">${c.name}</span><span class="s-caps__note">${c.note}</span></li>`).join('')}
        </ul>
        <div class="s-actions">
          <a class="y-btn" href="/technology/">YBMA Technology</a>
        </div>
      </div>
      ${photo(photos.homeTechnology, { crop: 'tr', ratio: '3 / 4', className: 's-tech__img' })}
    </div>
  </div>
</section>

<section class="s-section">
  <div class="y-wrap">
    <div class="s-two">
      <div>
        <p class="y-label">How we work</p>
        <h2 class="y-h">Five rules that decide most arguments before they start.</h2>
      </div>
      <div class="s-two__aside">
        <p class="y-body">These are the rules we use when a decision is difficult: what to quote,
        what to refuse, what to tell a client they don't need.</p>
      </div>
    </div>
    <ol class="s-values">
      ${values.map((v, i) => `<li class="s-values__item">
        <span class="s-values__n">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="s-values__h">${v.name}</h3>
        <p class="y-body">${v.note}</p>
      </li>`).join('')}
    </ol>
  </div>
</section>

<section class="s-section s-section--field y-on-indigo">
  <div class="y-wrap">
    <div class="s-two">
      <div>
        <p class="y-label">The long view</p>
        <h2 class="y-h">One standard, whatever the business.</h2>
      </div>
      <div class="s-two__aside">
        <p class="y-body">YBMA builds and operates businesses in areas where there is room to make
        something useful and lasting. Each one carries the YBMA name, and each one is run the same
        way: the real number, plain speech, nothing built to need us.</p>
        <p class="y-body">Technology is one of the ways we build and operate, and the clearest place
        to see how we work.</p>
      </div>
    </div>
  </div>
</section>

<section class="s-section s-cta">
  <div class="y-wrap">
    <div class="s-cta__inner">
      <div>
        <p class="y-label">Talk to us</p>
        <h2 class="y-h">If there's a reason to work together, we'd like to hear it.</h2>
      </div>
      <div class="s-actions">
        <a class="y-btn" href="/contact/">Get in touch</a>
      </div>
    </div>
  </div>
</section>
`,
});
