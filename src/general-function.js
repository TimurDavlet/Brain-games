// eslint-disable-next-line import/prefer-default-export

import startTheGame from './index.js';

// eslint-disable-next-line no-undef
export const getRandom = () => Math.ceil(Math.random() * Math.ceil(100));

export const run = (a, b) => startTheGame(a, b);
