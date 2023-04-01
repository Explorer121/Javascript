function Chinese(animal,animalI,branch,branchI,stem,stemI) {
  this.animal = animal; this.animalImage = animalI;
  this.branch = branch; this.branchImage = branchI;
  this.stem = stem; this.stemImage = stemI;
}

function setChinese(animal,animalI,branch,branchI,stem,stemI) {
  myChinese[chineseIndex++] =
    new Chinese(animal,animalI,branch,branchI,stem,stemI);
}

var chineseIndex = 0;
var myChinese = new Array();

setChinese(
'Pig','pig.gif','hai','hai4.gif','gui','gui3.gif');
setChinese('Rat','rat.gif','zi','zi3.gif','jia','jia3.gif');
setChinese('Ox','ox.gif','chou','chou3.gif','yi','yi3.gif');
setChinese(
  'Tiger','tiger.gif','yin','yin2.gif','bing','bing3.gif');
setChinese(
  'Rabbit','rabbit.gif','mao','mao3.gif','ding','ding1.gif');
setChinese(
  'Dragon','dragon.gif','chen','chen2.gif','wu','wu4.gif');
setChinese('Snake','snake.gif','si','si4.gif','ji','ji3.gif');
setChinese(
  'Horse','horse.gif','wu','wu3.gif','geng','geng1.gif');
setChinese(
 'Goat','goat.gif','wei','wei4.gif','xin','xin1.gif');
setChinese(
  'Monkey','monkey.gif','shen','shen1.gif','ren','ren2.gif');
setChinese('Rooster','rooster.gif','you','you3.gif');
setChinese('Dog','dog.gif','xu','xu1.gif');

var branchImage1 = 'di4.gif';
var branchImage2 = 'zhi1.gif';

var stemImage1 = 'tian1.gif';
var stemImage2 = 'gan1.gif';

var cnys = new Array(
  1.31, 2.19, 2.08, 1.29, 2.16, 2.04, 1.25, 2.13, 2.02, 1.22,
  2.10, 1.30, 2.18, 2.06, 1.26, 2.14, 2.03, 1.23, 2.11, 2.01,
  2.20, 2.08, 1.28, 2.16, 2.05, 1.25, 2.13, 2.02, 1.23, 2.10,
  1.30, 2.17, 2.06, 1.26, 2.14, 2.04, 1.24, 2.11, 1.31, 2.19,
  2.08, 1.27, 2.15, 2.05, 1.25, 2.13, 2.02, 1.22, 2.10, 1.29,
  2.17, 2.06, 1.27, 2.14, 2.03, 1.24, 2.12, 1.31, 2.18, 2.08,
  1.28, 2.15, 2.05, 1.25, 2.13, 2.02, 1.21, 2.09, 1.30, 2.17,
  2.06, 1.27, 2.15, 2.03, 1.23, 2.11, 1.31, 2.18, 2.07, 1.28,
  2.16, 2.05, 1.25, 2.13, 2.02, 2.20, 2.09, 1.29, 2.17, 2.06,
  1.27, 2.15, 2.04, 1.23, 2.10, 1.31, 2.19, 2.07, 1.28, 2.16,
  2.05, 1.24, 2.12, 2.01, 1.22, 2.09, 1.29, 2.18, 2.07, 1.26, 
  2.10, 2.03, 1.23, 2.10, 1.31, 2.19, 2.09, 1.28, 2.16, 2.05, 
  1.25, 2.12, 2.01, 1.22, 2.10, 1.29, 2.17, 2.06, 1.26, 2.13,
  2.03, 1.23, 2.11, 1.31, 2.19, 2.08, 1.28, 2.15, 2.04, 1.24,
  2.12, 2.01, 1.22, 2.10, 1,30, 2.17, 2.06, 1.26, 2.14, 2.02,
  1.23, 2.11
);

function CNY(d,m,y) {
  this.start = '';
  this.end = '';
  
  if ((y > 1900) && (y < 2051)) {
    var newYear = cnys[y - 1900];
    var newMonth = Math.floor(newYear);
    var newDay = Math.round((newYear*100)-(newMonth*100));

    if ((m > newMonth) ||
        ((m == newMonth) && (d >= newDay))) {

      // this year
      this.branch = (y-3) % 12;
      this.stem = (y-3) % 10;

      var nextYear = cnys[y - 1900 + 1];
      var nextMonth = Math.floor(nextYear);
      var nextDay = Math.round((nextYear*100)-(nextMonth*100));

      var lastDay = nextDay - 1;
      if (lastDay == 0) {
        lastMonth = nextMonth - 1;
        lastDay = 31;
      }
      else lastMonth = nextMonth;

      this.start = formatFullDate(newDay,newMonth,y);
      this.end   = formatFullDate(lastDay,lastMonth,y+1);
    }
    else {

      // last year
      this.branch = (y-4) % 12;
      this.stem = (y-4) % 10;

      var oldYear = cnys[y - 1900 - 1];
      var oldMonth = Math.floor(oldYear);
      var oldDay = Math.round((oldYear*100)-(oldMonth*100));

      var lastDay = newDay - 1;
      if (lastDay == 0) {
        lastMonth = newMonth - 1;
        lastDay = 31;
      }
      else lastMonth = newMonth;

      this.start = formatFullDate(oldDay,oldMonth,y-1);
      this.end   = formatFullDate(lastDay,lastMonth,y);
    }
  }
  else {
    this.branch = (y-3) % 12;
    this.stem = (y-3) % 10;
  }
}
 