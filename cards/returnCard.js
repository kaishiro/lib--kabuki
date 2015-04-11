function returnCard(params) {
  var deck = params['deck'];
  var card = params['card'];
  var location = params['location'];
  var random = Math.floor(Math.random() * deck.length);

  if (location == 'top') 
    deck.unshift(card);
  else if (location == 'bottom') 
    deck.push(card);
  else if (location > 0 && location < deck.length) 
    deck = insertCard(params);
  else {
    params['location'] = random;
    deck = insertCard(params);
  }

  return deck;

}

function insertCard(params) {
  var deck = params['deck'];
  var card = params['card'];
  var location = params['location'];

  var top = deck.splice(0, location, card);
  deck = top.concat(deck);
    
  return deck;
}
