function Form(name, action) {
  this.name = name;
  this.action = action;
  
  this.add = addSelect;
  this.index = 0;
  this.Contents = new Object();
  
  this.getHTML1 = formHTML1;
  this.getHTML2 = formHTML2;
  
  this.getString1 = formHTML1;
  this.getString2 = formHTML2;
}

function addSelect(code, value) {
  this.Contents[this.index++] = selects[code];
  selects[code].value = value;
}

function formHTML1() {
  return '<form name="' + this.name +
    '" action="' + this.action + '"><table>\n';
}

function formHTML2() {
  return '<tr><td colspan="2" align="right">' +
    '<input type="submit" value="Submit">' +
    '</td></tr>\n</table></form>\n';
}

function createSelect(code, text) {
  selects[code] = new Select(code, text);
}

function Select(code, text) {
  this.code = code;
  this.text = text;

  this.value = 0;

  this.add = addOption;
  this.index = 0;
  this.Contents = new Object();
  
  this.getHTML1 = selectHTML1;
  this.getHTML2 = selectHTML2;
  
  this.getString1 = selectString1;
  this.getString2 = selectString2;
}

function addOption(code, selected) {
  this.Contents[this.index++] = options[code];
  options[code].selectCode = this.code;
  if (selected) options[code].selected = true;
  return options[code].value;
}

function selectHTML1() {
  return '<tr><td>' + this.text + '</td><td>' +
    '<select name="' + this.code +
    '" onChange="total(this.form)">\n';
}

function selectHTML2() {
  return '</select></td></tr>\n';
}

function selectString1() {
  return '<tr><td>' + this.text + '</td><td>';
}

function selectString2() {
  return '</td></tr>\n';
}

function createOption(code, text, value) {
  options[code] = new Option(code, text, value);
}

function Option(code, text, value) {
  this.code = code;
  this.text = text;
  this.value = value;
  this.selectCode = '';
  this.selected = false;
  
  this.getHTML1 = optionHTML1;
  this.getHTML2 = optionHTML2;
  
  this.getString1 = optionString1;
  this.getString2 = optionString2;
}

function optionHTML1() {
  var output = '<option value="' + this.code + '"';
  if (this.selected) output += ' selected';
  output += '>' + this.text;
  if (this.value != '') output += ' (Add $' + this.value + ')';
  return output;
}

function optionHTML2() {
  return '</option>\n';
}

function optionString1() {
  var output = '<input type="hidden" name="' + this.selectCode +
    '" value="' + this.code + '">' + this.text;
  if (this.value != '') output += ' (Add $' + this.value + ')';
  return output;
}

function optionString2() {
  return '';
}

function showHTML(obj) {
  var output = obj.getHTML1();

  for (var i=0; i<obj.index; i++)
    output += showHTML(obj.Contents[i]);

  return output + obj.getHTML2();
}

function showString(obj) {
  var output = obj.getString1();

  for (var i=0; i<obj.index; i++)
    output += showString(obj.Contents[i]);

  return output + obj.getString2();
}

function total(form) {
  var monthly = 0;
  var setup = 0;
  
  for (var i = 0; i<form.elements.length; i++) {
    var code = '';
    var selectCode = '';
    if (form.elements[i].type == 'select-one') {
      var selected = form.elements[i].selectedIndex;
      code = form.elements[i].options[selected].value;
      selectCode = form.elements[i].name;
    }
    else if (form.elements[i].type == 'hidden') {
      code = form.elements[i].value;
      selectCode = form.elements[i].name;
    }

    if (code != '' && selectCode != '') {
      if (selectCode == 'setup')
        setup += options[code].value - 0;
      else
        monthly += options[code].value - 0;
    }
  }
  
  var total = monthly + setup;
  
  if (window.formatMoney) {
    monthly = formatMoney(monthly);
    setup = formatMoney(setup);
    total = formatMoney(total);
  }
  
  if (window.DOMObjects) {
    var html = '<p align="center">Setup: ' + setup +
      ' Monthly: ' + monthly + ' Total: ' + total + '</p>';
    DOMElementSetInnerHTML(DOMObjects['dynamicArea'],html)
    DOMElementShow(DOMObjects['dynamicArea']);
  }
  else if (document.outputForm) {
    document.outputForm.monthly.value = monthly;
    document.outputForm.setup.value = setup;
    document.outputForm.total.value = total;
  }
}