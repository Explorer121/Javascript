var mySheet;

if (window.Cookie) {
  var today = new Date();
  var expires = new Date(today.getTime() + Cookie.year);
  mySheet = getCookie('stylesheet');
}

function enableStyle(title) {
  if (document.styleSheets) {
    for (var i=0; i<document.styleSheets.length; i++) {
      document.styleSheets[i].disabled =
        (document.styleSheets[i].title != title);
    }
  }
}

if (mySheet) enableStyle(mySheet);
