import {
  getRandomInt,
  printStatement,
  checkIterationAnswer,
} from '../commons.js';
import startGameEngine from '../engine.js';

function isPrime(n) {
  for (let i = n - 1; i > 1; i -= 1) {
    if (n % i === 0) return false;
  }
  return true;
}

async function iterateProgression() {
  const num1 = getRandomInt(2, 100);
  const correctAnswer = isPrime(num1) ? 'yes' : 'no';
  printStatement(`Question: ${num1}`);
  return checkIterationAnswer(correctAnswer);
}

export default async () => {
  const instructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  await startGameEngine(instructions, iterateProgression);
};
