function dealHand(params) {

  var deck = params['deck'];
  var num = params['cards'] || 7;
  var hand = [];

  for (var i = 0; i < num; i++) {
    params['location'] = 'top';
    params = takeCard(params);
    hand.push(params['card']);
  }

  params['hand'] = hand;

  return params;
}

function takeCard(params) {
  var card;
  var deck = params['deck'];
  var location = params['location'];
  var random = Math.floor(Math.random() * deck.length);

  if (location > 0 && location < deck.length) 
    params = removeCard(params);
  else if (location == 'top') 
    params['card'] = deck.shift();
  else if (location == 'bottom')
    params['card'] = deck.pop();
  else {
    params['location'] = random;
    params = removeCard(params);
  }

  return params;
}

function removeCard(params) {
  var deck = params['deck'];
  var location = params['location'];
  var card, temp;

  temp = deck.splice(0, location);
  card = temp.pop();
  deck = temp.concat(deck);

  params['card'] = card;

  return params;

}
