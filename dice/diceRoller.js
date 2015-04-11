function rollDie(params) {
  var roll;

  if (params['dice'] < 4) {
    console.log('Sides are less than 4. Default set to 6.');
    var sides = 6;
  } else
    var sides = params['dice'];

  roll = Math.random() * sides;
  roll = Math.ceil(roll);

  return roll;
}

function rollDieSet(params) {
  var set = params['dice'];
  var roll, rolls = [];

  for (var i = 0; i < set.length; i++) {
    if (set[i][1]) {
      var single = { dice: set[i] };
      roll = roller(single);
    } else {
      var die = { dice: set[i] };
      roll = rollDie(die);
    }

    rolls.push(roll);
  }

  return rolls;
}

function roller(params) {
  var dice = params['dice'];
  var times = params['times'];
  var rolls = [];

  if (times) {
    for (var i = 0; i < times; i++) {
      var single = { dice: dice };
      rolls.push(roller(single));
    }
    return rolls;
  }

  if (dice[0])
    rolls = rollDieSet(params);
  else
    rolls = rollDie(params);

  return rolls;
}
