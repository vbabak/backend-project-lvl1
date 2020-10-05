/* eslint-disable no-await-in-loop */
import promptly from 'promptly';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
}

async function askQuestion(question) {
  const answer = await promptly.prompt(`${question}`);
  return answer;
}

const game = async () => {
  console.log('Welcome to the Brain Games!');
  const name = await askQuestion('May I have your name?');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const numTries = 3;
  let numCorrectAnswers = 0;
  for (let i = 1; i <= numTries; i += 1) {
    const numQuestion = getRandomInt(1, 100);
    const correctAnswer = numQuestion % 2 === 0 ? 'yes' : 'no';
    const numAnswer = await askQuestion(`Question: ${numQuestion}`);
    if (numAnswer === correctAnswer) {
      console.log('Correct!');
      numCorrectAnswers += 1;
    } else {
      console.log(`'${numAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (numCorrectAnswers === numTries) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default game;
