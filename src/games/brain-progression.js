import { checkAnswer, getAnswerInt } from '../cli.js';

const questionProgression = 'What number is missing in the progression?';

const playRoundProgression = () => {
  const start = Math.floor(Math.random() * 8) + 1;
  const difference = Math.floor(Math.random() * 5) + 2;
  const length = Math.floor(Math.random() * 6) + 5;
  const hiddenIndex = Math.floor(Math.random() * length);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start * Math.pow(difference, i));
  }
  const correctAnswer = progression[hiddenIndex];

  progression[hiddenIndex] = '..';
  progression.join(' ');

  const answer = getAnswerInt(`${progression.join(' ')}`);

  return checkAnswer(answer, correctAnswer);
};

export { playRoundProgression, questionProgression };
