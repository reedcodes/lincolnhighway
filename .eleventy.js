// Import 11ty nav plugin.
const eleventyNavigationPlugin = require( "@11ty/eleventy-navigation" );

module.exports = function( eleventyConfig ) {

  // Send assets from source to site.
  eleventyConfig.addPassthroughCopy( {
    "./node_modules/@fortawesome/fontawesome-free/webfonts/": "dist/webfonts/",
    "./source/_images/": "dist/images/"
  } );

  // Add the 11ty nav plugin.
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Add date filters.
  eleventyConfig.addFilter( "shortDate", require("./source/_config/filters/short-date.js") );
  eleventyConfig.addFilter( "longDate", require("./source/_config/filters/long-date.js") );

  // Add blog glob.
  eleventyConfig.addCollection( "blogPosts", require("./source/_config/collections/blog-posts.js") );
  eleventyConfig.addCollection( "categoryList", require("./source/_config/collections/category-list.js") );
  eleventyConfig.addCollection( "categories", require("./source/_config/collections/categories.js") );

  // Shortcodes.
  eleventyConfig.addShortcode( "flickr", require("./source/_config/shortcodes/flickr.js") );
  eleventyConfig.addShortcode( "icon", require("./source/_config/shortcodes/icon.js") );

  // 11ty config options.
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
