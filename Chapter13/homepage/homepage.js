function setHomepage(what, url) {
  if (navigator.appName == 'Microsoft Internet Explorer'
      && document.getElementById)
    setHomepageExplorer(what, url);
  else if (document.layers || document.getElementById)
    setHomepageNetscape(what, url);
  return false;
}

function setHomepageNetscape(what, url) {
  var warn =
    'Due to Netscapes security handling, making this page ' +
    'your homepage, will show you a dialog with a warning.' +
    'If you do not wish to grant this site the access to ' +
    'your browser settings, you can manually copy the ' +
    'current location and paste it in the location field in ' +
    'Edit|Preferences|Navigator.';

  if (confirm(warn)) {
    netscape.security.PrivilegeManager.enablePrivilege(
      "UniversalPreferencesWrite"
    );

    navigator.preference('browser.startup.homepage', url);

    netscape.security.PrivilegeManager.disablePrivilege(
      "UniversalPreferencesWrite"
    );
  }
}

function setHomepageExplorer(what, url) {
  what.style.behavior = 'url(#default#homepage)';
  what.setHomePage(url);
}
