// const { DateTime } = require( 'luxon' );
// const fetch        = require( '@11ty/eleventy-fetch' );
//
// require( 'dotenv' ).config();
//
// module.exports = async function() {
//
//   const api_key = process.env.FOURSQUARE_API_KEY;
//   const client_id = process.env.FOURSQUARE_CLIENT_ID;
//   const client_secret = process.env.FOURSQUARE_CLIENT_SECRET;
//   const code = process.env.FOURSQUARE_CODE;
//   const version = process.env.FOURSQUARE_VERSION;
//
//   const auth_url = `https://foursquare.com/oauth2/access_token?client_id=${ client_id }&client_secret=${ client_secret }&grant_type=authorization_code&redirect_uri=https%3A%2F%2Flincolnhighwayjournal.com%2F&code=${ code }`;
//
//   const auth = await fetch( auth_url, {
//     duration: '1d',
//     type: 'json'
//   });
//
//   const oauth_token = auth.access_token;
//
//   console.log( oauth_token );
//
//   const user = '1988764';
//   const start_date = DateTime
//     .fromFormat( '2022-01-01', 'yyyy-MM-dd')
//     .toSeconds();
//
//   console.log( start_date );
//
//   const url = `https://api.foursquare.com/v2/users/${ user }/checkins?&oauth_token=${ oauth_token }&v=${ version }&afterTimestamp=${ start_date}`;
//
//   const json = await fetch( url, {
//     duration: '1d',
//     type: 'json'
//   });
//
//   console.log( json );
//
//   let data = json.response.lists.items.map( item => {
//     return item;
//   });
//
//   console.log( data );
//
//   return data;
//
// };
