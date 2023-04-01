function Choice(question) {
  this.question = question;
  this.answer = -1;
  this.scores = new Array();
  this.answers = new Array();

  for (var i=0; i < (Choice.arguments.length - 1)/2; i++) {
    this.scores[i] = Choice.arguments[i*2 + 1];
    this.answers[i] = Choice.arguments[i*2 + 2];
  }
}

var item = 0;
var myChoice = new Array();
var q = 0;

function show() {
  var output = '';
  var score = 0;

  if (q < myChoice.length) {
    output +=
      '<form><b>' + myChoice[q].question + '<\/b><br>';

    for (var i=0; i<myChoice[q].answers.length; i++) {
      output +=
        '<input type="radio" name="answer"' +
        'onClick="myChoice[' + q + '].answer=' +
        myChoice[q].scores[i] + '">' +
        myChoice[q].answers[i] + '<br>';
    }

    output +=
      '<input type="button" value="Next" ' +
      'onClick="if (myChoice[' + q + '].answer!=-1) show()">';
    output += '<\/form>';
    q++;
  }
  else {
    for (var i=0; i<myChoice.length; i++)
      score += myChoice[i].answer
    output = tallyScore(score);
  }

  DOMElementSetInnerHTML(DOMObjects['myDiv'], output)
}