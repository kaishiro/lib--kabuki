function revealCard(params) {
  var deck = params['deck'];
  var location = params['location'];
  var card;
  var random = Math.floor(Math.random() * deck.length);

  if (location == 'top') 
    card = deck[0];
  else if (location == 'bottom')
    card = deck[deck.length];
  else if (location > 0)
    card = deck[location - 1];
  else
    card = deck[random];

  params['card'] = card;

  return params;

}
    

