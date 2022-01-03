// Import date methods.
  const { DateTime } = require( 'luxon' );

// Import 11ty nav plugin.
const eleventyNavigationPlugin = require( '@11ty/eleventy-navigation' );

// Import 11ty date plugin.
const pluginDate = require('eleventy-plugin-date');

module.exports = function( eleventyConfig ) {

  // Send assets from source to site.
  eleventyConfig.addPassthroughCopy( {
    "./node_modules/@fortawesome/fontawesome-free/webfonts/": "dist/webfonts/",
    "./source/_images/": "dist/images/"
  } );

  // Add the 11ty nav plugin.
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Add date filter.
  eleventyConfig.addFilter( 'readDate', ( dateObj ) => {
    return DateTime
      .fromJSDate( dateObj, { setZone: 'America/New_York' } )
      .toFormat( 'EEEE, MMMM d, yyyy' );
  });

  // Add category collection.
  eleventyConfig.addCollection( 'category', ( collection ) => {
    return collection.getAll().filter( (post) => post.data.category );
  });

  // Flickr grid (wrapper) shortcode.
  eleventyConfig.addPairedShortcode( 'flickrgrid', ( content ) => {
    return `<div class="flickr-grid">${content}</div>`;
  } );

  // Flickr item shortcode.
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

  // FontAwesome icon shortcode.
  eleventyConfig.addShortcode( 'icon', ( value ) => {
    const style = value.style ? value.style : "fas";
    return `<span class="${style} fa-${value.name}" aria-hidden="true"></span>`;
  } );

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
