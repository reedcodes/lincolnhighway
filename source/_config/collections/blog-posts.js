module.exports = function( collection ) {
  return [...collection.getFilteredByGlob( "./source/blog/post/*/*.md" )].reverse();
};
