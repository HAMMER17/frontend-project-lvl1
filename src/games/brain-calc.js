import getRandomInt from '../getRandomInt.js';
import game from '../index.js';

export const description = 'What is the result of the expression?';

const getCalculate = (num1, num2, character) => {
  switch (character) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      return null;
  }
};

export const getGameQuestionAndAnswer = () => {
  const items = ['+', '-', '*'];
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const character = items[getRandomInt(0, items.length)];
  const result = String(getCalculate(num1, num2, character));
  const expression = `${num1} ${character} ${num2}`;
  const arr = [expression, result];
  return arr;
};

const startGame = () => {
  game(description, getGameQuestionAndAnswer);
};

export default startGame;
