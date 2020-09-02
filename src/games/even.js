// eslint-disable-next-line import/no-named-as-default
import { getRandom, run } from '../general-function.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const getAnswers = (num) => {
  if (isEven(num)) {
    return 'yes';
  }
  return 'no';
};

const createQuestionAnswer = () => {
  const num = getRandom();
  const question = num;
  const answer = String(getAnswers(num));

  return [question, answer];
};

export default () => run(gameQuestion, createQuestionAnswer);
