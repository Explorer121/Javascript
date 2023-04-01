var julian =
  new Array(0,31,59,90,120,151,181,212,243,273,304,334);
var julianLY =
  new Array(0,31,60,91,121,152,182,213,244,274,305,335);

function isLeapYear(year) {
  year = year - 0;
  if ((year/4)   != Math.floor(year/4))   return false;
  if ((year/100) != Math.floor(year/100)) return true;
  if ((year/400) != Math.floor(year/400)) return false;
  return true;
}

function Easter(Y) {
  var C = Math.floor(Y/100);
  var N = Y - 19*Math.floor(Y/19);
  var K = Math.floor((C - 17)/25);
  var I = C - Math.floor(C/4) -
    Math.floor((C - K)/3) + 19*N + 15;
  I = I - 30*Math.floor((I/30));
  I = I - Math.floor(I/28)*
    (1 - Math.floor(I/28) * Math.floor(29/(I + 1)) *
    Math.floor((21 - N)/11));
  var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
  J = J - 7*Math.floor(J/7);
  var L = I - J;
  var M = 3 + Math.floor((L + 40)/44);
  var D = L + 28 - 31*Math.floor(M/4);

  this.day = D;
  this.month = M;
  this.year = Y;
  this.date = formatFullDate(D,M,Y)
}

function daysInYear(year) {
  if (isLeapYear(year)) return 366; else return 365;
}

function addDays(day,month,year,addition) {
  if (isLeapYear(year))
    var number = day + julianLY[month-1] + addition;
  else
    var number = day + julian[month-1] + addition;

  var days = daysInYear(year);
  
  while (number > days) {
    number -= days;
    days = daysInYear(++year);
  }

  while (number < 1) {
    days = daysInYear(--year);
    number += days;
  }

  month = 1;

  if (isLeapYear(year)) {
    while (number > julianLY[month-1]) { month++; }
    day = number - julianLY[--month-1];
  }
  else {
    while (number > julian[month-1]) { month++; }
    day = number - julian[--month-1];
  }

  this.day = day;
  this.month = month;
  this.year = year;
  this.date = formatFullDate(day,month,year)
}
