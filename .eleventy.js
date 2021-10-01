module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy( {
    "./node_modules/@fortawesome/fontawesome-free/webfonts/": "assets/webfonts/"
  } );
  eleventyConfig.addPassthroughCopy( "./source/assets/images/" );

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
