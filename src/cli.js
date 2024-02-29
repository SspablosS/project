import readlineSync from 'readline-sync';

const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

const askName = () => readlineSync.question('May I have your name? ');

export { greeting, askName };
