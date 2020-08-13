import * as games from '../src/index.js';

const gameQuestion = 'What number is missing in the progression?';

const arrayQuestion = [];
const arrayAnswer = [];

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

const numbers = () => {
  for (let j = 0; j < 3; j += 1) {
    const array = randomNumber();
    const number = games.getRandom(10);
    arrayQuestion.push(array);
    arrayAnswer.push(array[number]);
    array[number] = '..';
  }
  return games.start(gameQuestion, arrayQuestion, arrayAnswer);
};

export default numbers;
