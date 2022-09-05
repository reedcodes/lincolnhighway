module.exports = function( collection ) {
  const categoryList = new Set();

  collection.getAll().forEach( (item) => {
    typeof item.data.category === "string" && categoryList.add( item.data.category )
  });

  return ( [...categoryList] );
};
