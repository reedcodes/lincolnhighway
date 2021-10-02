module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy( {
    "./node_modules/@fortawesome/fontawesome-free/webfonts/": "assets/webfonts/"
  } );
  eleventyConfig.addPassthroughCopy( "./source/assets/images/" );

  eleventyConfig.addPairedShortcode( 'flickrgrid', ( content ) => {
    return `<div class="flickr-grid">${content}</div>`;
  } );

  eleventyConfig.addShortcode( 'flickr', ( user, id, source, width, height, title, caption ) => {
    return `<figure class="flickr-item">
      <a data-flickr-embed="true" href="https://www.flickr.com/photos/${user}/${id}/">
        <img src="https://live.staticflickr.com/65535/${source}.jpg" width="${width}" height="${height}" alt="${title}">
      </a>
      <figcaption>
        <p id="photo-${id}">${caption}</p>
        <a aria-labelledby="photo-${id}" href="https://www.flickr.com/photos/${user}/${id}/">view on flickr</a>
      </figcaption>
    </figure>`;
  } );

  eleventyConfig.addShortcode( 'icon', ( value ) => {
    const style = value.style ? value.style : "fas";
    return `<span class="${style} fa-${value.name}" aria-hidden="true"></span>`;
  } );

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "source",
      data: "_data",
      includes: "_includes",
      output: "site"
    },
  };
};
