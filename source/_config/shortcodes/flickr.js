module.exports = function( user, id, source, width, height, title, caption ) {
  return `<figure class="flickr-item">
    <a data-flickr-embed="true" href="https://www.flickr.com/photos/${user}/${id}/">
      <img src="https://live.staticflickr.com/65535/${source}.jpg" width="${width}" height="${height}" alt="${title}">
    </a>
    <figcaption>
      <p id="photo-${id}">${caption}</p>
      <a aria-labelledby="photo-${id}" href="https://www.flickr.com/photos/${user}/${id}/">view on flickr</a>
    </figcaption>
  </figure>`;
};
