import * as games from '../src/index.js';

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

// eslint-disable-next-line consistent-return
const run = () => {
  games.welcom();
  const name = games.userName();
  games.hello(name);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = games.getRandom();
    const result = prime(number);
    games.question(`${number}`);
    const answer = games.answer();
    if (answer === result) {
      games.correct();
    } else {
      return games.unCorrect(answer, result, name);
    }
  }
  games.finish(name);
};

export default run;
