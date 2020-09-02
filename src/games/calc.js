// eslint-disable-next-line import/no-named-as-default
import { getRandom, run } from '../general-function.js';

const gameQuestion = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

// eslint-disable-next-line no-shadow
const getValue = (list) => {
  const maxNumberOfParameters = list.length - 1;
  const result = Math.ceil(Math.random() * Math.ceil(maxNumberOfParameters));

  return list[result];
};

const getAnswers = (a, b, value) => {
  if (value === '+') {
    return a + b;
  } if (value === '-') {
    return a - b;
  }
  return a * b;
};

const createQuestionAnswer = () => {
  const a = getRandom();
  const b = getRandom();
  const operation = getValue(operations);
  const question = `${a} ${operation} ${b}`;
  const answer = String(getAnswers(a, b, operation));

  return [question, answer];
};

export default () => run(gameQuestion, createQuestionAnswer);
