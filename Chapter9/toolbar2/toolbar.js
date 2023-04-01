function swapOn(name) {
  if (document.images) {
    document.images[name].src = imageOver[name].src;
  }
}

function swapOff(name) {
  if (document.images) {
    document.images[name].src = imageOff[name].src;
  }
}

function swapClick(name) {
  if (document.images) {
    document.images[name].src = imageOn[name].src;
  }
}

if (document.images) {
  var imageOff = new Array();
  imageOff[0] = new Image(97,22);
  imageOff[0].src = 'a-off.gif';
  imageOff[0].href = 'section-a.htm';
  imageOff[1] = new Image(97,22);
  imageOff[1].src = 'b-off.gif';
  imageOff[1].href = 'section-b.htm';
  imageOff[2] = new Image(97,22);
  imageOff[2].src = 'c-off.gif';
  imageOff[2].href = 'section-c.htm';
  imageOff[3] = new Image(97,22);
  imageOff[3].src = 'd-off.gif';
  imageOff[3].href = 'section-d.htm';
  imageOff[4] = new Image(97,22);
  imageOff[4].src = 'e-off.gif';
  imageOff[4].href = 'section-e.htm';

  var imageOver = new Array();
  imageOver[0] = new Image(97,22);
  imageOver[0].src = 'a-over.gif';
  imageOver[1] = new Image(97,22);
  imageOver[1].src = 'b-over.gif';
  imageOver[2] = new Image(97,22);
  imageOver[2].src = 'c-over.gif';
  imageOver[3] = new Image(97,22);
  imageOver[3].src = 'd-over.gif';
  imageOver[4] = new Image(97,22);
  imageOver[4].src = 'e-over.gif';

  var imageOn = new Array();
  imageOn[0] = new Image(97,22);
  imageOn[0].src = 'a-on.gif';
  imageOn[1] = new Image(97,22);
  imageOn[1].src = 'b-on.gif';
  imageOn[2] = new Image(97,22);
  imageOn[2].src = 'c-on.gif';
  imageOn[3] = new Image(97,22);
  imageOn[3].src = 'd-on.gif';
  imageOn[4] = new Image(97,22);
  imageOn[4].src = 'e-on.gif';


  var output = 
    '<table cellspacing="0" cellpadding="0" border="0"><tr>';

  var href = location.href;

  for (var i=0; i<5; i++) {

    if (href.indexOf(imageOff[i].href) > -1) output +=
      '<td><img src="' + imageOn[i].src + '" name="' + i + '" width="97" height="22" border="0"></td>'
    else output +=
      '<td><a href="' + imageOff[i].href + '" ' +
      'onMouseOver="swapOn(' + i +')"' +
      'onMouseOut="swapOff(' + i + ')" ' +
      'onClick="swapClick(' + i +')">' +
      '<img src="' + imageOff[i].src + '" name="' + i + '" width="97" height="22" border="0"></a></td>'
  }

  output += '</tr></table>';

  document.write(output);
}