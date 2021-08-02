export const description = 'Answer "yes" if number is even, otherwise answer "no".';

export const correct = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const question = () => {
  const random = Math.floor((Math.random()) * 10);
  console.log(`Question: ${random}`);
  return random;
};
