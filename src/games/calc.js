import randomInteger from '../general-function.js';
import startTheGame from '../index.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

// eslint-disable-next-line no-shadow
const getOperation = (operations) => {
  const maxNumberOfParameters = operations.length - 1;
  const result = randomInteger(1, maxNumberOfParameters);

  return operations[result];
};

// eslint-disable-next-line consistent-return
const getAnswers = (a, b, operation) => {
  if (operation === '+') {
    return a + b;
  } if (operation === '-') {
    return a - b;
  } if (operation === '*') {
    return a * b;
  }
};

const createQuestionAnswer = () => {
  const a = randomInteger();
  const b = randomInteger();
  const operation = getOperation(operations);
  const question = `${a} ${operation} ${b}`;
  const answer = String(getAnswers(a, b, operation));

  return [question, answer];
};

export default () => startTheGame(description, createQuestionAnswer);
