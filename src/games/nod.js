/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/expect-expect */
// eslint-disable-next-line import/no-named-as-default
import start from '../index.js';
import { getRandom } from '../general/general-function.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const nod = () => {
  const a = getRandom();
  const b = getRandom();
  console.log(`Question: ${a} ${b}`);
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

// eslint-disable-next-line import/prefer-default-export
export const run = () => start(gameQuestion, nod);
