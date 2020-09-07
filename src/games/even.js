import randomInteger from '../general-function.js';
import startTheGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const createQuestionAnswer = () => {
  const question = randomInteger();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => startTheGame(description, createQuestionAnswer);
