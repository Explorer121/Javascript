var myImages = new Array();

if (document.images) {
  myImages[0] = new Image(64,64);
  myImages[0].src = "0.gif";
  myImages[1] = new Image(64,64);
  myImages[1].src = "1.gif";
  myImages[2] = new Image(64,64);
  myImages[2].src = "2.gif";
  myImages[3] = new Image(64,64);
  myImages[3].src = "3.gif";
  myImages[4] = new Image(64,64);
  myImages[4].src = "4.gif";
  myImages[5] = new Image(64,64);
  myImages[5].src = "5.gif";
  myImages[6] = new Image(64,64);
  myImages[6].src = "6.gif";
  myImages[7] = new Image(64,64);
  myImages[7].src = "7.gif";
  myImages[8] = new Image(64,64);
  myImages[8].src = "8.gif";
  myImages[9] = new Image(64,64);
  myImages[9].src = "9.gif";
}

function updateClock() {
  var time = new Date();

  var s1 = time.getSeconds() % 10;
  var s10 = Math.floor(time.getSeconds() / 10);
  var m1 = time.getMinutes() % 10;
  var m10 = Math.floor(time.getMinutes() / 10);
  var h1 = time.getHours() % 10;
  var h10 = Math.floor(time.getHours() / 10);

  if (document.images) {
    document.images['s1'].src  = myImages[s1].src;
    document.images['s10'].src = myImages[s10].src;
    document.images['m1'].src  = myImages[m1].src;
    document.images['m10'].src = myImages[m10].src;
    document.images['h1'].src  = myImages[h1].src;
    document.images['h10'].src = myImages[h10].src;
  }

  setTimeout('updateClock()',100);
}