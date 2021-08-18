import getRandomInt from '../getRandomInt.js';
import game from '../index.js';

const description = 'What is the result of the expression?';

const getCalculated = (num1, num2, character) => {
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

const getGameData = () => {
  const items = ['+', '-', '*'];
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const character = items[getRandomInt(0, items.length)];
  const correctAnswer = String(getCalculated(num1, num2, character));
  const question = `${num1} ${character} ${num2}`;
  return [question, correctAnswer];
};

const startGame = () => {
  game(description, getGameData);
};

export default startGame;
