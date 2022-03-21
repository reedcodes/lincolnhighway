const { DateTime } = require( 'luxon' );
const fetch        = require( '@11ty/eleventy-fetch' );

require( 'dotenv' ).config();

module.exports = async function() {

  const api_key = process.env.FOURSQUARE_API_KEY;
  const client_id = process.env.FOURSQUARE_CLIENT_ID;
  const client_secret = process.env.FOURSQUARE_CLIENT_SECRET;
  const version = process.env.FOURSQUARE_VERSION;

  const user = '1988764';
  const url = `https://api.foursquare.com/v2/users/${ user }/lists?group=created&client_id=${ client_id }&client_secret=${ client_secret }&v=${ version }`;

  const json = await fetch( url, {
    duration: '1d',
    type: 'json'
  });

  console.log( json );

  let data = json.response.lists.items.map( item => {
    return item;
  });

  console.log( data );

  return data;

};
