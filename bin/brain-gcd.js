#!/usr/bin/env node

import game from '../src/index.js';
import { description, getGameQuestionAndAnswer } from '../src/games/brain-gcd.js';

game(description, getGameQuestionAndAnswer);
