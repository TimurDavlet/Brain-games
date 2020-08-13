/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/expect-expect */
import * as games from '../src/index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const nod = (a, b) => {
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

const arrayQuestion = [];
const arrayAnswer = [];

const gcd = () => {
  for (let i = 0; i <= 3; i += 1) {
    const a = games.getRandom();
    const b = games.getRandom();
    arrayQuestion.push(`${a} ${b}`);
    arrayAnswer.push(nod(a, b));
  }
  return games.start(gameQuestion, arrayQuestion, arrayAnswer);
};

export default gcd;
