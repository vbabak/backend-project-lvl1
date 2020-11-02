import {
  printStatement,
  welcomePhrase,
  getName,
  printGreeting,
} from './commons.js';

export default async () => {
  printStatement(welcomePhrase);
  const name = await getName();
  printGreeting(name);
};
