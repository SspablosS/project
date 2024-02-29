#!/usr/bin/env node

import { startGame } from '../src/cli.js';
import { playRoundScm, questionScm } from '../src/games/brain-scm.js';

startGame(playRoundScm, questionScm);
