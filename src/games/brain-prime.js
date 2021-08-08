import getRandomInt from '../getRandomInt.js';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculate = (num) => {
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

export const getGameQuestionAndAnswer = () => {
  const num = getRandomInt(100, 1);
  const result = calculate(num);
  return [num, result];
};
