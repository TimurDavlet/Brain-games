import randomInteger from '../random-number-generator.js';
import playGame from '../index.js';

const description = 'What number is missing in the progression?';

const createProgression = (randomNumber, progressionStep, maxProgressionLength) => {
  const progression = [];

  for (let i = 0; i < maxProgressionLength; i += 1) {
    progression.push(randomNumber + progressionStep * i);
  }

  return progression;
};

const createQuestionAnswer = () => {
  const startNumber = randomInteger();
  const diff = 2;
  const progressionLength = 10;
  const progression = createProgression(startNumber, diff, progressionLength);
  const hiddenIndex = randomInteger(0, progressionLength);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => playGame(description, createQuestionAnswer);
