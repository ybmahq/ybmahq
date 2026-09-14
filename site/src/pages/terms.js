/* Terms of use for the website. Conservative and factual for a static, informational site.
   Nothing is claimed that is not established: no registrations, no legal structure beyond the
   company name, no named jurisdiction beyond a placeholder for counsel.
   FOR COUNSEL: governing law and jurisdiction are stated as the company's country of
   incorporation without naming it; confirm the wording and the courts before launch. */

const { contact, meta } = require('../content');

const updated = '14 September 2026';

module.exports = ctx => ({
  route: '/terms/',
  title: 'Terms · YBMA',
  description: 'The terms on which YBMA makes this website available.',
  body: `
<section class="s-hero s-hero--page">
  <div class="y-wrap s-hero__inner s-hero__inner--wide">
    <div class="s-hero__text">
      <p class="y-label">Terms</p>
      <h1 class="y-display">Terms of use</h1>
      <p class="y-body s-lede">These are the terms on which we make this website available. By
      using it, you agree to them. They cover the website only; any work we do together is
      covered by its own agreement.</p>
    </div>
  </div>
</section>

<section class="s-section s-section--tight">
  <div class="y-wrap">
    <div class="s-legal">
      <p class="s-legal__meta">Last updated ${updated}</p>

      <h2>Who we are</h2>
      <p>This website is operated by ${meta.legal} ("YBMA", "we", "us"). Questions about these
      terms can be sent to <a class="y-link" href="mailto:${contact.email.value}">${contact.email.value}</a>.</p>

      <h2>Using the website</h2>
      <p>You may use this website for lawful purposes and in a way that does not interfere with
      it or with anyone else's use of it. You may not attempt to gain unauthorised access to it,
      to the systems that serve it, or to any information held on them; introduce anything harmful
      to it; copy it or its content systematically; or use it to send unsolicited communications.</p>

      <h2>Our content</h2>
      <p>The content of this website, including its text, design, photographs where owned by us,
      and the YBMA name, wordmark and symbol, belongs to us or is used with permission. You may
      read it and share links to it. You may not reproduce our name, marks or design without our
      written permission. Some photographs on this site are licensed from third parties; they
      remain the property of their photographers.</p>

      <h2>Information on the website</h2>
      <p>We try to keep the website accurate and current, and we may change it at any time. It is
      provided for general information about YBMA. It is not advice of any kind, and it is not an
      offer to do business on particular terms. Anything we agree to do for you will be set out in
      a separate written agreement.</p>

      <h2>Links to other sites</h2>
      <p>Where the website links to other sites, those links are provided for convenience. We do
      not control those sites and are not responsible for their content or practices.</p>

      <h2>No warranties</h2>
      <p>The website is provided as it is and as it is available. To the extent the law allows, we
      make no promises that it will be uninterrupted, error-free or free of harmful components,
      and we make no warranties about its content beyond what the law requires.</p>

      <h2>Limitation of liability</h2>
      <p>To the extent the law allows, we are not liable for any loss or damage arising from your
      use of, or inability to use, the website or its content, including indirect or
      consequential loss. Nothing in these terms limits liability that cannot be limited by law.</p>

      <h2>Changes</h2>
      <p>We may change the website or these terms at any time. Changes to these terms take effect
      when published here, with the date at the top updated.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the country in which ${meta.legal} is
      incorporated, and any dispute about them will be dealt with by the courts of that country.</p>
      <!-- review: name the country and, if wanted, the specific courts -->

      <h2>Contact</h2>
      <p><a class="y-link" href="mailto:${contact.email.value}">${contact.email.value}</a></p>
    </div>
  </div>
</section>
`,
});
