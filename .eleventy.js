// Import 11ty nav plugin.
const eleventyNavigationPlugin = require( "@11ty/eleventy-navigation" );

// Import markdown-it.
const markdownIt = require("markdown-it");

module.exports = function( eleventyConfig ) {

  // Send assets from source to site.
  eleventyConfig.addPassthroughCopy( {
    "./source/_images/": "dist/images/",
    "./source/_webfonts/": "dist/webfonts/"
  } );

  // Add the 11ty nav plugin.
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Configure markdown-it.
  let markdownItOptions = {
    typographer: true,
    quotes: '“”‘’'
  };

  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));

  // Add blog glob.
  eleventyConfig.addCollection( "blogPosts", require("./source/_config/collections/blog-posts.js") );
  eleventyConfig.addCollection( "blogPostsFirst", require("./source/_config/collections/blog-posts-first.js") );
  eleventyConfig.addCollection( "categories", require("./source/_config/collections/categories.js") );
  eleventyConfig.addCollection( "categoryList", require("./source/_config/collections/category-list.js") );
  eleventyConfig.addCollection( "tagList", require("./source/_config/collections/tag-list.js") );

  // Add date filters.
  eleventyConfig.addFilter( "simpleDate", require("./source/_config/filters/simple-date.js") );
  eleventyConfig.addFilter( "shortDate", require("./source/_config/filters/short-date.js") );
  eleventyConfig.addFilter( "longDate", require("./source/_config/filters/long-date.js") );

  // Add year shortcode.
  eleventyConfig.addShortcode( "year", require("./source/_config/shortcodes/year.js") );

  // Add the image shortcode, from the 11ty image plugin.
  eleventyConfig.addNunjucksAsyncShortcode( "image", require("./source/_config/shortcodes/image.js") );

  // Remove the console output of all generated files.
  eleventyConfig.setQuietMode(true);

  // 11ty config options.
  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "source",
      data: "_data",
      includes: "_includes",
      output: "site"
    },
  };
};
