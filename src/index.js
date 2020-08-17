// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

export const start = (gameQuestion, func) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(gameQuestion);

  for (let i = 0; i < 3; i += 1) {
    const question = func();
    const answer = readlineSync.question('Your answer: ');
    if (String(question) === answer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${question}. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export default start;
