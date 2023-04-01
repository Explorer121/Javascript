var doDebug = true;
var htmlDebug = true;
var maxDebug = 2000;
var cntDebug = 0;
var nstDebug = '';
var txtDebug = '  ';
var winDebug;
var preDebug = false;
var nameDebug = 'windowName';

if (doDebug) {
  winDebug = window.open(
    'about:blank',
    nameDebug,
    'width=700,height=500,scrollbars=1,resize=1'
  );

  winDebug.document.open();
}

function updateDebug(text) {
  if (!preDebug) {
    preDebug = true;
    winDebug.document.write('<pre>');
 }

  if (htmlDebug) {
    text = text.replace(/</g,'&lt;');
    text = text.replace(/>/g,'&gt;');
  }
 
  winDebug.document.write(text + '\n\n');
}

function debugging() {
  return (doDebug && (cntDebug++ < maxDebug) && !winDebug.closed);
}

function debug(msg) {
  if (!debugging()) return;
  if (!msg) msg = '';

  var c = '';

  if (debug.caller)
    c = 'function ' +
        debug.caller.toString().match(/function (\w*)/)[1] +
        ' - ';

  updateDebug(nstDebug + c + msg);
}

function forinDebug(x, msg) {
  if (!debugging()) return;
  if (!msg) msg = '';

  var o = nstDebug;

  if (forinDebug.caller)
   o += forinDebug.caller.toString().match(/function (\w*)/)[1] +
     ' - ';

  o += msg;

  for (i in x) {
    o += '\n' + nstDebug;
    o += i;
    o += '[' + typeof(x[i]) + ']';
    if (x[i] != null && typeof(x[i]) != 'function') {
      o += '=' + x[i];
    }
    else if (x[i] != null) {
      o += '= null';
    }
  }

  updateDebug(o);
}

function startDebug() {
  if (!debugging()) return;

  var a = c = '';
  
  if (startDebug.caller) {
    c = 'function ' +
      startDebug.caller.toString().match(/function (\w*)/)[1];

    for (var i=0; i<startDebug.caller.arguments.length; i++) {
      a += startDebug.caller.arguments[i] + ',';
    }
  }

  if (a.length > 0) a = a.substring(0,a.length-1);

  updateDebug(nstDebug + c + '(' + a + ') starts');
  
  nstDebug += txtDebug;
}

function endDebug() {
  if (!debugging()) return;

  var c = '';
  
  if (endDebug.caller)
    c = 'function ' +
      endDebug.caller.toString().match(/function (\w*)/)[1];

  if (nstDebug.indexOf(txtDebug) > -1)
    nstDebug = nstDebug.substring(txtDebug.length);

  updateDebug(nstDebug + c + '() ends');
}