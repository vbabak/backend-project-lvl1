import {
  getRandomInt,
  askQuestion,
  printIterateAnswerWrong,
  printStatement,
} from '../functions.js';
import engine from '../index.js';

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
  const numAnswer = await askQuestion('Your answer:');
  const right = numAnswer === `${correctAnswer}`;
  if (!right) {
    printIterateAnswerWrong(numAnswer, correctAnswer);
  }
  return right;
}

const gameCalc = {
  printInstructions: () => {
    printStatement('What is the result of the expression?');
  },
  iterateAnswer: async () => {
    const result = await iterateCalc();
    return result;
  },
};

export default async () => {
  await engine(gameCalc);
};
