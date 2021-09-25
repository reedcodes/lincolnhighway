module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy( {
    "./node_modules/@fortawesome/fontawesome-free/webfonts/": "assets/webfonts/"
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
