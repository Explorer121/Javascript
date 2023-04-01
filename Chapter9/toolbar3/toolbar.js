function swapOn(name) {
  if (document.images) {
    document.images[name].src = imageOver[name].img.src;
  }
}

function swapOff(name) {
  if (document.images) {
    document.images[name].src = imageOff[name].img.src;
  }
}

function swapClick(name) {
  if (document.images) {
    document.images[name].src = imageOn[name].img.src;
  }
}

if (document.images) {
  var imageOff = new Array();
  imageOff[0] = new Object();
  imageOff[0].img = new Image(97,22);
  imageOff[0].img.src = 'a-off.gif';
  imageOff[0].href = 'section-a.htm';
  imageOff[1] = new Object();
  imageOff[1].img = new Image(97,22);
  imageOff[1].img.src = 'b-off.gif';
  imageOff[1].href = 'section-b.htm';
  imageOff[2] = new Object();
  imageOff[2].img = new Image(97,22);
  imageOff[2].img.src = 'c-off.gif';
  imageOff[2].href = 'section-c.htm';
  imageOff[3] = new Object();
  imageOff[3].img = new Image(97,22);
  imageOff[3].img.src = 'd-off.gif';
  imageOff[3].href = 'section-d.htm';
  imageOff[4] = new Object();
  imageOff[4].img = new Image(97,22);
  imageOff[4].img.src = 'e-off.gif';
  imageOff[4].href = 'section-e.htm';

  var imageOver = new Array();
  imageOver[0] = new Object();
  imageOver[0].img = new Image(97,22);
  imageOver[0].img.src = 'a-over.gif';
  imageOver[1] = new Object();
  imageOver[1].img = new Image(97,22);
  imageOver[1].img.src = 'b-over.gif';
  imageOver[2] = new Object();
  imageOver[2].img = new Image(97,22);
  imageOver[2].img.src = 'c-over.gif';
  imageOver[3] = new Object();
  imageOver[3].img = new Image(97,22);
  imageOver[3].img.src = 'd-over.gif';
  imageOver[4] = new Object();
  imageOver[4].img = new Image(97,22);
  imageOver[4].img.src = 'e-over.gif';

  var imageOn = new Array();
  imageOn[0] = new Object();
  imageOn[0].img = new Image(97,22);
  imageOn[0].img.src = 'a-on.gif';
  imageOn[1] = new Object();
  imageOn[1].img = new Image(97,22);
  imageOn[1].img.src = 'b-on.gif';
  imageOn[2] = new Object();
  imageOn[2].img = new Image(97,22);
  imageOn[2].img.src = 'c-on.gif';
  imageOn[3] = new Object();
  imageOn[3].img = new Image(97,22);
  imageOn[3].img.src = 'd-on.gif';
  imageOn[4] = new Object();
  imageOn[4].img = new Image(97,22);
  imageOn[4].img.src = 'e-on.gif';


  var output = 
    '<table cellspacing="0" cellpadding="0" border="0"><tr>';

  var href = location.href;

  for (var i=0; i<5; i++) {

    if (href.indexOf(imageOff[i].href) > -1) output +=
      '<td><img src="' + imageOn[i].img.src + '" name="' + i + '" width="97" height="22" border="0"></td>'
    else output +=
      '<td><a href="' + imageOff[i].href + '" ' +
      'onMouseOver="swapOn(' + i +')"' +
      'onMouseOut="swapOff(' + i + ')" ' +
      'onClick="swapClick(' + i +')">' +
      '<img src="' + imageOff[i].img.src + '" name="' + i + '" width="97" height="22" border="0"></a></td>'
  }

  output += '</tr></table>';

  document.write(output);
}