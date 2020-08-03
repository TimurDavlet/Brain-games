import * as games from '../src/index.js';

const arrayOperand = ['+', '-', '*'];

const getOperand = (array) => array[games.getRandom(3)];

const random = (a, operand, b) => (`${a} ${operand} ${b}`);

const resultRandom = (a, randomOperand, b) => {
  if (randomOperand === '+') {
    return a + b;
  } if (randomOperand === '-') {
    return a - b;
  }
  return a * b;
};

// eslint-disable-next-line consistent-return
const run = () => {
  games.welcom();
  const name = games.userName();
  games.hello(name);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const oneRandom = games.getRandom();
    const twoRandom = games.getRandom();
    const randomOperand = getOperand(arrayOperand);
    games.question(random(oneRandom, randomOperand, twoRandom));
    const answer = games.answer();
    const result = String(resultRandom(oneRandom, randomOperand, twoRandom));
    if (answer === result) {
      games.correct();
    } else {
      return games.unCorrect(answer, result, name);
    }
  }
  games.finish(name);
};

export default run;
