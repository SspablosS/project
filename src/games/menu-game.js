import readlineSync from 'readline-sync';
import { greeting, askName, startGame } from '../cli.js';
import { playRoundScm, questionScm } from './brain-scm.js';
import {
  playRoundProgression,
  questionProgression,
} from './brain-progression.js';

const gamesMenu = () => {
  console.log('Welcome to the Brain Games!');
  greeting(askName());

  const selectedGame = readlineSync.questionInt(
    'Выберите игру:\n[1] Brain-Scm\n[2] Brain-progression\n'
  );
  if (selectedGame === 1) {
    startGame(playRoundScm, questionScm);
  }
  if (selectedGame === 2) {
    startGame(playRoundProgression, questionProgression);
  }
};

export { gamesMenu };
