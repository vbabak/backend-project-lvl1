/* eslint-disable no-await-in-loop */
import promptly from 'promptly';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
}

function printWelcome() {
  console.log('Welcome to the Brain Games!');
}

function printGreeting(name) {
  console.log(`Hello, ${name}`);
}

function printGameResults(won, name) {
  if (won) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}

function printInstructions() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function printIterateAnswerRight() {
  console.log('Correct!');
}

function printIterateAnswerWrong(numAnswer, correctAnswer) {
  console.log(`'${numAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
}

async function askQuestion(question) {
  const answer = await promptly.prompt(`${question}`);
  return answer;
}

async function getName() {
  const name = await askQuestion('May I have your name?');
  return name;
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
