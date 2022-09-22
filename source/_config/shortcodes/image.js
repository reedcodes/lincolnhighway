// Import 11ty image plugin.
const path = require("path");
const Image = require( "@11ty/eleventy-img" );

// Configure the image plugin.
// https://www.11ty.dev/docs/plugins/image/
// https://gfscott.com/blog/eleventy-img-without-central-image-directory/

module.exports = async function( image ) {
  if(image.alt === undefined) {
    throw new Error(`Missing \`alt\` on: ${image.src}`);
  }

  // Define the image source. This will depend on where the image is from:
  // a local file within the blog post, or an external flickr image.
  let imageSrc;

  // The default for flickr (set in parameters) is false. This is only set to
  // true when the source of the image comes from flickr.
  if( image.src.includes('staticflickr') ) {
    imageSrc = image.src;
  }

  // The default for the image source is a local file within the blog post.
  // So, if it's not a flickr image (default), then we use the following.
  else {
    // The input path always ends with `xx.md` as the post's filename. We can
    // slice this off to get the proper path for the image's directory.
    let inputDirectory = this.page.inputPath.slice(0, -5);
    
    // Create the source path of the image by joining the updated input
    // directory with the filename of the image itself.
    imageSrc = `${inputDirectory}/${image.src}`;
  }

  // Images have an output directory based on which blog post they are
  // associated with, so that the images live within the same directory as their
  // posts, for easy finding. The output path always ends with `index.html` as
  // the post's filename. We can slice that off to get the proper path for the
  // generated image's directory.
  const outputDirectory = this.page.outputPath.slice(0, -10);

  // Set the metadata for this image, that 11ty will generate.
  const metadata = await Image(imageSrc, {
    widths: [300, 600, 900, 1200],
    formats: ['webp', 'jpeg'],
    outputDir: outputDirectory,
    urlPath: this.page.url,
    filenameFormat: function (id, imageSrc, width, format, options) {
      const extension = path.extname(imageSrc);
      const name = path.basename(imageSrc, extension);
  
      return `${name}-${width}w.${format}`;
    }
  });

  const lowsrc = metadata.jpeg[0];
  const highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  const image_alignment = image.align ? `align-${image.align}` : "";

  const picture = `\n\n<picture>
  ${Object.values(metadata).map(imageFormat => {
    return `<source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(', ')}" sizes="100vw">`;
  }).join('\n')}
    <img
      src="${lowsrc.url}"
      class="image ${image_alignment}"
      width="${highsrc.width}"
      height="${highsrc.height}"
      alt="${image.alt}"
      loading="lazy"
      decoding="async">
  </picture>\n\n`;

  // Return the image. The output code is a `picture` with different source
  // files, depending on the browser's size and what it supports.
  return picture;
};
