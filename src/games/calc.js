// eslint-disable-next-line import/no-named-as-default
import start from '../index.js';
import { getRandom } from '../general/general-function.js';

const gameQuestion = 'What is the result of the expression?';

const arrayOperand = ['+', '-', '*'];

const getOperand = (array) => array[getRandom(3)];

const calc = () => {
  const a = getRandom();
  const b = getRandom();
  const randomOperand = getOperand(arrayOperand);
  console.log(`Question: ${a} ${randomOperand} ${b}`);
  if (randomOperand === '+') {
    return a + b;
  } if (randomOperand === '-') {
    return a - b;
  }
  return a * b;
};

// eslint-disable-next-line import/prefer-default-export
export const run = () => start(gameQuestion, calc);
