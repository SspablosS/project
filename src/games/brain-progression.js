import { checkAnswer, getAnswerInt } from '../cli.js';

const questionProgression = 'What number is missing in the progression?';

const playRoundProgression = () => {
  const start = Math.floor(Math.random() * 101);
  const difference = Math.floor(Math.random() * 11) - 5;
  const length = Math.floor(Math.random() * 6) + 5;
  const hiddenIndex = Math.floor(Math.random() * length);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * difference);
  }
  const correctAnswer = progression[hiddenIndex];

  progression[hiddenIndex] = '..';
  progression.join(' ');

  const answer = getAnswerInt(`${progression.join(' ')}`);

  return checkAnswer(answer, correctAnswer);
};

export { playRoundProgression, questionProgression };
