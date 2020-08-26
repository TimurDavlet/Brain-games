// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

const start = (gameQuestion, func) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(gameQuestion);

  for (let i = 0; i < 3; i += 1) {
    const pair = func();
    const [question, result] = pair;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (String(result) === answer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}`);
    }
  }
  console.log(`Congratulations, ${name}`);
  return 'Game over';
};

export default start;
