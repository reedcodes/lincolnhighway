module.exports = function( value ) {
  const style = value.style ? value.style : "fas";
  return `<span class="${style} fa-${value.name}" aria-hidden="true"></span>`;
};
