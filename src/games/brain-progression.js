import getRandomInt from '../getRandomInt.js';
import game from '../index.js';

export const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, step) => {
  const result = [];
  const lengthOfProgression = 10;
  for (let i = 0; i <= lengthOfProgression; i += 1) {
    result.push(firstNumber + step * i);
  }
  return result;
};

export const getGameQuestionAndAnswer = () => {
  const firstNumber = getRandomInt(1, 50);
  const step = getRandomInt(1, 10);
  const progression = getProgression(firstNumber, step);
  const hiddenNumber = getRandomInt(1, 3);
  const correctAnswer = progression[hiddenNumber];
  progression[hiddenNumber] = '..';
  const progress = progression.join(' ');
  return [progress, String(correctAnswer)];
};

const startGame = () => {
  game(description, getGameQuestionAndAnswer);
};
export default startGame;
