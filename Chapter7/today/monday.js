var child = new Array(
  'is bonny and blithe and good and gay',
  'is fair of face',
  'is full of grace',
  'is full of woe',
  'has far to go',
  'is loving and giving',
  'works hard for a living'
);

function childOfWeek(dayofweek) {
   return daysOfWeek[dayofweek] + '\'s child ' +
          child[dayofweek];
}
