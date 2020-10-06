import {
  getRandomInt,
  askQuestion,
  printIterateAnswerWrong,
  printStatement,
} from '../functions.js';
import engine from '../index.js';

function printInstructions() {
  console.log('What is the result of the expression?');
}

async function iterateAnswer() {
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
    printInstructions();
  },
  iterateAnswer: async () => {
    const result = await iterateAnswer();
    return result;
  },
};

export default async () => {
  await engine(gameCalc);
};
