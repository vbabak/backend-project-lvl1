/* eslint-disable no-await-in-loop */
import {
  welcomePhrase,
  getName,
  printGreeting,
  printGameResults,
  printIterateAnswerRight,
  printStatement,
  getIterationAnswer,
  printIterateAnswerWrong,
  isAnswerCorrect,
} from './commons.js';

async function playGame(gameIterationAsyncFunc) {
  const numTries = 3;
  let numCorrectAnswers = 0;
  for (let i = 1; i <= numTries; i += 1) {
    const { question, correctAnswer } = gameIterationAsyncFunc();
    printStatement(question);
    const yourAnser = await getIterationAnswer();
    const isCorrect = isAnswerCorrect(yourAnser, correctAnswer);
    if (isCorrect) {
      printIterateAnswerRight();
      numCorrectAnswers += 1;
    } else {
      printIterateAnswerWrong(yourAnser, correctAnswer);
      return false;
    }
  }
  return numCorrectAnswers === numTries;
}

export default async (instructionStr, gameIterationAsyncFunc) => {
  printStatement(welcomePhrase);
  const name = await getName();
  printGreeting(name);
  printStatement(instructionStr);
  const won = await playGame(gameIterationAsyncFunc);
  printGameResults(won, name);
};
