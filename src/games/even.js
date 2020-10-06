import {
  getRandomInt,
  checkIterationAnswer,
  printStatement,
} from '../functions.js';
import engine from '../index.js';

async function iterateEven() {
  const numQuestion = getRandomInt(1, 100);
  const correctAnswer = numQuestion % 2 === 0 ? 'yes' : 'no';
  printStatement(`Question: ${numQuestion}`);
  return checkIterationAnswer(correctAnswer);
}

export default async () => {
  const instructions = 'Answer "yes" if the number is even, otherwise answer "no".';
  await engine(instructions, iterateEven);
};
