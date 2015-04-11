function cutDeck(params) {
  var top, bottom;
  var deck = params['deck'];
  var size = deck.length;
  var middle = size/2;
  var quarter = size/4;
  
// Estimating a random cut location to 
// be somewhere in the center half of
// the deck.
  var random = Math.ceil(Math.random() * middle) + quarter;

  if (params['location'] > 0 && params['location'] < deck.length)
    var location = params['location'] - 1;
  else
    var location = random;
   
  top = deck.slice(0, location);
  console.log(top);
  console.log(top.constructor);
  bottom = deck.slice(location, size);
  deck = bottom.concat(top);

  return deck;
}
