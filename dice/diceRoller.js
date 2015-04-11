function rollDie(sides) {

  var roll;
  var sides = sides || 6;

  roll = Math.random() * sides;
  roll = Math.ceil(roll);

  return roll;
}

function rollDieSet(set) {
  var roll, rolls = [];

  for (var i = 0; i < set.length; i++) {
    if (set[i][1]) 
      roll = rollDice(set[i][0], set[i][1]);
    else 
      roll = rollDie(set[i]);

    rolls.push(roll);
  }

  return rolls;
}

function roller(dice, times) {
  var rolls = [];

  if (times) {
    for (var i = 0; i < times; i++) {
      rolls.push(roller(dice));
    }
    return rolls;
  }

  if (dice[0])
    rolls = rollDieSet(dice);
  else
    rolls = rollDie(dice);

  return rolls;
}
