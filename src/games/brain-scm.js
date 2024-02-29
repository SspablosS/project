import { getAnswerInt, randNum, checkAnswer } from '../cli.js';

const question = 'Find the smallest common multiple of given numbers.';

const greatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
};

const leastCommonMultiple = (a, b) => {
  return (a * b) / greatestCommonDivisor(a, b);
};

const playRound = () => {
  const num1 = randNum(20);
  const num2 = randNum(20);
  const num3 = randNum(20);
  const answer = getAnswerInt(`${num1} ${num2} ${num3}`);

  const correctAnswer = leastCommonMultiple(
    num1,
    leastCommonMultiple(num2, num3)
  );
  return checkAnswer(answer, correctAnswer);
};

export { playRound, question };
