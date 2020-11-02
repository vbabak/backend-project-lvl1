import {
  getRandomInt,
} from '../commons.js';

function iterateCalc() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operations = ['+', '-', '*'];
  const opIdx = getRandomInt(0, operations.length - 1);
  const operation = ['+', '-', '*'][opIdx];
  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    default:
      correctAnswer = num1 * num2;
      break;
  }
  return {
    question: `Question: ${num1} ${operation} ${num2}`,
    correctAnswer,
  };
}

const game = {
  instructions: 'What is the result of the expression?',
  iterate: iterateCalc,
};

export default game;
