// eslint-disable-next-line import/no-named-as-default
import start from '../index.js';
import { getRandom } from '../general/general-function.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const even = () => {
  const num = getRandom();
  console.log(`Question: ${num}`);
  if (isEven(num)) {
    return 'yes';
  }
  return 'no';
};

// eslint-disable-next-line import/prefer-default-export
export const run = () => start(gameQuestion, even);
