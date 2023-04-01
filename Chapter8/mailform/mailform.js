document.write(
  '<table width="595" class="blue">' +
  '<form name="data">' +
  '<tr><td>' +

  '<table><tr><td><p>To email: </p></td><td>' +
  '<input type="text" name="to" size="40"></td></tr>' +
  '<tr><td><p>Subject: </p></td><td>' +
  '<input type="text" name="subject" value="" size="40">' +
  '</td></tr>' +
  
  '<tr><td><p>From name: </p></td><td>' +
  '<input type="text" name="name" size="40"></td></tr>' +
  '<tr><td><p>From email: </p></td><td>' +
  '<input type="text" name="email" value="" size="40">' +
  '</td></tr></table>' +
  
  '<hr>' +

  '<table width="100%"><tr><td valign="top" width="25%">' +

  '<p>' +
  'Country:' +
  '<br>' +
  '<select name="country">' +
  '<option value="0">Argentina' +
  '<option value="1">Australia' +
  '<option value="2">Austria' +
  '<option value="3">Belgium' +
  '<option value="4">Bermuda' +
  '<option value="5">Bolivia' +
  '<option value="6">Brazil' +
  '<option value="7">Brunei Darussalam' +
  '<option value="8">Canada' +
  '<option value="9">Caribbean' +
  '<option value="10">Chile' +
  '<option value="11">China' +
  '<option value="12">Colombia' +
  '<option value="13">Croatia' +
  '<option value="14">Czech Republic' +
  '<option value="15">Denmark' +
  '<option value="16">Estonia' +
  '<option value="17">Europe' +
  '<option value="18">Finland' +
  '<option value="19">Former USSR' +
  '<option value="20">France' +
  '<option value="21">Germany' +
  '<option value="22">Greece' +
  '<option value="23">Hong Kong' +
  '<option value="24">Hungary' +
  '<option value="25">Iceland' +
  '<option value="26">India' +
  '<option value="27">Indonesia' +
  '<option value="28">Ireland' +
  '<option value="29">Israel' +
  '<option value="30">Italy' +
  '<option value="31">Japan' +
  '<option value="32">Korea' +
  '<option value="33">Latin America' +
  '<option value="34">Luxemburg' +
  '<option value="35">Macedonia' +
  '<option value="36">Malaysia' +
  '<option value="37">Mexico' +
  '<option value="38">Middle East' +
  '<option value="39">Netherlands' +
  '<option value="40">New Zealand' +
  '<option value="41">North Africa' +
  '<option value="42">Norway' +
  '<option value="43">Peru' +
  '<option value="44">Philippines' +
  '<option value="45">Poland' +
  '<option value="46">Portugal' +
  '<option value="47">Russia' +
  '<option value="48">Russian Federation' +
  '<option value="49">Singapore' +
  '<option value="50">Slovak Republic' +
  '<option value="51">Slovakia' +
  '<option value="52">Slovenia' +
  '<option value="53">Slovenija' +
  '<option value="54">South Africa' +
  '<option value="55">South Korea' +
  '<option value="56">Spain' +
  '<option value="57">Sweden' +
  '<option value="58">Switzerland' +
  '<option value="59">Taiwan' +
  '<option value="60">Thailand' +
  '<option value="61">Turkey' +
  '<option value="62">United Kingdom' +
  '<option value="63" SELECTED>United States' +
  '<option value="64">Uruguay' +
  '<option value="65">Venezuela' +
  '<option value="66">Yugoslavia' +
  '</select>' +
  '</p>' +

  '</td><td valign="top" width="25%">' +

  '<p>' +
  'Age:' +
  '<br>' +
  '<select name="age">' +
  '<option value="0"> < 10' +
  '<option value="1"> 10 - 15' +
  '<option value="2"> 16 - 19' +
  '<option value="3" selected>  20 - 29' +
  '<option value="4"> 30 - 39' +
  '<option value="5"> 40 - 49' +
  '<option value="6"> 50 - 59' +
  '<option value="7"> 60 - 69' +
  '<option value="8"> 70+' +
  '</select>' +
  '</p>' +

  '</td><td valign="top" width="25%">' +

  '<p>' +
  'Hobbies:' +
  '<br>' +
  '<select name="hobbies" multiple size="3">' +
  '<option value="0" selected>Programming' +
  '<option value="1">Carpentry' +
  '<option value="2">Reading' +
  '<option value="3">Writing' +
  '<option value="4">Cycling' +
  '<option value="5">Swimming' +
  '<option value="6">Walking' +
  '<option value="7">Running' +
  '<option value="8">Flying' +
  '</select>' +
  '</p>' +

  '</td><td valign="top" width="25%">' +

  '<p>' +
  'Sex:' +
  '<br>' +
  '<input type="radio" name="sex" value="0" checked> Male' +
  '<br>' +
  '<input type="radio" name="sex" value="1"> Female' +
  '</p>' +

  '</td></tr></table>' +

  '<hr>' +

  '<table width="100%">' +
  '<tr>' +
  '<td width="10%">' +
  '<p>' +
  'Interests:' +
  '</p>' +
  '</td>' +
  '<td align="right" width="45%">' +
  '<p>' +
  'JavaScript: <input type="checkbox" name="i0">' +
  '</p>' +
  '</td>' +
  '<td align="right" width="45%">' +
  '<p>' +
  'Java: <input type="checkbox" name="i1">' +
  '</p>' +
  '</td>' +
  '</tr>' +

  '<tr>' +
  '<td width="10%">' +
  '<p>' +
  '&nbsp;' +
  '</p>' +
  '</td>' +
  '<td align="right" width="45%">' +
  '<p>' +
  'JScript: <input type="checkbox" name="i2">' +
  '</p>' +
  '</td>' +
  '<td align="right" width="45%">' +
  '<p>' +
  'VBScript: <input type="checkbox" name="i3">' +
  '</p>' +
  '</td>' +
  '</tr>' +

  '<tr>' +
  '<td width="10%">' +
  '<p>' +
  '&nbsp;' +
  '</p>' +
  '</td>' +
  '<td align="right" width="45%">' +
  '<p>' +
  'ActiveX: <input type="checkbox" name="i4">' +
  '</p>' +
  '</td>' +
  '<td align="right" width="45%">' +
  '<p>' +
  'HTML: <input type="checkbox" name="i5">' +
  '</p>' +
  '</td>' +
  '</tr>' +

  '<tr>' +
  '<td width="10%">' +
  '<p>' +
  '&nbsp;' +
  '</p>' +
  '</td>' +
  '<td align="right" width="45%">' +
  '<p>' +
  'Dynamic HTML: <input type="checkbox" name="i6">' +
  '</p>' +
  '</td>' +
  '<td align="right" width="45%">' +
  '<p>' +
  'Style Sheets: <input type="checkbox" name="i7">' +
  '</p>' +
  '</td></tr></table>' +
  '</form>'
)

