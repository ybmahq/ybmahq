/* Small shared render helpers. No new visual language: these compose existing components. */

/* Photograph slot.
   Renders one image in the identity's crop (one full-height curve on one corner, or square).
   The file is temporary stock photography (src/photos/SOURCES.md). Replacing the file with YBMA's
   own documentary photograph swaps the image without touching the layout: the ratio, the crop and
   the one round corner are set here, not by the photograph. */
function photo({ file, alt, width, height }, { crop = 'bl', ratio = '4 / 5', className = '', eager = false, position = '' } = {}) {
  return `<figure class="s-photo y-crop--${crop} ${className}" style="--s-ratio:${ratio}">
  <img class="y-img" src="/assets/photos/${file}" alt="${alt}"${position ? ` style="object-position:${position}"` : ''} width="${width}" height="${height}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>
</figure>`;
}

module.exports = { photo };
