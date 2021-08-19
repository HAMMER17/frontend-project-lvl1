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
  const operators = ['+', '-', '*'];
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const character = operators[getRandomInt(0, operators.length - 1)];
  const correctAnswer = String(getCalculated(num1, num2, character));
  const question = `${num1} ${character} ${num2}`;
  return [question, correctAnswer];
};

const startGame = () => {
  game(description, getGameData);
};

export default startGame;
