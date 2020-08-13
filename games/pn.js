import * as games from '../src/index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const arrayQuestion = [];
const arrayAnswer = [];

const prime = (num) => {
  if (num < 1) {
    return 'no';
  }
  let i = num - 1;
  for (i; i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const pn = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = games.getRandom();
    arrayQuestion.push(randomNumber);
    arrayAnswer.push(prime(randomNumber));
  }
  return games.start(gameQuestion, arrayQuestion, arrayAnswer);
};

export default pn;
