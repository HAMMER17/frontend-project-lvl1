import readlineSync from 'readline-sync';

const game = (description, getGameQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const countOfraunds = 3;
  for (let i = 1; i <= countOfraunds; i += 1) {
    const arr = getGameQuestionAndAnswer();
    const [num, correctAnswer] = arr;
    console.log(`Question: ${num}`);
    const answer = (readlineSync.question('Your answer: '));
    if (answer === (correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;
