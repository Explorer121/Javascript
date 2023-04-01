function Event(day,month,what) {
  this.day = day;
  this.month = month;
  this.what = what;
}

function setEvent(day,month,what) {
  myEvent[eventIndex++] = new Event(day,month,what);
}

var eventIndex = 0;
var myEvent = new Array();

setEvent( 1, 1,'Mary - Mother of God');
setEvent( 1, 1,'New Year\'s Day');
setEvent( 2, 1,'Bank Holiday - Japan');
setEvent( 2, 1,'Cassé Gâteau - Voudun festival');
setEvent( 3, 1,'Cassé Gâteau - Voudun festival');
setEvent( 3, 1,'Bank Holiday - Japan');
setEvent( 4, 1,'Cassé Gâteau - Voudun festival');
setEvent( 6, 1,'Tirer Gâteau (Les rois) - Voudun festival');
setEvent( 6, 1,'Epiphany');
setEvent(31, 1,'Oimelc, Brigid or Brigit, Imbolc, Candlemas or February Eve');
setEvent( 2, 2,'Presentation of Christ in the Temple');
setEvent( 2, 2,'Groundhog Day');
setEvent(11, 2,'National Foundation Day (Kenkoku-kinen-no-hi - Japan)');
setEvent(12, 2,'Lincoln\'s Birthday');
setEvent(14, 2,'Valentine\'s Day');
setEvent(22, 2,'Washington\'s Birthday');
setEvent(25, 2,'Norriture Rituelle des sources têt d\' l\'eau - Voudun festival');
setEvent(29, 2,'Leap Year\'s Day');
setEvent(14, 3,'Accession of Guru Har Rai - Sikh Festival');
setEvent(16, 3,'Loco Davi (manger du bois rituel) - Voudun festival');
setEvent(17, 3,'St. Patrick\'s Day');
setEvent(19, 3,'St Joseph Expression de la juridiction Legba - Voudun festival');
setEvent(19, 3,'St. Joseph');
setEvent(19, 3,'Death of Guru Hargobind - Sikh Festival');
setEvent(20, 3,'Legba Zaou - Voudun festival');
setEvent(21, 3,'Ostara or Spring Equinox1');
setEvent(21, 3,'Bahá\'í New Year (Bahá\'í or Badi calendar)');
setEvent(25, 3,'Annunciation');
setEvent( 1, 4,'April Fools\'s Day');
setEvent(15, 4,'Tax Day');
setEvent(16, 4,'Death of Guru Angad Dev, Accession of Guru Amar Das, Death of Guru Harkrishan, Accession of Guru Tegh Bahadur');
setEvent(18, 4,'Birth of Guru Angad Dev, Birth of Guru Tegh Bahadur - Sikh Festivals');
setEvent(21, 4,'First Day of Ridvan (Bahá\'í or Badi calendar)');
setEvent(27, 4,'Dan Wè Zo, alias St Louis Cleimeille - Voudun festival');
setEvent(29, 4,'Greenery Day (Midori-no-hi - Japan)');
setEvent(29, 4,'Ninth Day of Ridvan (Bahá\'í or Badi calendar)');
setEvent(29, 4,'Cassé Canari ou Wèt mô nan d\'lo - Voudun festival');
setEvent(30, 4,'Mangé les Morts - Voudun festival');
setEvent(30, 4,'Beltane or May Eve2');
setEvent( 2, 5,'Birth of Guru Arjan Dev - Sikh Festival');
setEvent( 2, 5,'Twelfth Day of Ridvan (Bahá\'í or Badi calendar)');
setEvent( 3, 5,'Constitution Memorial Day (Kenpou-kinen-bi - Japan)');
setEvent( 4, 5,'Holiday for a Nation (Kokumin-no-kyujitu - Japan)');
setEvent( 5, 5,'Children\'s Day (Kodomo-no-hi - Japan)');
setEvent(12, 5,'"Mangers" pour divers loas - Voudun festival');
setEvent(18, 5,'"Manger" pour Gran\'n Aloumandia - Voudun festival');
setEvent(20, 5,'Simbi Blanc - Voudun festival');
setEvent(21, 5,'Simbi Blanc - Voudun festival');
setEvent(23, 5,'Birth of Guru Amar Das - Sikh Festival');
setEvent(23, 5,'Declaration of the Bab (Bahá\'í or Badi calendar)');
setEvent(29, 5,'Ascension of Baha\'u\'llah (Bahá\'í or Badi calendar)');
setEvent(11, 6,'Accession of Guru Hargobind - Sikh Festival');
setEvent(14, 6,'Flag Day');
setEvent(16, 6,'Martyrdom of Guru Arjan Dev - Sikh Festival');
setEvent(22, 6,'Midsummer, Litha or Summer Solstice3');
setEvent(24, 6,'Saint Jean - Voudun festival');
setEvent(28, 6,'M\'Guine Sauveur table servie pour maitresse Erzulie, maitresse Tenaisse, maitresse Mambo - Voudun festival');
setEvent(29, 6,'St. Peter & St. Paul');
setEvent( 4, 7,'Independence Day');
setEvent( 5, 7,'Birth of Guru Hargobind - Sikh Festival');
setEvent( 9, 7,'Martyrdom of the Bab (Bahá\'í or Badi calendar)');
setEvent(12, 7,'Battle of the Boyne (N. Ireland)');
setEvent(20, 7,'Marine Day (Umi-no-hi - Japan)');
setEvent(23, 7,'Birth of Guru Harkrishan - Sikh Festival');
setEvent(25, 7,'Papa Ogou (St Jacques le Majeur) - Voudun festival');
setEvent(26, 7,'Gran\'Délai et Gran\'Aloumandia (Sainte Anne) - Voudun festival');
setEvent(29, 7,'Maitresse Silverine - Voudun festival');
setEvent(31, 7,'Lunasa or Lammas');
setEvent( 6, 8,'Transfiguration');
setEvent(15, 8,'Assumption of the Blessed Virgin Mary');
setEvent(25, 8,'Table Communion pour Dan Wezo, Roi de France - Voudun festival');
setEvent(30, 8,'Agou - Voudun festival');
setEvent( 1, 9,'Installation of the Guru Granth Sahib (holy book of the Sikhs) in the Golden Temple by Guru Arjan Dev - Sikh Festival');
setEvent( 8, 9,'Nativity of the Virgin Mary');
setEvent(14, 9,'Elevation of the Life-giving Cross');
setEvent(15, 9,'Respect for the Aged Day (Keirou-no-hi - Japan)');
setEvent(16, 9,'Death of Guru Amar Das, Accession of Guru Ram Das, Death of Guru Ram Das, Accession of Guru Arjan Dev - Sikh Festivals');
setEvent(18, 9,'Accession of Guru Angad Dev - Sikh Festival');
setEvent(21, 9,'Harvest, Mabon or Autumn Equinox1');
setEvent(22, 9,'Death of Guru Nanak Dev - Sikh Festival');
setEvent(25, 9,'Roi Wangol, Mousindi - Voudun festival');
setEvent(29, 9,'Manman Aloumandia - Voudun festival');
setEvent(30, 9,'Maitresse Délai - Voudun festival');
setEvent( 9,10,'Birth of Guru Ram Das - Sikh Festival');
setEvent(12,10,'Columbus Day');
setEvent(20,10,'Installation of the Guru Granth Sahib (holy book of the Sikhs) as eternal Guru, Death of Guru Har Rai, Accession of Guru Harkrishan - Sikh Festival');
setEvent(20,10,'Birth of the Bab (Bahá\'í or Badi calendar)');
setEvent(21,10,'Martyrdom of Guru Gobind Singh at Nanded - Sikh Festival');
setEvent(24,10,'United Nations Day');
setEvent(30,10,'"Chanté - messes" - Voudun festival');
setEvent(31,10,'"Chanté - messes" - Voudun festival');
setEvent(31,10,'Halloween');
setEvent(31,10,'Samhain, Sowyn or Hallows');
setEvent( 1,11,'All Saint\'s Day');
setEvent( 1,11,'All Saints Day - Voudun festival');
setEvent( 1,11,'All Saints Day');
setEvent( 2,11,'Fete Guédé (All Souls) - Voudun festival');
setEvent( 2,11,'All Souls Day');
setEvent( 3,11,'National Culture Day (Bunka-no-hi - Japan)');
setEvent( 5,11,'Guy Fawkes Night');
setEvent(11,11,'Veteran\'s Day');
setEvent(12,11,'Birth of Baha\'u\'llah (Bahá\'í or Badi calendar)');
setEvent(23,11,'Labor Thanksgiving Day (Kinrou-kansha-no-hi - Japan)');
setEvent(24,11,'Martyrdom of Guru Tegh Bahadur, Accession of Guru Gobind Singh - Sikh Festival');
setEvent(25,11,'Mangé Yam (fête de la moisson) - Voudun festival');
setEvent(26,11,'Day of the Covenant (Bahá\'í or Badi calendar)');
setEvent(28,11,'Ascension of \'Abdu\'l-Baha (Bahá\'í or Badi calendar)');
setEvent( 8,12,'Immaculate Conception');
setEvent(10,12,'Ganga - Bois - Voudun festival');
setEvent(12,12,'Agoué - Arroyo (Mangé la mer) - Voudun festival');
setEvent(13,12,'Agoué - Arroyo (Mangé la mer) - Voudun festival');
setEvent(21,12,'Yule or Winter Solstice');
setEvent(23,12,'Emperor\'s Birthday (Tennou-tanjyou-bi - Japan)');
setEvent(24,12,'Christmas Eve');
setEvent(25,12,'Christmas Day');
setEvent(25,12,'Bain de Noêl (Frotté feuilles) or Fête des Membres - Voudun festival');
setEvent(26,12,'Boxing Day, St Stephen\'s Day');
setEvent(31,12,'New Year\'s Eve');

function showEvent(day,month) {
  var output = '';
  for (var i=0; i < eventIndex; i++) {
    if ((day == myEvent[i].day) && (month == myEvent[i].month))
      output += myEvent[i].what + '<br>';
  }
  return output;
}

function Birthday(day,month,year,who) {
  this.day = day; this.month = month; this.year = year;
  this.who = who;
}

function setBirthday(day,month,year,who) {
  myBirthday[birthdayIndex++] = new Birthday(day,month,year,who);
}

var birthdayIndex = 0;
var myBirthday = new Array();

function showBirthday(day, month) {
  var output = '';
  for (var i=0; i < birthdayIndex; i++) {
    var birthDay = myBirthday[i].day;
    var birthMonth = myBirthday[i].month;
    var birthYear = myBirthday[i].year;
    var who = myBirthday[i].who;

    if (day == birthDay && month == birthMonth) {
      output += who + ' (' +
        formatFullDate(birthDay,birthMonth,birthYear) +
        ')<br>';
    }
  }

  return output;
}
