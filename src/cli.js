import { printWelcome, getName, printGreeting } from './commons.js';

export default async () => {
  printWelcome();
  const name = await getName();
  printGreeting(name);
};
