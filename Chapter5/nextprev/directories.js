var first = 98;
var last  = 111;

var prefix = 'folder';
var suffix = '/index.htm';

var prev = 'src="../prevdir.gif" alt="previous directory"';
var next = 'src="../nextdir.gif" alt="next directory"';

var url  = self.location.href;
var pos1 = url.indexOf(prefix);
var pos2 = url.indexOf(suffix);

var num = url.substring(pos1 + prefix.length, pos2) - 0;

function pad(num, size) {
  num = '' + num;
  while (num.length < size) num = '0' + num;
  return num;
}

function showDirectoryButtons() {
  var o = '';

  o += '<table width="100%" border="0"><tr>';

  if (num > first) {
    o += '<td>';
    o += '<a href="../' + prefix + pad(num-1,3) + suffix + '">';
    o += '<img border="0" ' + prev + '><\/a>';
    o += '<\/td>';
  }

  o += '<td width=100%>&nbsp;<\/td>';
  
  if (num < last) {
    o += '<td>';
    o += '<a href="../' + prefix + pad(num+1,3) + suffix + '">';
    o += '<img border="0" ' + next + '><\/a>';
    o += '<\/td>';
  }
  
  o += '<\/tr><\/table>';

  document.write(o);
}