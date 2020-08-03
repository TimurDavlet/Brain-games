import * as games from '../src/index.js';

const randomNumber = () => {
  let start = games.getRandom();
  const array = [];
  array.push(start);
  for (let i = 1; i < 10; i += 1) {
    array.push(start + 2);
    start += 2;
  }
  return array;
};

const randomValueArray = (array, number) => {
  // eslint-disable-next-line no-param-reassign
  array[number] = '..';
  return array;
};

// eslint-disable-next-line consistent-return
const run = () => {
  games.welcom();
  const name = games.userName();
  games.hello(name);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const number = games.getRandom(10);
    const newArray = randomNumber();
    const result = String(newArray[number]);
    const randomArray = randomValueArray(newArray, number);
    games.question(`${randomArray}`);
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
