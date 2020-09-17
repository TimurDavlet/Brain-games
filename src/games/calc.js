import randomInteger from '../random-number-generator.js';
import playGame from '../index.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getOperation = (operation) => {
  const maxNumberOfParameters = operation.length - 1;
  const index = randomInteger(0, maxNumberOfParameters);

  return operation[index];
};

const calculate = (a, b, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      return result;
  }
  return result;
};

const createQuestionAnswer = () => {
  const a = randomInteger();
  const b = randomInteger();
  const operation = getOperation(operations);
  const question = `${a} ${operation} ${b}`;
  const answer = String(calculate(a, b, operation));

  return [question, answer];
};

export default () => playGame(description, createQuestionAnswer);
