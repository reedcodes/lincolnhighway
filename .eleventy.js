module.exports = function (eleventyConfig) {
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
