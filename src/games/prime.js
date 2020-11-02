import {
  getRandomInt,
} from '../commons.js';

function isPrime(n) {
  if (n < 2) return false;
  const maxDivisor = n / 2;
  for (let i = 2; i <= maxDivisor; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

function iterateProgression() {
  const num1 = getRandomInt(2, 100);
  const correctAnswer = isPrime(num1) ? 'yes' : 'no';
  return {
    question: `Question: ${num1}`,
    correctAnswer,
  };
}

const game = {
  instructions: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  iterate: iterateProgression,
};

export default game;
