// eslint-disable-next-line import/no-named-as-default
import { getRandom, run } from '../general/general-function.js';

export const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export const createPairQuestionAnswer = () => {
  const num = getRandom();
  if (isEven(num)) {
    return [num, 'yes'];
  }
  return [num, 'no'];
};

export default () => run(gameQuestion, createPairQuestionAnswer);
