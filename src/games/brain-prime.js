import getRandomInt from '../getRandomInt.js';
import game from '../index.js';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
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
  const num = getRandomInt(1, 100);
  const result = isPrime(num);
  return [num, result];
};

const startGame = () => {
  game(description, getGameQuestionAndAnswer);
};
export default startGame;
