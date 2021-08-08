import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const game = (description, getGameQuestionAndAnswer) => {
  const name = welcome();
  console.log(description);
  for (let i = 1; i <= 3; i += 1) {
    const arr = getGameQuestionAndAnswer();
    const num = arr[0];
    const correctAnswer = arr[1];
    console.log(`Question: ${num}`);
    const answer = ((readlineSync.question('Your answer: ')));
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;
