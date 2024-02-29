#!/usr/bin/env node

import { startGame } from '../src/cli.js';
import {
  playRoundProgression,
  questionProgression,
} from '../src/games/brain-progression.js';

startGame(playRoundProgression, questionProgression);
