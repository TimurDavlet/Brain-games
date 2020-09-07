import randomInteger from '../general-function.js';
import startTheGame from '../index.js';

const description = 'What number is missing in the progression?';

const number = () => randomInteger();

const createProgression = (num) => {
  const startNumber = num;
  const diff = 2;
  const progression = [];
  const maxProgressionLength = 10;

  for (let i = 0; i < maxProgressionLength; i += 1) {
    progression.push(startNumber + diff * i);
  }

  return progression;
};

const createQuestionAnswer = () => {
  const progression = createProgression(number());
  const progressionLength = progression.length;
  const halfOfTheProgression = Math.floor(progressionLength / 2);
  const hiddenNumber = progression[halfOfTheProgression];
  progression[halfOfTheProgression] = '..';
  const question = progression.join(' ');
  const answer = String(hiddenNumber);

  return [question, answer];
};

export default () => startTheGame(description, createQuestionAnswer);
