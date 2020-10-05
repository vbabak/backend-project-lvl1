#!/usr/bin/env node
import getUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

getUserName().then((name) => {
  console.log(`Hello, ${name}`);
}).catch(console.error);
