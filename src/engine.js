/* eslint-disable no-await-in-loop */
import {
  printWelcome,
  getName,
  printGreeting,
  printGameResults,
  printIterateAnswerRight,
  printStatement,
} from './commons.js';

async function playGame(gameIterationAsyncFunc) {
  const numTries = 3;
  let numCorrectAnswers = 0;
  for (let i = 1; i <= numTries; i += 1) {
    const correct = await gameIterationAsyncFunc();
    if (correct) {
      printIterateAnswerRight();
      numCorrectAnswers += 1;
    } else {
      return false;
    }
  }
  return numCorrectAnswers === numTries;
}

export default async (instructionStr, gameIterationAsyncFunc) => {
  printWelcome();
  const name = await getName();
  printGreeting(name);
  printStatement(instructionStr);
  const won = await playGame(gameIterationAsyncFunc);
  printGameResults(won, name);
};
