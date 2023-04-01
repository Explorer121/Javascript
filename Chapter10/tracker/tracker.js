if (window.Cookie) {
  Cookie.tracker = getCookie('cookieTracker');
  if (!Cookie.tracker)
    Cookie.tracker = '';
}

var today = new Date();
var expires = new Date(today.getTime() + Cookie.year);

function addCookieCode(code) {
  Cookie.tracker = code + '+' + Cookie.tracker;

  if (Cookie.tracker.length > (4096 - 13))
    Cookie.tracker =
      Cookie.tracker.subString(0,Cookie.tracker.length - 2);

  setCookie('cookieTracker', Cookie.tracker, expires, '/');
  Cookie.tracker = getCookie('cookieTracker');
}

