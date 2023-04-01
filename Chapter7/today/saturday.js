function nthDay(nth,weekday,month,year) {
  if (nth > 0)
    return (nth-1)*7 + 1 +
      (7 + weekday - dayOfWeek((nth-1)*7 + 1,month,year)-1)%7;
  if (isLeapYear(year))
    var days = daysOfMonthLY[month];
  else
    var days = daysOfMonth[month];

  return days -
    (dayOfWeek(days,month + 1,year) - weekday + 7)%7;
}

var sun=1,mon=2,tue=3,wed=4,thu=5,fri=6,sat=7;

var jan=1,feb=2,mar=3,apr=4,may=5,jun=6,
    jul=7,aug=8,sep=9,oct=10,nov=11,dec=12;

var first=1,second=2,third=3,fourth=4,fifth=5,last=-1;
