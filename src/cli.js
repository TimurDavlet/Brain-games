import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const printName = readlineSync.question('May I have your name? ');

export default printName;
