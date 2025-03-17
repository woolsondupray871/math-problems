const getRandomMathProblem = () => {
  const numbers = [2, 3, 5, 7, 11, 13, 17];
  const operators = ["+", "-", "*", "/"];
  const problemNumber = Math.floor(Math.random() * 7);
  let leftOperand = numbers[problemNumber];
  let rightOperand = numbers[(problemNumber + 1) % 7];
  let operator = operators[Math.floor(Math.random() * 4)];
  return `${leftOperand} ${operator} ${rightOperand}`;
};
