import readlineSync from 'readline-sync';

const playGame = (description, createQuestionAnswer) => {
  const maxNumberOfQuestions = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(description);

  for (let i = 0; i < maxNumberOfQuestions; i += 1) {
    const [question, result] = createQuestionAnswer();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default playGame;
