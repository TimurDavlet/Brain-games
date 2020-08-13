// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

export const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max));

export const isEven = (random) => (random % 2 === 0);

export const userAnswer = (answer) => {
  if (answer === 'yes') {
    return true;
  } if (answer === 'no') {
    return false;
  }
  return null;
};

// eslint-disable-next-line consistent-return
export const run = () => {
  console.log('Welcome to the Brain Games!');

  // eslint-disable-next-line no-shadow
  const printName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${printName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const random = getRandomInt();
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(random) === userAnswer(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${answer === 'no' ? 'yes' : 'no'}.`);
      return console.log(`Let's try again, ${printName}`);
    }
  }
  console.log(`Congratulations, ${printName}`);
};
