import {
  getRandomInt,
} from '../commons.js';

function iterateEven() {
  const numQuestion = getRandomInt(1, 100);
  const correctAnswer = numQuestion % 2 === 0 ? 'yes' : 'no';
  return {
    question: `Question: ${numQuestion}`,
    correctAnswer,
  };
}

const game = {
  instructions: 'Answer "yes" if the number is even, otherwise answer "no".',
  iterate: iterateEven,
};

export default game;
