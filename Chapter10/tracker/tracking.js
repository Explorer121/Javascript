function Link(href, text, code) {
  this.link = '<a href="' + href + '">' + text + '</a><br>';
  this.code = code + '+';
}

function setLink(href, text, code) {
  myLink[item++] = new Link(href, text, code);
}

var item = 0;
var myLink = new Array();

setLink('index1.htm','Index page 1','00');
setLink('index2.htm','Index page 2','63');
setLink('index3.htm','Index page 3','AC');
setLink('index4.htm','Index page 4','B4');
setLink('index5.htm','Index page 5','F0');
setLink('index6.htm','Index page 6','Za');
setLink('index7.htm','Index page 7','aB');
setLink('index8.htm','Index page 8','df');
setLink('index9.htm','Index page 9','4h');

var newLinks = oldLinks = '';

for (var i=0; i<myLink.length; i++) {
  if (window.Cookie &&
    Cookie.tracker.indexOf(myLink[i].code) > -1)
    oldLinks += myLink[i].link;
  else
    newLinks += myLink[i].link;
}

if (newLinks != '')
  document.write('<h1>Links to visit:</h1>' + newLinks);
if (oldLinks != '')
  document.write('<h1>Links visited:</h1>' + oldLinks);
