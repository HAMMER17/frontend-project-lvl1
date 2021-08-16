import getRandomInt from '../getRandomInt.js';
import game from '../index.js';

export const description = 'Answer "yes" if number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const getGameQuestionAndAnswer = () => {
  const num = getRandomInt(1, 10);
  const result = isEven(num) ? 'yes' : 'no';
  const arr = [num, result];
  return arr;
};

const startGame = () => {
  game(description, getGameQuestionAndAnswer);
};
export default startGame;
