function Zodiac(day, sign, symbol, birthstone, quality) {
  this.day = day;
  this.sign = sign;
  this.symbol = symbol;
  this.birthstone = birthstone;
  this.quality = quality;
}

function setZodiac(day, sign, symbol, birthstone, quality) {
  myZodiac[zodiacIndex++] =
    new Zodiac(day, sign, symbol, birthstone, quality);
}

var zodiacIndex = 0;
var myZodiac = new Array();

setZodiac(20,'Capricorn','Goat','Garnet','Constancy');
setZodiac(19,'Aquarius','Water Bearer','Amethyst','Sincerity');
setZodiac(
  21,'Pisces','Fishes','Aquamarine, Bloodstone','Courage');
setZodiac(21,'Aries','Ram','Diamond','Innocence');
setZodiac(21,'Taurus','Bull','Emerald','Love, success');
setZodiac(
  21,'Gemini','Twins','Pearl, Alexandrite, Moonstone','Health'
);
setZodiac(22,'Cancer','Crab','Ruby','Contentment');
setZodiac(
  22,'Leo','Lion','Peridot, Sardonyx','Married happiness');
setZodiac(22,'Virgo','Virgin','Sapphire','Clear thinking');
setZodiac(23,'Libra','Balance','Opal, Tourmaline','Hope');
setZodiac(22,'Scorpio','Scorpion','Topaz','Fidelity');
setZodiac(
  21,'Sagittarius','Archer','Turquoise, Zircon','Prosperity');

function starSign(day,month) {
  var zodiac = month;
  if (day < myZodiac[month-1].day) zodiac--
  if (zodiac==12) zodiac=0;
  return zodiac;
}

function starDateRange(day,month,year) {
  var beginYear = endYear = year;
  var beginMonth = endMonth = month;

  if (day < myZodiac[month-1].day)
    beginMonth--; else endMonth++;
  
  if (beginMonth == 0) {
    beginMonth = 12; beginYear--;
  }
  else if (endMonth == 13) {
    endMonth = 1; endYear++;
  }

  beginDay = myZodiac[beginMonth-1].day;
  endDay = myZodiac[endMonth-1].day - 1;

  return formatFullDate(beginDay,beginMonth,beginYear) +
         ' - ' +
         formatFullDate(endDay,endMonth,endYear);
}
