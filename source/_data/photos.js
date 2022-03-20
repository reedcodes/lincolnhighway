const { DateTime } = require( 'luxon' );
const fetch        = require( '@11ty/eleventy-fetch' );

require( 'dotenv' ).config();

module.exports = async function() {

  const api_key = process.env.FLICKR_KEY;
  const flickr = {
    domain: 'https://www.flickr.com/',
    path: 'services/rest/',
    json: 'format=json&nojsoncallback=1',
    user: 'user_id=194396806%40N07',
    photos: 'method=flickr.people.getPhotos',
    content: 'content_type=1',
    extras: 'extras=description%2C+date_taken%2C+tags%2C+machine_tags%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o',
    number: 'per_page=500'
  };
  const url = `${ flickr.domain }${ flickr.path }?api_key=${ api_key }&${ flickr.json }&${ flickr.photos }&${ flickr.user }&${ flickr.content }&${ flickr.extras }&${ flickr.number }`;

  const json = await fetch( url, {
    duration: '1d',
    type: 'json'
  });

  let data = json.photos.photo.map( item => {
    item.title   = item.title;
    item.caption = item.description._content;
    item.path    = item.pathalias;
    item.id      = item.id;
    item.image   = item.url_l;
    item.width   = item.width_l;
    item.height  = item.height_l;
    item.date    = DateTime.fromFormat( item.datetaken, 'yyyy-MM-dd HH:mm:ss' ).toFormat( 'dd MMM yyyy' );

    return item;
  });

  return data;

};