document.write(
  '<form name="email" method="post" enctype="text/plain">' +
  '<table width="100%"><tr><td align="right">' +
  '<input type="button" value=" Reset " onClick="' +
  'document.data.reset();document.email.reset()"> ' +
  '<input type="submit" value=" Send " onClick="populate()"> ' +
  '<input type="hidden" name="<script src">' +
  '</td></tr></table>' +
  '</form>' +
  
  '</td></tr>' +
   
  '</table>'
)

function populate() {
  document.email.action =
    'mailto:' + document.data.to.value +
    '?subject=' + document.data.subject.value;

  var output = '';
  output += '"http://www.domain.com/mailform.js"><\/script>';

  output += '\n<script language="JavaScript">';

  output += outputText('to');
  output += outputText('subject');
  output += outputText('name');
  output += outputText('email');
  output += outputSelect('country');
  output += outputSelect('age');
  output += outputMultiple('hobbies');
  output += outputCheckBox('i0');
  output += outputCheckBox('i1');
  output += outputCheckBox('i2');
  output += outputCheckBox('i3');
  output += outputCheckBox('i4');
  output += outputCheckBox('i5');
  output += outputCheckBox('i6');
  output += outputCheckBox('i7');
  output += outputRadio('sex');

  output += '\n<\/script>';

  document.email.elements["<script src"].value = output;
}

function outputText(name) {
  var value = document.data.elements[name].value;
  return '\ninputText("'+name+'","'+value+'");';
}

function outputSelect(name) {
  var value = document.data.elements[name].selectedIndex;
  return '\ninputSelect("'+name+'",'+value+');';
}

function outputCheckBox(name) {
  var value = document.data.elements[name].checked;
  return '\ninputCheckBox("'+name+'",'+value+');';
}

function outputRadio(name) {
  var output = '', value;
  for (var i=0; i<document.data.elements[name].length;i++) {
    value = document.data.elements[name][i].checked;
    output += '\ninputRadio("'+name+'",'+value+','+i+');';
  }
  return output;
}

function outputMultiple(name) {
  var output = '', value;
  var length = document.data.elements[name].options.length;
  for (var i=0; i<length;i++) {
    value = document.data.elements[name].options[i].selected;
    output +=
      '\ninputMultiple("'+name+'",'+value+','+i+');';
  }
  return output;
}

function inputText(name,value) {
  document.data.elements[name].value = value;
}

function inputSelect(name,value) {
  document.data.elements[name].selectedIndex = value;
}

function inputCheckBox(name,value) {
  document.data.elements[name].checked = value;
}

function inputRadio(name,value,index) {
  document.data.elements[name][index].checked = value;
}

function inputMultiple(name,value,i) {
  document.data.elements[name].options[i].selected = value;
}