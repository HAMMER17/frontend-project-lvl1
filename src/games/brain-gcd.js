import getRandomInt from '../getRandomInt.js';
import game from '../index.js';

export const description = 'Find the greatest common divisor of given numbers.';
const getGCD = (num1, num2) => {
  if (num1 === num2 || num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};

export const getGameQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const expression = `${num1} ${num2}`;
  const result = String(getGCD(num1, num2));
  const arr = [expression, result];
  return arr;
};

const startGame = () => {
  game(description, getGameQuestionAndAnswer);
};
export default startGame;
