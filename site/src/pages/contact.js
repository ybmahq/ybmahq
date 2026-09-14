/* Contact. Simple and credible. One confirmed address; no phone, office address or social
   accounts, because none are established. */

const { contact } = require('../content');

module.exports = ctx => ({
  route: '/contact/',
  title: 'Contact · YBMA',
  description: 'How to reach YBMA. One address for clients, candidates and owners.',
  body: `
<section class="s-hero s-hero--page">
  <div class="y-wrap s-hero__inner s-hero__inner--wide">
    <div class="s-hero__text">
      <p class="y-label">Contact</p>
      <h1 class="y-display">Write to us in plain words. We will do the same.</h1>
      <p class="y-body s-lede">One address reaches the company. Tell us which conversation you are
      starting and we will put you with the right person.</p>
    </div>
  </div>
</section>

<section class="s-section s-section--tight">
  <div class="y-wrap">
    <div class="s-contact">
      <div class="s-contact__main y-field">
        <p class="y-label">Email</p>
        <a class="s-contact__email" href="mailto:${contact.email.value}">${contact.email.value}</a>
        <p class="y-body s-contact__note">We read everything that arrives here.</p>
        ${contact.email.confirmed ? '' : `<p class="s-contact__dev"><span class="y-label">Development placeholder</span> This address is being confirmed before launch.</p>`}
      </div>
      <div class="s-contact__aside">
        <p class="y-label">Response</p>
        <p class="y-body">We answer during the working week. If something is urgent, say so in the
        subject line and say why.</p>
      </div>
    </div>

    <div class="s-reasons">
      <h2 class="y-h s-section__h">Three conversations</h2>
      <ul class="s-cards">
        <li class="y-panel s-card">
          <h3 class="s-card__h">You run a business</h3>
          <p class="y-body">Tell us what it does, roughly how big it is, what tools you already use
          and where things get difficult. A few sentences is enough to know whether we're
          useful.</p>
        </li>
        <li class="y-panel s-card">
          <h3 class="s-card__h">You would rather run something</h3>
          <p class="y-body">We are more interested in what you have built and operated than in
          where you studied. Tell us something you ran, and what you would do differently.</p>
        </li>
        <li class="y-panel s-card">
          <h3 class="s-card__h">You built a business and are thinking about its future</h3>
          <p class="y-body">We are operators. If you have built something and want it run properly
          for the long term, that is a conversation worth having early.</p>
        </li>
      </ul>
    </div>
  </div>
</section>
`,
});
