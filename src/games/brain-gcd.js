import getRandomInt from '../getRandomInt.js';

export const description = 'Find the greatest common divisor of given numbers.';
const calculate = (num1, num2) => {
  let result;
  if (num1 === num2) {
    result = String(num1);
    return result;
  }
  if (num1 > num2) {
    if (num1 % num2 === 0) {
      result = String(num2);
      return result;
    }
    for (let i = num2 - 1; i >= 1; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        result = String(i);
        return result;
      }
    }
  }
  if (num2 > num1) {
    if (num2 % num1 === 0) {
      result = String(num1);
      return result;
    }
    for (let i = num1 - 1; i >= 1; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        result = String(i);
        return result;
      }
    }
  }
  return result;
};

export const getGameQuestionAndAnswer = () => {
  const num1 = getRandomInt(50, 1);
  const num2 = getRandomInt(50, 1);
  const expression = `${num1} ${num2}`;
  const result = calculate(num1, num2);
  const arr = [expression, result];
  return arr;
};
