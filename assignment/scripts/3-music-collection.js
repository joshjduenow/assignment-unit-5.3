console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
const myCollection= [];

function addToCollection(myCollection, title, artist, yearPublished) {
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  myCollection.push(album);
  return album;
}
function showCollection(myCollection) {
  for (const album of myCollection) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}



addToCollection(myCollection, "Album1", "Artist1", 2020);
addToCollection(myCollection, "Album2", "Artist2", 2015);
addToCollection(myCollection, "Album3", "Artist1", 2018);
addToCollection(myCollection, "Album4", "Artist3", 2022);
addToCollection(myCollection, "Album5", "Artist2", 2010);
addToCollection(myCollection, "Album6", "Artist4", 2005);








// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
