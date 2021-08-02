#!/usr/bin/env node

import game from '../src/index.js';
import { description, question, correct } from '../src/brain-progression/gameLogic.js';

game(description, question, correct);
