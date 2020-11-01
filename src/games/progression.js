import {
  getRandomInt,
  printStatement,
  checkIterationAnswer,
} from '../commons.js';
import startGameEngine from '../engine.js';

function getProgression(start, step) {
  const size = 10;
  const progression = [];
  for (let i = 0; i < size; i += 1) {
    const next = start + i * step;
    progression.push(`${next}`);
  }
  return progression;
}

async function iterateProgression() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 10);
  const progression = getProgression(num1, num2);
  const idx = getRandomInt(0, progression.length - 1);
  const correctAnswer = progression[idx];
  progression[idx] = '..';
  printStatement(`Question: ${progression.join(' ')}`);
  return checkIterationAnswer(correctAnswer);
}

export default async () => {
  const instructions = 'What number is missing in the progression?';
  await startGameEngine(instructions, iterateProgression);
};
