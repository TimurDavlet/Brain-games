/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/expect-expect */
// eslint-disable-next-line import/no-named-as-default
import { getRandom, run } from '../general-function.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

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

const createQuestionAnswer = () => {
  const a = getRandom();
  const b = getRandom();
  const question = `${a} ${b}`;
  const answer = String(gcd(a, b));

  return [question, answer];
};

export default () => run(gameQuestion, createQuestionAnswer);
