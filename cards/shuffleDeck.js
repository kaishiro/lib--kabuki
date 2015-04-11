function shuffleDeck(params) {
  var deck = params['deck'];
  var m = deck.length, t, i;

    while (m) {
      
      i = Math.floor(Math.random() * m--);
      
      t = deck[m];
      deck[m] = deck[i];
      deck[i] = t;
    }
      
    return deck;
}
