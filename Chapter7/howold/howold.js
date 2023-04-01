function HowOld(day,month,year,Day,Month,Year) {
  var years = Year - year, months = days = 0;

  if (Month >= month) months = Month - month;
  else { years--; months = Month + 12 - month; }

  if (Day >= day) days = Day - day;
  else {
    if (months > 0) months--;
    else { years--; months+=11; }
    days = Day + 31 - day;
  }

  if (years < 0) return '';
  if ((years == 0) && (months == 0) && (days == 0)) return '';

  return years  + ' years, ' +
         months + ' months, ' +
         days   + ' days';
}
