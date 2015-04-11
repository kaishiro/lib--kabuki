function cutDeck(deck, location) {
  var top, bottom;
  var size = deck.length;
  var middle = size/2;
  var quarter = size/4;

// Estimating a random cut location to 
// be somewhere in the center half of
// the deck.
  var location = location || Math.ceil(Math.random() * middle) + quarter;

  top = deck.slice(0, location);
  bottom = deck.slice(location, size);
  deck = bottom.concat(top);

  return deck;
}
