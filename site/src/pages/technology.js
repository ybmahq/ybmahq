/* Technology. A capability inside an operating company, kept deliberately broad: what YBMA
   Technology does · why YBMA builds technology · the problems it solves · how it approaches a
   system · how it connects to the businesses YBMA runs. No industries named as targets, no
   products, no clients, no offer, no pricing. */

const { capabilities, photos } = require('../content');
const { photo } = require('../parts');

/* The kinds of friction technology can remove. Situations, not verticals. */
const problems = [
  { name: 'Nobody can see the whole picture', note: 'Each tool answers its own question. Today’s position takes three people and a wait.' },
  { name: 'The work lives in someone’s head', note: 'A process only one person knows is a risk the business carries every day, and it can’t grow.' },
  { name: 'Information doesn’t move', note: 'It exists in one place and is needed in another, so it’s typed again, late, or not at all.' },
  { name: 'The tool nearly fits', note: 'Something bought off the shelf does most of the job. The rest is done by hand, around it, forever.' },
];

/* How a system gets built. An approach, not a set of contractual terms. */
const approach = [
  { name: 'Start with how the work happens', note: 'Before any software, we understand how the business actually runs: who does what, in what order, with what information.' },
  { name: 'Find the friction', note: 'Where time is lost, where errors creep in, where the same thing is done twice. That is where a system earns its place.' },
  { name: 'Build what is needed', note: 'A smaller system everyone uses beats a larger one nobody does. We would rather scope a job down than sell more of it.' },
  { name: 'Make it yours', note: 'What we build is meant to be owned, understood and run by the people who use it. Nothing is built to need us.' },
];

module.exports = ctx => ({
  route: '/technology/',
  title: 'YBMA Technology',
  description:
    'YBMA Technology builds practical technology around how businesses actually work: internal systems, reporting, integrations, automation and custom applications.',
  body: `
<section class="s-hero s-hero--page">
  <div class="y-wrap s-hero__inner">
    <div class="s-hero__text">
      <p class="y-label">YBMA Technology</p>
      <span class="y-division s-page-lockup">
        <span class="y-logo">${ctx.logo(ctx.YBMA, 'wordmark', { title: 'YBMA' })}</span>
        <span class="y-division__name">Technology</span>
      </span>
      <h1 class="y-display s-hero__h--sm">Practical technology, built around how a business
      actually works.</h1>
      <p class="y-body s-lede">YBMA Technology builds the systems and software a business runs on:
      internal tools, reporting, integrations, automation and custom applications. We start with the
      work, find where it gets stuck, and build the technology that removes the friction.</p>
      <div class="s-actions">
        <a class="y-btn" href="/contact/">Start a conversation</a>
      </div>
    </div>
    ${photo(photos.technologyHero, { crop: 'bl', ratio: '4 / 5', className: 's-hero__img', eager: true })}
  </div>
</section>

<section class="s-section">
  <div class="y-wrap">
    <div class="s-two">
      <div>
        <p class="y-label">Why we build technology</p>
        <h2 class="y-h">Because we run businesses, and we know where the time goes.</h2>
      </div>
      <div class="s-two__aside">
        <p class="y-body">YBMA is an operating company. We build businesses and stay to run them,
        and most of what makes a business run well is unglamorous: knowing today's number, moving
        information to the person who needs it, not doing the same thing twice. Technology is one
        of the ways we do that, for the businesses we operate and for the businesses that work
        with us.</p>
        <p class="y-body">That's the point of view we bring to every system. It isn't technology
        for its own sake. It's a better-run business.</p>
      </div>
    </div>
  </div>
</section>

<section class="s-section s-section--field y-on-indigo">
  <div class="y-wrap">
    <div class="s-two">
      <div>
        <p class="y-label">What we solve</p>
        <h2 class="y-h">The friction between how a business works and the tools it has.</h2>
      </div>
      <div class="s-two__aside">
        <p class="y-body">Most businesses already have technology. It usually answers some questions
        and not the ones that matter most. The problems below look different in every business and
        come from the same place: the work has moved on and the tools haven't.</p>
      </div>
    </div>
    <ul class="s-commit">
      ${problems.map(p => `<li class="s-commit__item">
        <h3 class="s-commit__h">${p.name}</h3>
        <p class="y-body">${p.note}</p>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="s-section">
  <div class="y-wrap">
    <p class="y-label">What we build</p>
    <h2 class="y-h s-section__h">Whatever the work needs. Usually more than one of these at once.</h2>
    <ul class="s-cards">
      ${capabilities.map(c => `<li class="y-panel s-card">
        <h3 class="s-card__h">${c.name}</h3>
        <p class="y-body">${c.note}</p>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="s-section">
  <div class="y-wrap">
    <div class="s-two">
      <div>
        <p class="y-label">How we approach it</p>
        <h2 class="y-h">Work first. Friction second. Then the system.</h2>
      </div>
      <div class="s-two__aside">
        <p class="y-body">We don't start with a product or a platform. We start with how the
        business runs, and we build technology that fits it, in that order.</p>
      </div>
    </div>
    <ul class="s-principles s-principles--four">
      ${approach.map(a => `<li class="y-stem"><h3 class="s-principles__h">${a.name}</h3><p class="y-body">${a.note}</p></li>`).join('')}
    </ul>
  </div>
</section>

<section class="s-section s-section--field y-on-indigo">
  <div class="y-wrap">
    <div class="s-two">
      <div>
        <p class="y-label">Who this is for</p>
        <h2 class="y-h">Businesses that have outgrown the way they work.</h2>
      </div>
      <div class="s-two__aside">
        <p class="y-body">Any kind of business, at the point where more than one person touches the
        records, the tools no longer fit, and someone needs a clearer view than the current systems
        give them. The systems differ with the business. The job is the same.</p>
      </div>
    </div>
  </div>
</section>

<section class="s-section s-cta">
  <div class="y-wrap">
    <div class="s-cta__inner">
      <div>
        <p class="y-label">Start a conversation</p>
        <h2 class="y-h">Tell us how the business runs today and where it gets difficult. That's
        usually enough to know whether we can help.</h2>
      </div>
      <div class="s-actions">
        <a class="y-btn" href="/contact/">Get in touch</a>
      </div>
    </div>
  </div>
</section>
`,
});
