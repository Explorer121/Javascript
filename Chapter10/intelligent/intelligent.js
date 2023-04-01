Cookie.MExpires = new Date(2099,11,31,23,59,59);

Cookie.excepts = false;

Cookie.question =
  'We have detected that you do not allow cookies.\n' +
  'However, for this application to work correctly\n' +
  'cookies must be stored.\n\n' +
  'Please click \'OK\' to try again or \'Cancel\' to\n' +
  'set one preference cookie so that no further cookies\n' +
  'will be written by this site.';

function setMCookie() {
  if (!getCookie('MCookie'))
    setCookie('MCookie', 'yesCookies', Cookie.MExpires);

  var MCookie = getCookie('MCookie')
  
  if (MCookie && MCookie == 'yesCookies')
    Cookie.excepts = true;
}

function setICookie(name, value, expires, path, domain, secure) {
  var MCookie = getCookie('MCookie')
  
  if (Cookie.excepts && MCookie && MCookie == 'yesCookies') {

    var ICookie = getCookie(name);

    if ((!ICookie) || (ICookie != value)) {

      setCookie(name, value, expires, path, domain, secure);
      ICookie = getCookie(name);
      
      if ((!ICookie) || (ICookie != value)) {
        var tryAgain = confirm(Cookie.question);
        
        if (tryAgain) {
          setCookie(name, value, expires, path, domain, secure);
          var temp = getCookie(name);
          if (!temp || temp != value)
            Cookie.excepts = false;
        }
        else {
          setCookie('MCookie', 'noCookies', Cookie.MExpires);
          Cookie.excepts = false;
        }
      }
    }
  }
}

