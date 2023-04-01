var daysOfMonth = new Array(
  31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
);

var daysOfMonthLY = new Array(
  31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
);
function isLeapYear(year) {
  year = year - 0;
  if ((year/4)   != Math.floor(year/4))   return false;
  if ((year/100) != Math.floor(year/100)) return true;
  if ((year/400) != Math.floor(year/400)) return false;
  return true;
}

function isValidDate(day, month, year) {
  day = day - 0; month = month - 0; year = year - 0;
  if ((isLeapYear(year) && day > daysOfMonthLY[month-1]) ||
     (!isLeapYear(year) && day > daysOfMonth[month-1]))
    return false;
  else
    return true;
}