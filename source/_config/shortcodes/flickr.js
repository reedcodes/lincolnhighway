module.exports = function( id, source, alt, embed ) {
  return `<figure class="flickr">
    <a data-flickr-embed="${embed}" href="https://www.flickr.com/photos/lincolnhighwayjournal/${id}/">
      <img src="https://live.staticflickr.com/${source}.jpg" width="1600" height="900" alt="${alt}">
    </a>
  </figure>`;
};
