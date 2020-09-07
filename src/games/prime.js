import randomInteger from '../general-function.js';
import startTheGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 1) {
    return false;
  }
  const maximumDivisor = Math.floor(num / 2);

  for (let i = 2; i < maximumDivisor; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const createQuestionAnswer = () => {
  const question = randomInteger();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => startTheGame(description, createQuestionAnswer);
