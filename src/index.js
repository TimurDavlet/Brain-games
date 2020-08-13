// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

export const start = (gameQuestion, arrayQuestion, arrayAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(gameQuestion);

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${arrayQuestion[i]}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(arrayAnswer[i]) === answer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${arrayAnswer[i]}. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export const getRandom = (num = 100) => Math.floor(Math.random() * Math.floor(num));
