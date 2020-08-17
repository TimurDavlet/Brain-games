// eslint-disable-next-line import/no-named-as-default
import start from '../index.js';
import { getRandom } from '../general/general-function.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const num = getRandom();
  console.log(`Question: ${num}`);
  if (isPrime(num)) {
    return 'yes';
  }
  return 'no';
};

// eslint-disable-next-line import/prefer-default-export
export const run = () => start(gameQuestion, prime);
