#!/usr/bin/env node

import { gameQuestion, createPairQuestionAnswer } from '../src/games/gcd.js';
import start from '../src/index.js'

start(gameQuestion, createPairQuestionAnswer);
