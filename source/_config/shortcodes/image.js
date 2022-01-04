module.exports = function( source, alt ) {
  if( !source.includes('http') ) {
    source = '/dist/images/' + source;
  }

  return `<img src="${source}" width="1600" height="900" alt="${alt}">`;
};
