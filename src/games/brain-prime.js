import getRandomInt from '../getRandomInt.js';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const question = () => {
  const num = getRandomInt(100, 1);
  console.log(`Question: ${num}`);
  if (num === 1) {
    return 'no';
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
