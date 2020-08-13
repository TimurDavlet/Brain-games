import * as games from '../src/index.js';

const gameQuestion = 'What is the result of the expression?';

const arrayOperand = ['+', '-', '*'];

const arrayQuestion = [];
const arrayAnswer = [];

const getOperand = (array) => array[games.getRandom(3)];

const resultRandom = (a, randomOperand, b) => {
  if (randomOperand === '+') {
    return a + b;
  } if (randomOperand === '-') {
    return a - b;
  }
  return a * b;
};

const calc = () => {
  for (let i = 0; i < 3; i += 1) {
    const operand = getOperand(arrayOperand);
    const a = games.getRandom();
    const b = games.getRandom();
    arrayQuestion.push(`${a} ${operand} ${b}`);
    arrayAnswer.push(resultRandom(a, operand, b));
  }
  return games.start(gameQuestion, arrayQuestion, arrayAnswer);
};

export default calc;
