var WhereInRing = 0;
var NumInWebRing = 0;
var WebRing = new Array();
var base = ''; // replace this line with: var base = 'http://www.irt.org/webring/';
var output = '';

function WebRingObject(href) {
  this.href = href;
}

function Add(href) {
  WebRing[NumInWebRing++] = new WebRingObject(href);
  if (location.href.indexOf(href) > -1)
    WhereInRing = NumInWebRing;
}

Add("http://www.btinternet.com/~aredfern/");
Add("http://www.legolas.com/");
Add("http://www.btinternet.com/~red.dragon/");
Add("http://www.btinternet.com/~markrsmith/");

if (WhereInRing == 0)
  PrevInRing = NumInWebRing - 1;
else
  PrevInRing = WhereInRing - 1;

if (WhereInRing == NumInWebRing - 1)
  NextInRing = 0;
else
  NextInRing = WhereInRing + 1;

var output =
  '<center>' +

  '<a href="' + WebRing[PrevInRing].href + '" target="_top">' +
  '<img src="' + base + 'left.gif" border="0"></a>' +

  '<a href="' + base + 'index.htm" target="_top">' +
  '<img src="' + base + 'middle.gif" border="0"></a>' +

  '<a href="' + WebRing[NextInRing].href + '" target="_top" border="0">' +
  '<img src="' + base + 'right.gif" border="0"></a>'
  
  '<\/center>';

document.write(output);