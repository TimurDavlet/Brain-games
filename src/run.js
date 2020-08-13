// eslint-disable-next-line no-unused-vars
import * as games from './index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const arrayQuestion = [];
const arrayAnswer = [];

const isEven = (random) => (random % 2 === 0 ? 'yes' : 'no');

// eslint-disable-next-line import/prefer-default-export
export const run = () => {
  for (let i = 0; i < 3; i += 1) {
    const random = games.getRandom();
    const trueAnswer = isEven(random);
    arrayQuestion.push(random);
    arrayAnswer.push(trueAnswer);
  }
  return games.start(gameQuestion, arrayQuestion, arrayAnswer);
};
