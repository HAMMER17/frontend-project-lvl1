import getRandomInt from '../getRandomInt.js';

export const description = 'Answer "yes" if number is even, otherwise answer "no".';

export const correct = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const question = () => {
  const random = getRandomInt(10, 1);
  console.log(`Question: ${random}`);
  return random;
};
