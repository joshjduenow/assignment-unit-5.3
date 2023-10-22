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
function findByArtist(myCollection, artist) {
  const results = [];
  for (const album of myCollection) {
    if (album.artist === artist) {
      results.push(album);
    }
  }
  return results;
}


addToCollection(myCollection, "Positive Songs for Negative People", "Frank Turner", 2015);
addToCollection(myCollection, "The '59 Sound", "The Gaslight Anthem", 2009);
addToCollection(myCollection, "My Arms, Your Hearse", "Opeth", 1998);
addToCollection(myCollection, "...To the Beat of a Dead Horse", "Touche' Amore'", 2009);
addToCollection(myCollection, "Nola", "Down", 1995);
addToCollection(myCollection, "Unplugged", "Nirvana", 1994);

console.log("Albums in the collection:");
showCollection(myCollection);

const artistToFind = "Nirvana";

console.log(`Albums by ${artistToFind}:`);
const artist1Albums = findByArtist(myCollection, artistToFind);
showCollection(artist1Albums);


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
