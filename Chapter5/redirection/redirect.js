var newDomain   = 'http://www.newdomain.com';
var thisPage    = window.location.pathname;
var newLocation = newDomain + thisPage;

function go_now () {
  window.location.href = newLocation;
}

function message() {
  var out = '<h1>Location Changed<\/h1>';

  out += '<p>';
  out += 'Please note the new location of this page is:';
  out += '<br>';
  out += '<a href="' + newLocation + '">' + newLocation + '<\/a>';
  out += '<\/p>';

  out += '<p>';
  out += 'This page will automatically redirect in 10 seconds.';
  out += '<\/p>';

  document.write(out);
}

setTimeout("go_now()",10000);
