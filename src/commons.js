import promptly from 'promptly';

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
}

export function printStatement(q) {
  console.log(q);
}

export const welcomePhrase = 'Welcome to the Brain Games!';

export function printGreeting(name) {
  printStatement(`Hello, ${name}`);
}

export function printGameResults(won, name) {
  if (won) {
    printStatement(`Congratulations, ${name}!`);
  } else {
    printStatement(`Let's try again, ${name}!`);
  }
}

export function printIterateAnswerRight() {
  printStatement('Correct!');
}

export function printIterateAnswerWrong(numAnswer, correctAnswer) {
  printStatement(`'${numAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
}

export async function askQuestion(question) {
  const answer = await promptly.prompt(`${question}`);
  return answer;
}

export async function getName() {
  const name = await askQuestion('May I have your name?');
  return name;
}

export async function getIterationAnswer() {
  const numAnswer = await askQuestion('Your answer:');
  return numAnswer;
}

export function isAnswerCorrect(yourAnser, correctAnswer) {
  const correct = yourAnser === correctAnswer.toString();
  return correct;
}
