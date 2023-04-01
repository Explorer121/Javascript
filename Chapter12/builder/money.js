function commas(integer) {
  integer = '' + Math.round(integer);

  if (integer.length > 3) {
    var mod = integer.length%3;

    var output = (mod > 0 ? (integer.substring(0,mod)) : '');

    for (i=0 ; i < Math.floor(integer.length/3) ; i++) {
      if ((mod ==0) && (i ==0))
        output+= integer.substring(mod+3*i,mod+3*i+3);
      else
        output+= ',' + integer.substring(mod+3*i,mod+3*i+3);
    }
    return output;
  }
  return integer;
}

function round(number,x) {
  return Math.round(number * Math.pow(10,x)) / Math.pow(10,x);
}

function cents(amount) {
  amount -= 0;

  amount = round(amount, 2);

  if (amount == 0)
    amount += '.00';
  else if (amount == Math.floor(amount))
    amount += '.00';
  else if (amount*10 == Math.floor(amount*10))
    amount += '0';

  return '' + amount;
}

function formatMoney(amount) {
  return '$' + commas(Math.floor(amount)) + 
         cents(amount - Math.floor(amount)).substring(1);
}
