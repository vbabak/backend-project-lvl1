import {
  getRandomInt,
  askQuestion,
  printIterateAnswerWrong,
  printStatement,
} from '../functions.js';
import engine from '../index.js';

function printInstructions() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

async function iterateAnswer() {
  const numQuestion = getRandomInt(1, 100);
  const correctAnswer = numQuestion % 2 === 0 ? 'yes' : 'no';
  printStatement(`Question: ${numQuestion}`);
  const numAnswer = await askQuestion('Your answer:');
  const right = numAnswer === correctAnswer;
  if (!right) {
    printIterateAnswerWrong(numAnswer, correctAnswer);
  }
  return right;
}

const gameEven = {
  printInstructions: () => {
    printInstructions();
  },
  iterateAnswer: async () => {
    const result = await iterateAnswer();
    return result;
  },
};

export default async () => {
  await engine(gameEven);
};
