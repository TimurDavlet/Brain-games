// eslint-disable-next-line import/no-named-as-default
import start from '../index.js';
import { getRandom } from '../general/general-function.js';

const gameQuestion = 'What number is missing in the progression?';

const progression = () => {
  let startNumber = getRandom();
  const array = [];
  let num = 0;
  const randomNumber = getRandom(10);
  array.push(startNumber);
  for (let i = 1; i < 10; i += 1) {
    array.push(startNumber + 2);
    startNumber += 2;
  }
  num = array[randomNumber];
  array[randomNumber] = '..';
  console.log(`Question: ${array.join(' ')}`);
  return num;
};

// eslint-disable-next-line import/prefer-default-export
export const run = () => start(gameQuestion, progression);
