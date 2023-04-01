myChoice[item++] = new Choice(
  'How often do you play Tetris?',
  2, 'every day',
  4, 'every week',
  6, 'never'
);

myChoice[item++] = new Choice(
  'You usually walk',
  6, 'fairly fast, with long steps',
  4, 'fairly fast, with short, quick steps',
  7, 'less fast head up, looking the world in the face',
  2, 'less fast, head down',
  1, 'very slowly'
);

myChoice[item++] = new Choice(
  'When talking to people you',
  4, 'stand with your arms folded',
  2, 'have your hands clasped',
  5, 'have one or both your hands on your hips',
  7, 'touch or push the person to whom you are talking',
  6, 'play with your ear, touch your chin, or smooth your hair'
);

myChoice[item++] = new Choice(
  'When relaxing, you sit with',
  4, 'your knees bent with your legs neatly side by side',
  6, 'your legs crossed',
  2, 'your legs stretched out or straight',
  1, 'one leg curled under you'
);

myChoice[item++] = new Choice(
 'When something really amuses you, you react with',
  6, 'a big, appreciative laugh',
  4, 'a laugh, but not a loud one',
  3, 'a quiet chuckle',
  5, 'a sheepish smile'
);

myChoice[item++] = new Choice(
  'When you go to a party or social gathering you..',
  6, 'make a loud entrance so everyone notices you',
  4, 'make a quiet entrance, looking around for someone you know',
  2, 'make the quietest entrance, trying to stay unnoticed'
);

myChoice[item++] = new Choice(
  'You\'re working very hard, concentrating hard, and you\'re interrupted. Do you..',
  6, 'welcome the break',
  2, 'feel extremely irritated',
  4, 'vary between these two extremes'
);

myChoice[item++] = new Choice(
  'Which of the following colours do you like most?',
  6, 'red or orange',
  7, 'black',
  5, 'yellow or light blue',
  4, 'green',
  3, 'dark blue or purple',
  2, 'white',
  1, 'brown or grey'
);

myChoice[item++] = new Choice(
  'When you are in bed at night, in those last few moments before going to sleep, you lie',
  7, 'stretched out on your back',
  6, 'stretched out face down on your stomach',
  4, 'on your side, slightly curled',
  2, 'with your head on one arm',
  1, 'with your head under the covers'
);

myChoice[item++] = new Choice(
  'You often dream that you are',
  4, 'falling',
  2, 'fighting or struggling',
  3, 'searching for something or somebody',
  5, 'flying or floating',
  6, 'you usually have dreamless sleep',
  1, 'your dreams are always pleasant'
);

function tallyScore(score) {
  if (score < 21) output = 'People think you are shy, nervous, and indecisive, someone who needs looking after, who always wants someone else to make the decisions & who doesn\'t want to get involved with anyone or anything. They see you as a worrier who always sees problems that don\'t exist. Some people think you\'re boring. Only those who know you well know that you aren\'t.';
  else if (score < 31) output = 'Your friends see you as painstaking and fussy. They see you as very cautious, extremely careful,a slow and steady plodder. It\'d really surprise them if you ever did something impulsively or on the spur of the moment, expecting you to examine everything carefully from every angle and then, usually decide against it. They think this reaction is caused partly by your careful nature.';
  else if (score < 41) output = 'Others see you as sensible, cautious, careful & practical. They see you as clever, gifted, or talented, but modest... Not a person who makes friends too quickly or easily, but someone who\'s extremely loyal to friends you do make and who expect the same loyalty in return. Those who really get to know you realise it takes a lot to shake your trust in your friends, but equally that it takes you a long time to get over it if that trust is ever broken.';
  else if (score < 51) output = 'Others see you as fresh, lively, charming, amusing, practical, and always interesting; someone who\'s constantly in the centre of attention, but sufficiently well-balanced not to let it go to their head. They also see you as kind, considerate, and understanding; someone who\'ll always cheer them up and help them out.';
  else if (score < 61) output = 'Others see you as an exciting, highly volatile, rather impulsive personality; a natural leader, who\'s quick to make decisions, though not always the right ones. They see you as bold and adventuresome, someone who will try anything once; someone who takes chances and enjoys an adventure. They enjoy being in your company because of the excitement you radiate.';
  else output = 'Others see you as someone they should "handle with care". You\'re seen as vain, self-centred, and who is extremely dominant. Others may admire you, wishing they could be more like you, but don\'t always trust you, hesitating to become too deeply involved with you.';

  return output;
}