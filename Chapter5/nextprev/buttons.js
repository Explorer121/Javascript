var first = 1;
var last  = 10;

var prefix = 'page';
var suffix = '.htm';

var prev = 'src="prev.gif" ALT="previous page"';
var next = 'src="next.gif" ALT="next page"';

var url  = self.location.href;
var pos1 = url.indexOf(prefix);
var pos2 = url.indexOf(suffix);

var num = url.substring(pos1 + prefix.length, pos2) - 0;

function showButtons() {
  var o = '';

  o += '<table width="100%" border="0"><tr>';

  if (num > first) {
    o += '<td>';
    o += '<a href="' + prefix + (num-1) + suffix + '">';
    o += '<img border="0" ' + prev + '><\/a>';
    o += '<\/td>';
  }

  o += '<td width="100%">&nbsp;<\/td>';
  
  if (num < last) {
    o += '<td>';
    o += '<a href="' + prefix + (num+1) + suffix + '">';
    o += '<img border="0" ' + next + '><\/a>';
    o += '<\/td>';
  }
  
  o += '<\/tr><\/table>';

  document.write(o);
}