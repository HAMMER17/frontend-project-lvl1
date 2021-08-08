import getRandomInt from '../getRandomInt.js';

export const description = 'What number is missing in the progression?';

const calculate = (firstNumber, add) => {
  const result = [];
  let newNumber = firstNumber;
  for (let i = 0; i <= 10; i += 1) {
    result.push(newNumber);
    newNumber += add;
  }
  return result;
};

export const getGameQuestionAndAnswer = () => {
  const firstNumber = getRandomInt(50, 1);
  const add = getRandomInt(10, 1);
  const progression = calculate(firstNumber, add);
  const hiddenNumber = getRandomInt(3, 1);
  const correctAnswer = progression[hiddenNumber];
  progression[hiddenNumber] = '..';
  const progress = progression.join(' ');
  return [progress, String(correctAnswer)];
};
