import {
  getRandomInt,
  askQuestion,
  printIterateAnswerWrong,
  printStatement,
} from '../functions.js';
import engine from '../index.js';

async function iterateEven() {
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

export default async () => {
  const instructions = 'Answer "yes" if the number is even, otherwise answer "no".';
  await engine(instructions, iterateEven);
};
