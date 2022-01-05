module.exports = function( id, source, title ) {
  return `<a data-flickr-embed="true" href="https://www.flickr.com/photos/lincolnhighwayjournal/albums/${id}/">
      <img src="https://live.staticflickr.com/${source}.jpg" width="1600" height="900" alt="">
    </a>
    <a href="https://www.flickr.com/photos/lincolnhighwayjournal/albums/${id}/">${title}</a>`;
};
