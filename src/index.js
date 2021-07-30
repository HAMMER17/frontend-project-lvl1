import readlineSync from 'readline-sync';
import welcome from './welcome.js';

const game = (description, question, correct) => {
  const name = welcome();
  console.log(description);
  for (let i = 1; i <= 3;) {
    const value = question();
    const answer = (readlineSync.question('Your answer: '));
    const correctAnswer = correct(value);
    if (answer === correctAnswer) {
      i += 1;
      console.log('correct');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
      Let's try again ${name}`);
    }
  }

  console.log(`congratulations ${name}`);
};
export default game;
