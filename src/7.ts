import { Random } from 'mathjs';

export function getRandomMathProblem(): string {
  const operator = ['+', '-', '*', '/'][Random.integer(0, 3)];
  const num1 = Random.integer(1, 10);
  const num2 = Random.integer(1, 10);
  return `${num1} ${operator} ${num2}`;
}
