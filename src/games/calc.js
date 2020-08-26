// eslint-disable-next-line import/no-named-as-default
import getRandom from '../general/general-function.js';

export const gameQuestion = 'What is the result of the expression?';

const list = ['+', '-', '*'];

// eslint-disable-next-line no-shadow
const getOperand = (list) => {
  const head = list.pop();
  return head;
};

export const createPairQuestionAnswer = () => {
  const a = getRandom();
  const b = getRandom();
  const operand = getOperand(list);

  if (operand === '+') {
    return [`${a} + ${b}`, a + b];
  } if (operand === '-') {
    return [`${a} - ${b}`, a - b];
  }
  return [`${a} * ${b}`, a * b];
};
