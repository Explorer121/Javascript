var today = new Date();
var expiryDate = new Date(today.getTime() + (2 * Cookie.week));

var totamt;

var basket = false;

function product(pid,name,img,w,h,price) {
  this.pid        = pid;
  this.name       = name;
  this.img        = img
  this.w          = w;
  this.h          = h;
  this.price      = price;
  this.quantity   = 0;
  this.add        = add;
  this.remove     = remove;   
}

catalog = new Array(
new product(0,'Furby',         'furby.gif',     132, 150,25.99),
new product(1,'Helicopter',    'helicopter.gif',150, 141, 3.99),
new product(2,'Lounge',        'lounge.gif',    150, 109, 5.99),
new product(3,'Multipack',     'multipack.jpg', 150, 116, 1.99),
new product(4,'Rubik\'s Cube', 'rubik.gif',      90,  88, 2.25),
new product(5,'Silver Speeder','speeder.jpg',   150, 99,  3.50),
new product(6,'Monopoly',      'monopoly.jpg',  150, 147, 4.99)
)

function add() {
  this.quantity++;
  alert(
    this.name + ' added - ' + this.quantity + ' in basket'
  );
  if (window.Cookie) saveBasket();
}

function remove() {
  this.quantity--;
  if (this.quantity < 0) this.quantity = 0;
  alert(
    this.name + ' removed - ' + this.quantity + ' in basket'
  );
  if (window.Cookie) saveBasket();
}

function show(msg) {
  status=msg;
  return true;
}

function setAmt(idx) {
  if (!document.basket['pid'+idx]) return
  document.basket['pid'+idx].value = 
    cents(catalog[idx].quantity * catalog[idx].price);
  setTotAmt()
}

function setTotAmt() {
  if (!document.basket.totamt) return
  totamt = 0;
  for (var i = 0; I < catalog.length; i++) {
    totamt += catalog[i].quantity * catalog[i].price;
  }
  document.basket.totamt.value = cents(totamt);
}

function getPage(basket) {
  totamt = 0;

  var output =
    '<form name="basket" action="billing.cgi"' +
    ' onSubmit="alert(\'We should send the form to billing\');'+
    'return false"><table border="0">\n';

  for (var i = 0; i < catalog.length; i++) {
    var link1 =
      '<a href="javascript:;"' +
      ' onClick="catalog['+i+'].add();setAmt('+i+');' +
      'return false"' +
      ' onMouseOver="return ' +
      'show(\'Add \'+catalog['+i+'].name+\' to basket\')"' +
      ' onMouseOut="return show(\'\')">';

    var link2 =
      '<a href="javascript:;"' +
      ' onClick="catalog['+i+'].remove();setAmt('+i+');' +
      'return false"' +
      ' onMouseOver="return ' +
      'show(\'Remove \'+catalog['+i+'].name+\' from basket\')"' +
      ' onMouseOut="return show(\'\')">';

    var amt = catalog[i].quantity * catalog[i].price;
    totamt += amt;

    if (!basket || (basket && catalog[i].quantity > 0)) {
      output +=
        '<tr><td>' +
        link1 + '<img src="' + catalog[i].img +
        '" name="img' + i +
        '" width="'  + catalog[i].w +
        '" height="' + catalog[i].h +
        '" border=0"></a></td><td>' +
        link1 +'Add</a> or ' +
        link2 + 'Remove</a> ' + catalog[i].name +
        '&nbsp;&nbsp;&nbsp;$' + cents(catalog[i].price);

      if (basket) { 
        output += 
          '</td><td>' +
          '<input type="text" size="8"' +
          ' name="pid' + catalog[i].pid + '"' +
          ' value="' + cents(amt) + '"' +
          ' readonly onFocus="this.blur()">';
      }
      output += '</td></tr>';
    }
  }

  output +=
    '</table><table border="0">\n<tr><td>' +
    'Total: <input type="text" size="8"' +
    ' name="totamt" value="' + cents(totamt) + '"' +
    ' readonly onFocus="this.blur()">';

  if (basket)
    output += ' <input type="submit" value="Submit order">';

  output += '</td></tr></table>\n</form>'
  return output;
}

function round(str,decimals) {
  var zero = '0.' + '0000000000'.substring(0,decimals);
  if (!str) return zero;
  var strNum = parseFloat(str);
  if (isNaN(strNum)) return zero;
  var decNum = Math.pow(10,decimals)
  return Math.round(strNum * decNum)/decNum;
}

function cents(amount) {
  amount -= 0;
  if (amount == 0) return '0.00';
  amount = round(amount, 2);    
  if (amount == Math.floor(amount))
    amount += '.00';
  else if (amount*10 == Math.floor(amount*10))
    amount += '0';
  return '' + amount;
}

function saveBasket() {
  if (!isCookieEnabled()) {
    alert('Please enable cookies for this to work');
    return;
  }

  totamt = 0; 
  var saved = ''; 
  for (var i = 0; i < catalog.length; i++)
    if (catalog[i].quantity > 0)
      saved += '|' + catalog[i].pid+'='+catalog[i].quantity;
  if (saved.length > 0) 
    setCookie('cat',saved.substring(1),expiryDate);

  setTotAmt();
}

function getBasket() {
  var saved = getCookie('cat');
  if (!saved) return;

  var catArray = unescape(saved).split('|'); 
  for (var i = 0; i < catArray.length; i++) {
    var catItem = catArray[i].split('=');
    catalog[catItem[0]].quantity = catItem[1];
  }
}
