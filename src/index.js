import readlineSync from 'readline-sync';
import welcome from './welcome.js';

const game = (description, question) => {
  const name = welcome();
  console.log(description);
  for (let i = 1; i <= 3; i += 1) {
    const correctAnswer = question();
    const answer = (readlineSync.question('Your answer: '));
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;
