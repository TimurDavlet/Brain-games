// eslint-disable-next-line import/no-named-as-default
import { getRandom, run } from '../general-function.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const maximumDivisor = Math.floor(num / 2);
  if (num < 1) {
    return false;
  }
  for (let i = 2; i < maximumDivisor; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswers = (num) => {
  if (isPrime(num)) {
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
