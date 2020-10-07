import {
  getRandomInt,
  checkIterationAnswer,
  printStatement,
} from '../commons.js';
import startGameEngine from '../engine.js';

async function iterateCalc() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const opIdx = getRandomInt(0, 2);
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
  printStatement(`Question: ${num1} ${operation} ${num2}`);
  return checkIterationAnswer(correctAnswer);
}

export default async () => {
  const instructions = 'What is the result of the expression?';
  await startGameEngine(instructions, iterateCalc);
};
