import randomInteger from '../random-number-generator.js';
import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let result = a >= b ? b : a;
  while (result !== 1) {
    if (a % result === 0 && b % result === 0) {
      return result;
    }
    result -= 1;
  }
  return result;
};

const createQuestionAnswer = () => {
  const a = randomInteger();
  const b = randomInteger();
  const question = `${a} ${b}`;
  const answer = String(gcd(a, b));

  return [question, answer];
};

export default () => playGame(description, createQuestionAnswer);
