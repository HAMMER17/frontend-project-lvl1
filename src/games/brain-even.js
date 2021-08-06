import getRandomInt from '../getRandomInt.js';

export const description = 'Answer "yes" if number is even, otherwise answer "no".';

export const question = () => {
  const num = getRandomInt(10, 1);
  console.log(`Question: ${num}`);
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
