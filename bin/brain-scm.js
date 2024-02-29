#!/usr/bin/env node

import { startGame } from '../src/cli.js';
import { playRound, question } from '../src/games/brain-scm.js';

startGame(playRound, question);
