function File(href,name,type) {
  if (type != null) {
    var image = '<img src="' + type + '.gif" align="absbottom" border="0" width="20" height="21">';
    this.imageLink = '<a href="' + href + '">' + image + '</a>';
  }
  else
    this.imageLink = '&nbsp;';

  this.textLink = '<a href="' + href + '">' + name + '</a>';
}

function add(obj) {
  this.Contents[this.index++] = obj;
}

function Menu(ref,name,open) {
  var href = 'javascript:openMenu(' + ref + ')';
  var image = '<img src="menu.gif" align="absbottom" border="0" width="20" height="21">';
  
  this.textLink = '<a href="' + href + '">' + name + '</a>';
  this.imageLink = '<a href="' + href + '">' + image + '</a>';
  
  this.ref  = ref;
  this.open = open;
  this.add = add;
  this.index = 0;
  this.Contents = new Object();
}

function show(obj) {
  var output =
    '<table><tr><td valign="top" width="20">' + obj.imageLink + 
    '</td><td class="menulink">' + obj.textLink;

  if (obj.open)
    for (var i=0; i<obj.index; i++)
      output += show(obj.Contents[i]);

  return output + '</td></tr></table>';
}

function openMenu(obj) {
  obj.open = !obj.open;
  updateMenu();
}