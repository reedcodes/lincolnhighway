module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy( {
    "./node_modules/@fortawesome/fontawesome-free/webfonts/": "assets/webfonts/"
  } );

  eleventyConfig.addShortcode( 'fa', ( icon ) => {
    return `<span class="fas fa-${icon}" aria-hidden="true"></span>`;
  } );

  return {
    dir: {
      input: "source",
      data: "_data",
      layouts: "_layouts",
      includes: "_includes",
      output: "site"
    },
  };
};
