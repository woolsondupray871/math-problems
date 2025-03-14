const getRandomMathProblem = () => {
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  let operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  let problem = `What is ${num1} ${operator} ${num2}`;
  return problem;
};
