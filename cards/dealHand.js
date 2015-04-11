function dealHand(deck, num) {

  var num = num || 7;
  var hand = [];

  for (var i = 0; i < num; i++) {
    hand.push(deck.shift());
  }

  return [deck, hand];
}
