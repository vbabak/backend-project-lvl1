import { printWelcome, getName, printGreeting } from './functions.js';

export default async () => {
  printWelcome();
  const name = await getName();
  printGreeting(name);
};
