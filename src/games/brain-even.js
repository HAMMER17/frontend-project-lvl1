import getRandomInt from '../getRandomInt.js';

export const description = 'Answer "yes" if number is even, otherwise answer "no".';

const calculate = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const getGameQuestionAndAnswer = () => {
  const num = getRandomInt(10, 1);
  const result = calculate(num);
  const arr = [num, result];
  return arr;
};
