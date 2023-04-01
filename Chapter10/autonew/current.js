function getFullYear() {
  var year = this.getYear();
  if (year < 1000) year += 1900;
  return year;
}

if (!Date.getFullYear)
  Date.prototype.getFullYear = getFullYear;

function getMilliseconds() {
  var date = new Date(
    this.getFullYear(), this.getMonth(), this.getDate(),
    this.getHours(), this.getMinutes(), this.getSeconds(), 0
  );
  return this.getTime() - date.getTime();
}

if (!Date.getMilliseconds)
  Date.prototype.getMilliseconds = getMilliseconds;

var daysOfWeek = new Array(
  'Sunday','Monday','Tuesday','Wednesday',
  'Thursday','Friday','Saturday'
);

var monthsOfYear = new Array(
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
);

function y2k(number) {
  number = number - 0;
  return (number < 1000) ? number + 1900 : number;
}

function dayOfWeek(day,month,year) {
  var a = Math.floor((14 - month)/12);
  var y = year - a;
  var m = month + 12*a - 2;
  var d = (day + y + Math.floor(y/4) - Math.floor(y/100) +
           Math.floor(y/400) + Math.floor((31*m)/12)) % 7;
  return d;
}

function nths(day) {
  if (day == 1 || day == 21 || day == 31) return 'st';
  if (day == 2 || day == 22) return 'nd';
  if (day == 3 || day == 23) return 'rd';
  return 'th';
}

function formatFullDate(day,month,year) {
  var dow = dayOfWeek(day,month,year);
  return daysOfWeek[dow] + ' ' +
         day + nths(day) + ' ' +
         monthsOfYear[month-1] +' '+ year;
}

function padout(num) {
  return (num < 10) ? '0' + num : num;
}

function formatShortDate(day,month,year) {
  return padout(day) + '/' + padout(month) + '/' + year;
}

function formatShortDateUS(day,month,year) {
  return padout(month) + '/' + padout(day) + '/' + year;
}
