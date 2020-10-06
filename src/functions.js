import promptly from 'promptly';

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
}

export function printWelcome() {
  console.log('Welcome to the Brain Games!');
}

export function printGreeting(name) {
  console.log(`Hello, ${name}`);
}

export function printGameResults(won, name) {
  if (won) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}

export function printIterateAnswerRight() {
  console.log('Correct!');
}

export function printIterateAnswerWrong(numAnswer, correctAnswer) {
  console.log(`'${numAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
}

export function printStatement(q) {
  console.log(q);
}

export async function askQuestion(question) {
  const answer = await promptly.prompt(`${question}`);
  return answer;
}

export async function getName() {
  const name = await askQuestion('May I have your name?');
  return name;
}
