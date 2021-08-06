import getRandomInt from '../getRandomInt.js';

export const description = 'What is the result of the expression?';

export const question = () => {
  const items = ['+', '-', '*'];
  const num1 = getRandomInt(50, 1);
  const num2 = getRandomInt(50, 1);
  const character = items[getRandomInt(3, 0)];
  const expression = `${num1} ${character} ${num2}`;
  console.log(`Question: ${expression}`);
  let result;
  if (character === '+') {
    result = String(num1 + num2);
  }
  if (character === '-') {
    result = String(num1 - num2);
  }
  if (character === '*') {
    result = String(num1 * num2);
  }
  return result;
};
