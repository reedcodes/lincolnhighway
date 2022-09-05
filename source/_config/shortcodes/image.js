// Import 11ty image plugin.
const Image = require( "@11ty/eleventy-img" );

// Configure the image plugin.
// https://www.11ty.dev/docs/plugins/image/
// https://gfscott.com/blog/eleventy-img-without-central-image-directory/

module.exports = async function( src, alt, flickr=false, sizes="100vw" ) {
  if(alt === undefined) {
    throw new Error(`Missing \`alt\` on: ${src}`);
  }

  // Define the image source. This will depend on where the image is from:
  // a local file within the blog post, or an external flickr image.
  let imageSrc;

  // The default for flickr (set in parameters) is false. This is only set if
  // the source of the image comes from flickr.
  if(flickr) {
    imageSrc = src;
  }

  // The default for the image source is a local file within the blog post.
  // So, if it's not a flickr image (default), then we use the following.
  else {
    // The input path always ends with `xx.md` as the post's filename. We can
    // slice this off to get the proper path for the image's directory.
    let inputDirectory = this.page.inputPath.slice(0, -5);
    
    // Create the source path of the image by joining the updated input
    // directory with the filename of the image itself.
    imageSrc = `${inputDirectory}/${src}`;
  }

  // Images have an output directory based on which blog post they are
  // associated with, so that the images live within the same directory as their
  // posts, for easy finding. The output path always ends with `index.html` as
  // the post's filename. We can slice that off to get the proper path for the
  // generated image's directory.
  let outputDirectory = this.page.outputPath.slice(0, -10);

  // Set the metadata for this image, that 11ty will generate.
  let metadata = await Image(imageSrc, {
    widths: [300, 600, 900, 1200],
    formats: ['webp', 'jpeg'],
    outputDir: outputDirectory,
    urlPath: this.page.url,
  });

  let lowsrc = metadata.jpeg[0];
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  // Return the image. The output code is a `picture` with different source
  // files, depending on the browser's size and what it supports.
  return `\n\n<picture>
    ${Object.values(metadata).map(imageFormat => {
      return `<source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(', ')}" sizes="${sizes}">`;
    }).join('\n')}
      <img
        src="${lowsrc.url}"
        width="${highsrc.width}"
        height="${highsrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async">
    </picture>\n\n`;
};
