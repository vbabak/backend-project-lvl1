import {
  getRandomInt,
  checkIterationAnswer,
  printStatement,
} from '../functions.js';
import engine from '../index.js';

function getMaxCommonDivisor(n1, n2) {
  const min = Math.min(Math.abs(n1), Math.abs(n2));
  for (let i = min; i > 0; i -= 1) {
    if (n1 % i === 0 && n2 % i === 0) {
      return i;
    }
  }
  return 1;
}

async function iterateGcd() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const correctAnswer = getMaxCommonDivisor(num1, num2);
  printStatement(`Question: ${num1} ${num2}`);
  return checkIterationAnswer(correctAnswer);
}

export default async () => {
  const instructions = 'Find the greatest common divisor of given numbers.';
  await engine(instructions, iterateGcd);
};
