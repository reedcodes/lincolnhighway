// Import date methods.
const {DateTime} = require("luxon");

module.exports = function(dateObj) {
  return DateTime
    .fromISO(dateObj)
    .toFormat("EEEE d MMMM yyyy ' at ' t '('ZZZZ')'");
};