var DOMObjects = new Object();

function DOMInitialize(type) {
  if (document.getElementById)
    DOMObjects = document.getElementsByTagName(type);
  else if (document.all) DOMObjects = document.all.tags(type);
  else if (document.layers) DOMObjects = document.layers;
  else DOMObjects = null;
}

function DOMElementHide(o) {
  if (document.getElementById || document.all) {
    o.style.visibility = 'hidden';
    o.style.display = 'none';
  }
  else if (document.layers)    o.visibility = 'hidden';
}

function DOMElementShow(o) {
  if (document.getElementById || document.all) {
    o.style.visibility = 'visible';
    o.style.display = 'block';
  }
  else if (document.layers)    o.visibility = 'visible';
}

function DOMElementSetTop(o,val) {
  if (document.getElementById) o.style.top = val;
  else if (document.all)       o.style.top = val;
  else if (document.layers)    o.top = val;
}

function DOMElementGetTop(o) {
  if (document.getElementById) return o.style.top;
  else if (document.all)       return o.style.top;
  else if (document.layers)    return o.top;
}

function DOMElementSetLeft(o,val) {
  if (document.getElementById) o.style.left = val;
  else if (document.all)       o.style.left = val;
  else if (document.layers)    o.left = val;
}

function DOMElementGetLeft(o) {
  if (document.getElementById) return o.style.left;
  else if (document.all)       return o.style.posLeft;
  else if (document.layers)    return o.left;
}

function DOMElementGetHeight(o) {
  if (document.all)                 return o.clientHeight;
  else if (document.getElementById) return parseInt(o.offsetHeight);
  else if (document.layers)         return o.document.height;
}

function DOMElementGetWidth(o) {
  if (document.all)                 return o.clientWidth;
  else if (document.getElementById) return parseInt(o.offsetWidth);
  else if (document.layers)         return o.document.width;
}

function DOMWindowGetXOffset() {
  if (document.all)            return document.body.scrollLeft;
  else if (document.getElementById)  return window.pageXOffset;
  else if (document.layers)          return window.pageXOffset;
}

function DOMWindowGetYOffset() {
  if (document.all)             return document.body.scrollTop;
  else if (document.getElementById)  return window.pageYOffset;
  else if (document.layers)          return window.pageYOffset;
}

function DOMWindowGetInnerWidth() {
  if (document.all)           return document.body.clientWidth;
  else if (document.getElementById)   return window.innerWidth;
  else if (document.layers)           return window.innerWidth;
}

function DOMWindowGetInnerHeight() {
  if (document.all)          return document.body.clientHeight;
  else if (document.getElementById)  return window.innerHeight;
  else if (document.layers)          return window.innerHeight;
}

function DOMEventGetOffsetX(e) {
  if (document.all)                  return e.offsetX;
  else if (document.getElementById)  return e.clientX + window.pageXOffset;
  else if (document.layers)          return e.pageX;
}

function DOMEventGetOffsetY(e) {
  if (document.all)                  return e.offsetY;
  else if (document.getElementById)  return e.clientY + window.pageYOffset;
  else if (document.layers)          return e.pageY;
}

function DOMEventGetClientX(e) {
  if (document.all)                  return e.clientX;
  else if (document.getElementById)  return e.clientX;
  else if (document.layers)          return e.pageX;
}

function DOMEventGetClientY(e) {
  if (document.all)                  return e.clientY;
  else if (document.getElementById)  return e.clientY;
  else if (document.layers)          return e.pageY;
} 

function DOMEventGetX(e) {
  if (document.all)                  return event.x;
  else if (document.getElementById)  return e.pageX;
  else if (document.layers)          return e.pageX;
}

function DOMEventGetY(e) {
  if (document.all)                  return event.y;
  else if (document.getElementById)  return e.pageY;
  else if (document.layers)          return e.pageY;
}
function DOMElementGetOffsetTop(o) {
  if (document.getElementById)       return o.offsetTop;
  else if (document.all)             return o.offsetTop;
  else if (document.layers)          return o.top;
}

function DOMElementGetOffsetLeft(o) {
  if (document.getElementById)       return o.offsetLeft;
  else if (document.all)             return o.offsetLeft;
  else if (document.layers)          return o.left;
}

function DOMEventGetSrc(e) {
  if (document.all)                  return e.srcElement.href;
  else if (document.getElementById) {
    if (document.images[e.originalTarget.name])
      return document.images[e.originalTarget.name].src;
    else
      return null;
  }
  else if (document.layers)          return e.target.src;
}

function DOMEventGetName(e) {
  if (document.all)                  return e.srcElement.name;
  else if (document.getElementById)  return e.originalTarget.name;
  else if (document.layers)          return e.target.name;
}

if (document.createRange && document.createRange().createContextualFragment)
  HTMLElement.prototype.innerHTML = innerHTML;

function innerHTML(html) {
  while (this.hasChildNodes()) this.removeChild(this.lastChild);
  var range = document.createRange();
  range.setStartAfter(this);
  this.appendChild(range.createContextualFragment(html));
}

function DOMElementSetInnerHTML(o,html) {
  if (document.getElementById)       o.innerHTML = html;
  else if (document.all)             o.innerHTML = html;
  else if (document.layers) {
    o.document.open();
    o.document.write(html);
    o.document.close();
  }
}