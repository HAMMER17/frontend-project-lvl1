#!/usr/bin/env node

import game from '../src/index.js';
import { description, question } from '../src/games/brain-prime.js';

game(description, question);
