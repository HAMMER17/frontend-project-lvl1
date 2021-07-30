#!/usr/bin/env node

import game from '../src/index.js';
import { description, question, correct } from '../src/brain-calc/gameLogic.js';

game(description, question, correct);
