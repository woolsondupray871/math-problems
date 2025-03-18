import { randomNumber } from 'utils';

const getRandomMathProblem = (): string => {
  const number1 = randomNumber(1, 10);
  const number2 = randomNumber(1, 10);
  return `${number1} + ${number2}`;
};
