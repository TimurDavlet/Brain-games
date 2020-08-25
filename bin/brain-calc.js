#!/usr/bin/env node

import { gameQuestion, createPairQuestionAnswer } from '../src/games/calc.js';
import start from '../src/index.js'

start(gameQuestion, createPairQuestionAnswer);
