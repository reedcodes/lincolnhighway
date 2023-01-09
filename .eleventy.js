// Import 11ty nav plugin.
const eleventyNavigationPlugin = require( "@11ty/eleventy-navigation" );

// Import metagen plugin.
const metagen = require( "eleventy-plugin-metagen" );

// Import the favicon plugin.
const eleventyFaviconsPlugin = require("eleventy-plugin-gen-favicons");

// Import 11ty RSS plugin.
const eleventyRssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function( eleventyConfig ) {

  // Send assets from source to site.
  eleventyConfig.addPassthroughCopy( {
    "./.htaccess": "",
    "./source/_images/": "dist/images/",
    "./source/_webfonts/": "dist/webfonts/"
  } );

  // Add the 11ty nav plugin. This creates an 11ty navigation based on pages
  // in a collection.
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Add the metagen plugin. This creates a "meta" shortcode with options for
  // meta information, css and js links, and social info such as OpenGraph and
  // Twitter.
  eleventyConfig.addPlugin(metagen);

  // Add the favicon plugin.
  eleventyConfig.addPlugin(eleventyFaviconsPlugin, {
    "outputDir": "./site"
  });

  // Add the 11ty RSS plugin. This creates a feed that can then be available
  // for audience to subscribe to the blog in their favorite reader.
  eleventyConfig.addPlugin(eleventyRssPlugin, {
    posthtmlRenderOptions: {
      quoteStyle: 0
    }
  });

  eleventyConfig.addFilter( "getNewestCollectionItemDate", eleventyRssPlugin.getNewestCollectionItemDate );
  eleventyConfig.addFilter( "dateToRfc822", eleventyRssPlugin.dateToRfc822 );

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
  eleventyConfig.addAsyncShortcode( "image", require("./source/_config/shortcodes/image.js") );

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
