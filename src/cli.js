import readlineSync from 'readline-sync';

const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

const randNum = (maxNum) => Math.floor(Math.random() * maxNum);

const askName = () => readlineSync.question('May I have your name? ');

const checkAnswer = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
  );

  return false;
};

const startGame = (round, question) => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  greeting(name);
  console.log(`${question}`);

  for (let i = 0; i < 3; i += 1) {
    if (!round(name)) {
      return console.log(`Let's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

const getAnswerString = (expression) => {
  console.log(`Question: ${expression}`);
  return readlineSync.question('Your answer: ');
};

const getAnswerInt = (expression) => {
  console.log(`Question: ${expression}`);
  return readlineSync.questionInt('Your answer: ');
};

export {
  greeting,
  randNum,
  askName,
  checkAnswer,
  startGame,
  getAnswerString,
  getAnswerInt,
};
