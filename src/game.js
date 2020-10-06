/* eslint-disable no-await-in-loop */
import {
  getRandomInt,
  askQuestion,
  printIterateAnswerWrong,
  printIterateAnswerRight,
  printWelcome,
  getName,
  printGreeting,
  printGameResults,
} from './functions.js';

function printInstructions() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

async function iterateAnswer() {
  const numQuestion = getRandomInt(1, 100);
  const correctAnswer = numQuestion % 2 === 0 ? 'yes' : 'no';
  const numAnswer = await askQuestion(`Question: ${numQuestion}`);
  const right = numAnswer === correctAnswer;
  if (!right) {
    printIterateAnswerWrong(numAnswer, correctAnswer);
  }
  return right;
}

async function playGameNumber() {
  printInstructions();
  const numTries = 3;
  let numCorrectAnswers = 0;
  for (let i = 1; i <= numTries; i += 1) {
    const correct = await iterateAnswer();
    if (correct) {
      printIterateAnswerRight();
      numCorrectAnswers += 1;
    } else {
      return false;
    }
  }
  return numCorrectAnswers === numTries;
}

const game = async () => {
  printWelcome();
  const name = await getName();
  printGreeting(name);
  const won = await playGameNumber();
  printGameResults(won, name);
};

export default game;
