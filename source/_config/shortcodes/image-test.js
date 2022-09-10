const path = require("path");
const Image = require("@11ty/eleventy-img");

module.exports = function(src, alt, flickr=false, sizes="100vw") {

  let inputDirectory = this.page.inputPath.slice(0, -5);
  let imageSrc = `${inputDirectory}/${src}`;

  let outputDirectory = this.page.outputPath.slice(0, -10);

  let options = {
    widths: [300, 600, 900, 1200],
    formats: ['webp', 'jpeg'],
    outputDir: outputDirectory,
    urlPath: this.page.url,
    filenameFormat: function (id, imageSrc, width, format, options) {
      const extension = path.extname(imageSrc);
      const name = path.basename(imageSrc, extension);
      return `${name}-${width}w.${format}`;
    }
  };

  // generate images, while this is async we don’t wait
  Image(imageSrc, options);

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // get metadata even the images are not fully generated
  let metadata = Image.statsSync(imageSrc, options);

  return Image.generateHTML(metadata, imageAttributes);

}
