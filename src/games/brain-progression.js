import getRandomInt from '../getRandomInt.js';

export const description = 'What number is missing in the progression?';

export const question = () => {
  const result = [];
  const i = 0;
  let firstNumber = getRandomInt(50, 1);
  const add = getRandomInt(10, 1);
  for (result[i]; result.length < 10; result[i + 1]) {
    result.push(firstNumber);
    firstNumber += add;
  }
  const hiddenNumber = getRandomInt(3, 1);
  const correctAnswer = result[hiddenNumber];
  result[hiddenNumber] = '..';
  console.log(`Question: ${result.join(' ')}`);
  return String(correctAnswer);
};
