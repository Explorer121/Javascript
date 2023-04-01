function enableStyle(j) {
  if (j != 0 && document.styleSheets) {
    for (var i=0; i<document.styleSheets.length; i++) {
      if (i == j-1)
        document.styleSheets[i].disabled = false;
      else
        document.styleSheets[i].disabled = true;
    }
  }
}

enableStyle(1);

/**
 * Node Constants - already defined in Mozilla, added for Internet Explorer
**/

if (!window.Node) {
  var Node = new Object();
  Node.ELEMENT_NODE = 1;
  Node.ATTRIBUTE_NODE = 2;
  Node.TEXT_NODE = 3;
  Node.CDATA_SECTION_NODE = 4;
  Node.ENTITY_REFERENCE_NODE = 5;
  Node.ENTITY_NODE = 6;
  Node.PROCESSING_INSTRUCTION_NODE = 7;
  Node.COMMENT_NODE = 8;
  Node.DOCUMENT_NODE = 9;
  Node.DOCUMENT_TYPE_NODE = 10;
  Node.DOCUMENT_FRAGMENT_NODE = 11;
  Node.NOTATION_NODE = 12;
}

function query() {
  var iisbn = document.getElementById('isbn').value;
  var ititle = document.getElementById('title').value;
  var iauthor = document.getElementById('author').value;

  var books = document.getElementsByTagName('book');

  for (var i=0; i<books.length; i++) {
    var book = books.item(i);
    var title = isbn = author = '';

    if (book.getAttribute('id') != 'picker') {
      var attributes = book.childNodes;
    
      for (var j=0; j<attributes.length; j++) {
        var attribute = attributes[j];
      
        if (attribute.nodeType == Node.ELEMENT_NODE) {

          if (attribute.tagName == 'title')
            title = attribute.firstChild.data;
          else if (attribute.tagName == 'isbn')
            isbn = attribute.firstChild.data;
          else if (attribute.tagName == 'authors') {
            authors = attribute.childNodes;

            for (var k=0; k<authors.length; k++) {
              var attribute = authors[k];

              if (attribute.nodeType == Node.ELEMENT_NODE) {
                if (attribute.tagName == 'author') {
                  author += attribute.firstChild.data + '\n';
                }
              }
            }
          }
        }
      }

      if (
          (iisbn != '' && isbn.indexOf(iisbn) > -1) ||
          (ititle != '' && title.indexOf(ititle) > -1) ||
          (iauthor != '' && author.indexOf(iauthor) > -1)
         )
        book.parentNode.style.display = 'block';
      else
        book.parentNode.style.display = 'none';
    }
  }

  enableStyle(2);
}

var output =
  '<form name="search">' +
  '<input type="text" id="title" value="" /> - Title' +
  '<br />' +
  '<input type="text" id="isbn" /> - ISBN' +
  '<br />' +
  '<input type="text" id="author" /> - Author' +
  '<br />';

if (document.styleSheets) {
  output +=
    '<select onchange="enableStyle(this.selectedIndex)">' +
    '<option value="">Choose a stylesheet:</option>';

  for (var i=0; i<document.styleSheets.length; i++) {
    var href = document.styleSheets[i].href;
    var text = href.substring(href.lastIndexOf('/')+1);
    output +=
      '<option value="' + i + '">' + text + '</option>';
  }
  output +=
    '</select>';
}

output +=
  '<input type="button" value="Query" onclick="query()" />' +
  '</form>';

document.getElementById('picker').innerHTML = output;