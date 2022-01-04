module.exports = function( collection ) {
  return [...collection.getFilteredByGlob( "./source/blog/*/*.md" )].reverse();
};
