/* eslint-disable no-await-in-loop */
import {
  printWelcome,
  getName,
  printGreeting,
  printGameResults,
  printIterateAnswerRight,
} from './functions.js';

async function playGame(game) {
  game.printInstructions();
  const numTries = 3;
  let numCorrectAnswers = 0;
  for (let i = 1; i <= numTries; i += 1) {
    const correct = await game.iterateAnswer();
    if (correct) {
      printIterateAnswerRight();
      numCorrectAnswers += 1;
    } else {
      return false;
    }
  }
  return numCorrectAnswers === numTries;
}

const engine = async (game) => {
  printWelcome();
  const name = await getName();
  printGreeting(name);
  const won = await playGame(game);
  printGameResults(won, name);
};

export default engine;
