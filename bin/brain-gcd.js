#!/usr/bin/env node
import game from '../src/games/gcd.js';
import startGame from '../src/engine.js';

startGame(game.instructions, game.iterate).catch(console.error);
