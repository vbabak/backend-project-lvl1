import {
  getRandomInt,
} from '../commons.js';

function getMaxCommonDivisor(n1, n2) {
  const min = Math.min(Math.abs(n1), Math.abs(n2));
  for (let i = min; i > 0; i -= 1) {
    if (n1 % i === 0 && n2 % i === 0) {
      return i;
    }
  }
  return 1;
}

function iterateGcd() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const correctAnswer = getMaxCommonDivisor(num1, num2);
  return {
    question: `Question: ${num1} ${num2}`,
    correctAnswer,
  };
}

const game = {
  instructions: 'Find the greatest common divisor of given numbers.',
  iterate: iterateGcd,
};

export default game;
