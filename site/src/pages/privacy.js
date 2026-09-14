/* Privacy policy. Conservative, factual, written for the website as it exists: a static site with
   no accounts, no forms and no analytics. Nothing is claimed that is not established: no
   certifications, no regulators, no named vendors.
   FOR COUNSEL: the sections marked "review" in comments below should be checked against the laws
   that apply where YBMA operates (including Nigeria's NDPA) and wherever visitors are located
   (including the UK GDPR / EU GDPR where relevant) before launch. */

const { contact, meta } = require('../content');

const updated = '14 September 2026';

module.exports = ctx => ({
  route: '/privacy/',
  title: 'Privacy · YBMA',
  description: 'How YBMA handles information on this website.',
  body: `
<section class="s-hero s-hero--page">
  <div class="y-wrap s-hero__inner s-hero__inner--wide">
    <div class="s-hero__text">
      <p class="y-label">Privacy</p>
      <h1 class="y-display">Privacy policy</h1>
      <p class="y-body s-lede">This policy explains what information we collect when you use this
      website or write to us, how we use it, and the choices you have. It is written in plain
      words on purpose.</p>
    </div>
  </div>
</section>

<section class="s-section s-section--tight">
  <div class="y-wrap">
    <div class="s-legal">
      <p class="s-legal__meta">Last updated ${updated}</p>

      <h2>Who we are</h2>
      <p>${meta.legal} ("YBMA", "we", "us") operates this website at ${meta.domain.replace('https://', '')}.
      If you have a question about this policy or about your information, write to
      <a class="y-link" href="mailto:${contact.email.value}">${contact.email.value}</a>.</p>

      <h2>Information you give us</h2>
      <p>If you email us, we receive what you send: your name, your email address, and whatever
      you tell us about yourself or your business. We use it to reply to you and to carry on the
      conversation you started. We do not add you to a marketing list because you wrote to us.</p>

      <h2>Information collected automatically</h2>
      <p>This website is a set of static pages. When you visit, the server that delivers them
      receives the technical information any web server receives: the address your device connects
      from, the pages requested, the time, and the browser and device type. Our hosting provider
      may keep standard server logs of this information for security and to keep the site
      running. We do not use it to identify you.</p>
      <!-- review: confirm hosting provider's log retention once hosting is chosen -->

      <h2>Cookies and analytics</h2>
      <p>This website does not set cookies of its own, does not use advertising or tracking
      technologies, and does not run analytics. If that changes, we will update this policy first
      and, where required, ask for your consent before anything is set.</p>

      <h2>How we use information</h2>
      <p>We use the information described above only to respond to you, to keep the website
      secure and available, and to meet legal obligations that apply to us. We do not sell
      personal information, and we do not use it for automated decision-making.</p>

      <h2>How we store and protect it</h2>
      <p>Email you send us is held in our email system and, where a conversation continues, in
      the working documents that follow from it. We take reasonable technical and organisational
      steps to protect information against loss, misuse and unauthorised access, and we limit
      access to the people who need it. No method of transmission or storage is completely
      secure, and we cannot guarantee absolute security.</p>

      <h2>How long we keep it</h2>
      <p>We keep correspondence for as long as the conversation, and any relationship that
      follows from it, is active, and afterwards for as long as we are required to by law or need
      to for a legitimate business purpose such as resolving a dispute. Server logs are kept for a
      short, fixed period by our hosting provider and then deleted.</p>
      <!-- review: set the correspondence retention period once decided -->

      <h2>Sharing with third parties</h2>
      <p>We share information only with the providers we rely on to run the website and our email
      (for example, hosting and email services), who process it on our behalf and under
      confidentiality obligations; where the law requires it; or where you ask us to. We do not
      share it with anyone else for their own purposes.</p>

      <h2>International transfers</h2>
      <p>The providers we use may store information in countries other than the one you are in.
      Where that happens, we take reasonable steps to ensure it is protected to a standard
      consistent with this policy.</p>
      <!-- review: transfer mechanism language once hosting and email providers are confirmed -->

      <h2>Your rights</h2>
      <p>Depending on where you live, you may have the right to ask us what information we hold
      about you, to have it corrected or deleted, to object to or restrict how we use it, or to
      receive a copy of it. You can exercise any of these by writing to
      <a class="y-link" href="mailto:${contact.email.value}">${contact.email.value}</a>. We will
      respond within the time the applicable law allows. If you are not satisfied with our
      response, you may also have the right to complain to the data protection authority where
      you live.</p>

      <h2>Children</h2>
      <p>This website is not directed at children, and we do not knowingly collect information
      from anyone under 18.</p>

      <h2>Links to other sites</h2>
      <p>Where this website links to another site, that site has its own privacy practices, which
      we do not control.</p>

      <h2>Changes to this policy</h2>
      <p>We will update this page when our practices change and change the date at the top. If a
      change is significant, we will say so plainly here.</p>

      <h2>Contact</h2>
      <p><a class="y-link" href="mailto:${contact.email.value}">${contact.email.value}</a></p>
    </div>
  </div>
</section>
`,
});
