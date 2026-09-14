/* YBMA parent website — shared content and facts.
   Sessions 29 and 30 · 14 September 2026 · content, positioning and imagery passes.

   RULES FOR EDITING THIS FILE
   1. Nothing is invented: no clients, revenue, statistics, partnerships, products, subsidiaries,
      future businesses, locations, awards or testimonials. Anything not established is marked
      PLACEHOLDER and reported by the build.
   2. Public copy states what YBMA is and does. Internal strategy, structure, hypotheses, what does
      not exist yet, and what has not been decided stay in the state file, not here.
   3. There is no approved public slogan. Nothing here goes under the logo as a tagline.
   4. No em dashes anywhere in website copy. Commas, full stops, colons, brackets.
   5. Banned words (recorded voice rule): transformation · solutions · partner · leverage ·
      seamless · synergy · innovative · world-class · disruptive.
*/

const PLACEHOLDER = true; // marker the build uses to report unresolved content

const contact = {
  // Confirmed by the founders, 14 September 2026. If it ever changes, change it here only.
  email: { value: 'hello@ybmahq.com', confirmed: true, placeholder: false, note: 'Confirmed public address.' },
  phone: { value: null, placeholder: PLACEHOLDER, note: 'No number established. Omitted rather than invented.' },
  address: { value: null, placeholder: PLACEHOLDER, note: 'No office address established. Omitted rather than invented.' },
  social: { value: null, placeholder: PLACEHOLDER, note: 'No accounts established. Omitted rather than invented.' },
};

const nav = [
  { href: '/company/', label: 'Company' },
  { href: '/technology/', label: 'Technology' },
  { href: '/contact/', label: 'Contact' },
];
/* Footer-only links. Not part of primary navigation. */
const legalNav = [
  { href: '/privacy/', label: 'Privacy' },
  { href: '/terms/', label: 'Terms' },
];

/* What YBMA Technology builds. The recorded capability is websites, custom software, internal
   business systems and business automation, described here as a horizontal capability: the kinds
   of technology a business needs, not the industries it is for. */
const capabilities = [
  { name: 'Internal systems and tools', note: 'The software a business runs on day to day: the records, the workflows, the approvals and the handoffs between people, built around how the work is actually done.' },
  { name: 'Reporting and dashboards', note: 'A clear, current view of what is happening, for the people who have to decide. Read in the morning, on a phone, without asking anyone.' },
  { name: 'Integrations and automation', note: 'The connections between the tools a business already uses, so information moves between them and nobody types it twice.' },
  { name: 'Custom applications', note: 'Software for one business and the people it serves, internal or customer-facing, when nothing off the shelf fits the way it works.' },
  { name: 'Websites and digital products', note: 'The front door of a business and the products behind it, built to be owned, understood and run by the people who use them.' },
];

/* The five recorded YBMA values, written for a public reader. */
const values = [
  { name: 'Know the real number', note: 'A flattering figure is not a figure. We would rather give you a number you can act on than one you enjoy.' },
  { name: 'Run it, not just own it', note: 'Building is the easy half. We stay responsible for how a business works once it is real, and for what it earns.' },
  { name: 'Plain speech', note: 'If a client cannot explain what they bought, we have not sold it. We have taken money.' },
  { name: 'Nothing we cannot hand over', note: 'Ownership is a contract term, not a gesture. Nothing we build is built to need us.' },
  { name: 'Built for how things actually run', note: 'Light, fast, and usable on the device and the connection people really have. If it only works in ideal conditions, it does not work.' },
];

/* Photography. Temporary stock imagery, swappable for YBMA's own documentary photography by
   replacing the file. Sources and licences: src/photos/SOURCES.md. */
const photos = {
  homeHero: { file: 'home-hero.jpg', alt: 'Two colleagues working through something together on a laptop in a café workspace.', width: 1600, height: 1067 },
  homeTechnology: { file: 'home-technology.jpg', alt: 'A businesswoman on a call while reading information on her laptop.', width: 1600, height: 2400 },
  technologyHero: { file: 'technology-hero.jpg', alt: 'A professional working at a laptop, a planning board on the wall behind her.', width: 1600, height: 2400 },
};

const meta = {
  siteName: 'YBMA',
  legal: 'YBMA LTD',
  domain: 'https://ybmahq.com', // the public brand domain; used for canonical and Open Graph URLs
  year: 2026,
  // PLACEHOLDER: no registration number established. Omitted from the footer until supplied.
  rcNumber: { value: null, placeholder: PLACEHOLDER },
};

module.exports = { contact, nav, legalNav, capabilities, values, photos, meta, PLACEHOLDER };
