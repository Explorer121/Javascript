function setParms(spacing, width, cellWidth, cellType, bgColor){
  this.spacing   = (spacing)   ? spacing   : 1;
  this.width     = (width)     ? width     : 100;
  this.cellWidth = (cellWidth) ? cellWidth : 5;
  this.cellType  = (cellType)  ? cellType  : 'i';
  this.bgColor   = (bgColor)   ? bgColor   : '#FFFFFF';
  this.defaultColor = "#000000";
}

function getCellWidth(width,cellWidth,type) {
  var text = '';

  for (var i=1;i<=width;i++) {
    if (type=='w')
      text += '<td width="' + cellWidth + '">';
    else if (type == 'i')
      text += '<td>' +
        '<img src="w.gif" width="' + cellWidth + '" height="1">'
    else {
      text += '<td>';
      if (i%10==0)
        text += i.toString().substring(0,1);
      else if (i%5==0)
        text += '+';
      else
        text += '-';
    }
    text += '</td>';
  }

  return text
}

function hChart(vals,maxVal,barColor) {
  var cellWidthText =
    getCellWidth(maxVal, parms.cellWidth, parms.cellType);

  if (barColor.length != vals.length)
    for (var i=0;i<vals.length;i++)
      barColor[i] = parms.defaultColor;

  var text = '';

  text +=
    '<table border="0" cellspacing="' + parms.spacing + '"' +
    ' cellpadding="0" width="' + parms.width + '"' +
    ' bgcolor="' + parms.bgColor + '">' +
    '<tr>' + cellWidthText + '</tr>';

  for (var i=0, n=vals.length;i<n;i++) {
    text +=
      '<tr><td bgcolor="' + barColor[i] + '"' +
      ' colspan="' + vals[i] + '">&nbsp;</td>' +
      '<td bgcolor="' + parms.bgColor + '"' +
      ' colspan="' + (maxVal-vals[i]) + '">' + vals[i] +
      '</td></tr>';
  }

  text += '</table>';

  return text;
}

function vChart(vals,maxVal,units,topLegends,bottomLegends) {
  units = (units) ? units : 1;

  var text = '';

  text +=
    '<table border="0" cellspacing="' + parms.spacing + '"' +
    ' cellpadding="0" width="' + parms.width + '"' +
    ' bgcolor="' + parms.bgColor + '">';

  if (topLegends) {
    text +=
      '<tr valign="bottom" bgcolor="' + parms.bgColor + '"' +
      ' align="center">' +
      '<td><img src="w.gif" width="1" height="1"></td>';

    for (var i=0;i<vals.length;i++) {
      text += '<td class="t">' + vals[i] + '</td>';
    }

    text += '</tr>';
  }

  text +=
    '<tr valign="bottom" bgcolor="' + parms.bgColor + '"' +
    ' align="center">';

  text +=
    '<td><img src="w.gif" width="1"' +
    ' height="' + (maxVal*units) + '"></td>';

  for (var i=0;i<vals.length;i++) {
    text +=
      '<td><img src="r.gif" width="' + parms.width + '"' +
      ' height="' + (vals[i]*units) + '"></td>'
  }

  text += '</tr>';

  if (bottomLegends) {
    text += '<tr><td><img src="w.gif" width="1" height="1"></td>'

    for (var i=0;i<vals.length;i++) {
      text += '<td>' + (i+1) + '</td>'
    }

    text += '</tr>';
  }

  text += '</table>'

  return text;
}
