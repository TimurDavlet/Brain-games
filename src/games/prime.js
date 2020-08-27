// eslint-disable-next-line import/no-named-as-default
import { getRandom, run } from '../general/general-function.js';

export const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const maximumDivisor = num / 2;
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

export const createPairQuestionAnswer = () => {
  const num = getRandom();

  if (isPrime(num)) {
    return [num, 'yes'];
  }
  return [num, 'no'];
};

export default () => run(gameQuestion, createPairQuestionAnswer);
