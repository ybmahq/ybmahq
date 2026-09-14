/* 404. Written into dist/404.html, which Vercel serves for any unknown route. The sixth easter
   egg: a page that says almost nothing, in the identity. */
module.exports = ctx => ({
  route: '/404.html',
  title: 'Nothing here · YBMA',
  description: 'This page does not exist.',
  body: `
<section class="s-hero s-hero--page">
  <div class="y-wrap s-hero__inner s-hero__inner--wide">
    <div class="s-hero__text">
      <p class="y-label">404</p>
      <h1 class="y-display">Nothing here. Everything else is.</h1>
      <p class="y-body s-lede">The page you asked for doesn't exist, or it moved. The rest of the
      site is where it was.</p>
      <div class="s-actions">
        <a class="y-btn" href="/">Start again</a>
        <a class="y-link" href="/contact/">Tell us what you were looking for</a>
      </div>
    </div>
  </div>
</section>
`,
});
