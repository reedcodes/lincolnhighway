module.exports = function( photo ) {
  return `<figure class="photo">
    <a href="https://www.flickr.com/photos/${ photo.path }/${ photo.id }/">
      <img src="${ photo.image }" width="${ photo.width }" height="${ photo.height }" />
    </a>
    <figcaption>
      <p><b>${ photo.title }, taken on ${ photo.date }</b></p>
      <p>${ photo.caption }</p>
    </figcaption>
  </figure>`;
};
