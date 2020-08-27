/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/expect-expect */
// eslint-disable-next-line import/no-named-as-default
import { getRandom, run } from '../general/general-function.js';

export const gameQuestion = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let result = a >= b ? b : a;
  while (result !== 1) {
    if (a % result === 0 && b % result === 0) {
      return result;
    // eslint-disable-next-line no-else-return
    }
    result -= 1;
  }
  return result;
};

export const createPairQuestionAnswer = () => {
  const a = getRandom();
  const b = getRandom();
  const result = gcd(a, b);
  return [`${a} ${b}`, result];
};

export default () => run(gameQuestion, createPairQuestionAnswer);
