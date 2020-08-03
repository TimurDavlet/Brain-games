import readlineSync from 'readline-sync';

export const getRandom = (num = 100) => Math.floor(Math.random() * Math.floor(num));

export const userName = () => readlineSync.question('May I have your name? ');

export const welcom = () => console.log('Welcome to the Brain Games!');

export const hello = (name) => console.log(`Hello, ${name}!`);

export const question = (funcRandom) => console.log(`Question: ${funcRandom}`);

export const answer = () => readlineSync.question('Your answer:  ');

export const correct = () => console.log('Correct!');

export const unCorrect = (userAnswer, correctAnswer, name) => console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}`);

export const finish = (name) => console.log(`Congratulations, ${name}!`);
