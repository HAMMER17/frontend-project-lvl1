import getRandomInt from '../getRandomInt.js';

export const description = 'What is the result of the expression?';

export const question = () => {
  const items = ['+', '-', '*'];
  const num1 = getRandomInt(50, 1);
  const num2 = getRandomInt(50, 1);
  const character = items[getRandomInt(3, 0)];
  const expression = `${num1} ${character} ${num2}`;
  console.log(`Question: ${expression}`);
  return [num1, num2, character];
};

export const correct = (num) => {
  let result;
  if (num[2] === '+') {
    result = String(num[0] + num[1]);
  }
  if (num[2] === '-') {
    result = String(num[0] - num[1]);
  }
  if (num[2] === '*') {
    result = String(num[0] * num[1]);
  }
  return result;
};
