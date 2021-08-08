#!/usr/bin/env node
import game from '../src/index.js';
import { description, getGameQuestionAndAnswer } from '../src/games/brain-even.js';

game(description, getGameQuestionAndAnswer);
