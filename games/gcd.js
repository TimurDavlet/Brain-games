import * as games from '../src/index.js';

const nod = (a, b) => {
  let result = a >= b ? b : a;
  while (result !== 1) {
    if (a % result === 0 && b % result === 0) {
      return result;
    // eslint-disable-next-line no-else-return
    } else {
      result -= 1;
    }
  }
  return result;
};

// eslint-disable-next-line consistent-return
const run = () => {
  games.welcom();
  const name = games.userName();
  games.hello(name);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const oneRandom = games.getRandom();
    const twoRandom = games.getRandom();
    const resultNod = String(nod(oneRandom, twoRandom));
    games.question(`${oneRandom} ${twoRandom}`);
    const answer = games.answer();
    if (answer === resultNod) {
      games.correct();
    } else {
      return games.unCorrect(answer, resultNod, name);
    }
  }
  games.finish(name);
};

export default run;
