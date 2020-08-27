// eslint-disable-next-line import/no-named-as-default
import { getRandom, run } from '../general/general-function.js';

const gameQuestion = 'What number is missing in the progression?';

const createRandomList = () => {
  const startNumber = getRandom();
  const diff = 2;
  const list = [];
  const maxLengsthList = 10;

  for (let i = 1; i <= maxLengsthList; i += 1) {
    list.push(startNumber + diff * i);
  }
  return list;
};

const createPairQuestionAnswer = () => {
  const progressionList = createRandomList();
  const halfOfTheList = Math.floor(progressionList.length / 2);
  const number = progressionList[halfOfTheList];
  progressionList[halfOfTheList] = '..';
  return [progressionList.join(' '), number];
};

export default () => run(gameQuestion, createPairQuestionAnswer);
