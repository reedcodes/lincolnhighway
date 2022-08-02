// Import date methods.
const { DateTime } = require( "luxon" );

module.exports = function( dateObj ) {
  return DateTime
    .fromJSDate( dateObj )
    .toFormat( "d MMM yyyy" );
};