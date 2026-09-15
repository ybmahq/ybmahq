/* 404. Written into dist/404.html, which Vercel serves for any unknown route. The sixth easter
   egg: the wordmark arrives with a letter missing, lying on its side at the bottom of the page.
   Put it back (one quarter-turn, one cut) and the mark is whole again. The page is still gone. */
module.exports = ctx => ({
  route: '/404.html',
  title: 'Nothing here · YBMA',
  description: 'This page does not exist.',
  body: `
<section class="s-nf" id="s-nf">
  <div class="y-wrap s-nf__inner">
    <div class="s-nf__text">
      <p class="y-label">404</p>
      <h1 class="y-display s-nf__h" data-found="Found it. The page is still gone.">One letter is
      missing. So is this page.</h1>
      <p class="y-body s-lede s-nf__p" data-found="Thank you. The rest of the site is where it was.">Put
      it back if you like. The page will still be gone, but the rest of the site is where it was.</p>
      <div class="s-actions">
        <a class="y-btn" href="/">Start again</a>
        <a class="y-link" href="/contact/">Tell us what you were looking for</a>
      </div>
    </div>
    <div class="s-nf__stage">
      <span class="y-logo s-nf__mark" aria-hidden="true">${ctx.logo(ctx.YBMA, 'wordmark', { title: '' })}</span>
      <button class="y-logo s-nf__loose" type="button" aria-label="Put the missing letter back">${ctx.logo(ctx.YBMA, 'wordmark', { title: '' })}</button>
    </div>
  </div>
</section>
`,
});
