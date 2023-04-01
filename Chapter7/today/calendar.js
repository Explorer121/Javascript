var moy = new Array(
  'January','February','March',
  'April','May','June','July',
  'August','September','October',
  'November','December'
);

var daysOfMonth = new Array(
  31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
);

var daysOfMonthLY = new Array(
  31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
);

var dow = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat',
                    'Sun','Mon','Tue','Wed','Thu','Fri');

var size = 'width="50" height="30"';
var border = 'border="1"';

function isLeapYear(num) {
  if (((num % 4 == 0) && (num % 100 != 0)) || (num % 400 == 0))
    return true;
  return false;
}

function CalendarSelect(Month,Year, offset) {
  if (offset == null) offset = 0;

  if (window.changeMonth) { }
  else {
    alert('A changeMonth() function has not been defined');
    return '';
  }

  if (window.changeYear) { }
  else {
    alert('A changeYear() function has not been defined');
    return '';
  }

  if (window.changeDay) { }
  else {
    alert('A changeDay() function has not been defined');
    return '';
  }

  var output = '';

  output += '<form name="Cal">';
  output += CalendarHead(Month,Year,true);
  output += CalendarMonth(Month,Year,offset);
  output += '</form>';
  
  return output;
}

function CalendarHead(Month,Year,Select) {
  var output = '';

  output +=
    '<table cellspacing="0" class="cal">' +
    '<tr><td align="left" width="100%" class="head">' +
    moy[Month-1] + ' ' + Year +
    '</td>';
    
  if (Select) {
    
    output += '<td width="50%" align="right">' +
    '<select name="Month" onChange="CalMonth()">';

    for (month=1; month<=12; month++) {
      output += '<option value="' + month + '"';
      if (month == Month) output += ' selected';
      output += '>' + moy[month-1] + '</option>';
    }

    output += '</select>' +
      '<select name="Year" onChange="CalYear();">';

    for (year=1900; year<=2100; year++) {
      output += '<option value="' + year + '"';
      if (year == Year) output += ' selected';
      output += '>' + year + '</option>';
    }

    output += '</select>';
  }
  
  output += '</td></tr></table>';
  
  return output;
}

function CalendarMonth(M,Y,offset) {
  if (offset == null) offset = 0;

  var startDay = dayOfWeek(1,M,Y);

  if (startDay < offset) startDay += 7;

  var days = daysOfMonth;
  if (isLeapYear(Y)) days = daysOfMonthLY;

  var output = '';

  output +=
    '<table ' + border + ' cellpadding="0" class="cal"><tr>';

  for (var i=0; i<7; i++)
    output += '<td ' + size + ' class="days">' +
      dow[i + offset] + '</td>';

  output += '</tr><tr>';

  var column = 0;
  var lastM = M - 1;
  if (lastM == 0) lastM = 12;

  for (var i=0+offset; i<startDay; i++, column++)
    output += '<td ' + size + ' class="grey">' +
      (days[lastM-1]-startDay+i+1) + '</td>';

  for (var i=1; i<=days[M-1]; i++, column++) {
    var style = ' class="links"';
    if (day == i && month == M && year == Y)
      style = ' class="today"';
    if (window.changeDay)
      output += '<td ' + size + '>' +
        '<a href="javascript:CalDay('+i+','+(M)+','+Y+')"' +
        style + '>' + i + '</a></td>';
    else
      output += '<td ' + size + style + '>' + i + '</td>';

    if (column == 6) {
      output += '</tr><tr>';
      column = -1;
    }
  }

  if (column > 0) {
    for (var i=1; column<7; i++, column++)
      output += '<td ' + size + ' class="grey">' + i + '</td>';
  }

  output += '</tr></table>';

  return output;
}

function getAnOptionValue(what) {
  return what.options[what.options.selectedIndex].value;
}

function CalMonth() {
  CalendarMonth = getAnOptionValue(document.Cal.Month) - 0;
  changeMonth(CalendarMonth);
}

function CalYear() {
  CalendarYear = getAnOptionValue(document.Cal.Year) - 0;
  changeYear(CalendarYear);
}

function CalDay(day,month,year) {
  CalendarDay = day;
  CalendarMonth = month;
  CalendarYear = year;
  changeDay(CalendarDay,CalendarMonth,CalendarYear);  
}

var CalendarMonth;
var CalendarYear;
var CalendarDay;
