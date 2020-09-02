// eslint-disable-next-line import/no-named-as-default
import { run } from '../general-function.js';

const gameQuestion = 'What number is missing in the progression?';

const createProgressions = () => {
  const startNumbers = [135, 230, 311, 111, 215, 400, 5, 17, 10, 521, 99];
  const diff = 2;
  const listProgressions = [];
  const maxLengsthList = 10;
  const maxLengthListProgressions = startNumbers.length;

  for (let j = 0; j < maxLengthListProgressions; j += 1) {
    const listProgression = [];

    for (let i = 1; i <= maxLengsthList; i += 1) {
      listProgression.push(startNumbers[j] + diff * i);
    }

    listProgressions.push(listProgression);
  }

  return listProgressions;
};

const createQuestionAnswer = () => {
  const progressionsList = createProgressions();
  const progressionsListLength = progressionsList.length - 1;
  const randomProgressionList = Math.floor(Math.random() * Math.ceil(progressionsListLength));
  const progressionList = progressionsList[randomProgressionList];
  const halfOfTheList = Math.floor(progressionList.length / 2);
  const hiddenNumber = progressionList[halfOfTheList];
  progressionList[halfOfTheList] = '..';
  const question = progressionList.join(' ');
  const answer = String(hiddenNumber);

  return [question, answer];
};

export default () => run(gameQuestion, createQuestionAnswer);
