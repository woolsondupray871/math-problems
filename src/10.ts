/**
 * A function that returns a random math problem for a student to practice
 * @returns {string} A math problem in the format of "What is the sum of 2 + 2?"
 */
function getRandomMathProblem() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  let operator;

  switch (Math.floor(Math.random() * 3)) {
    case 0:
      operator = "+";
      break;
    case 1:
      operator = "-";
      break;
    case 2:
      operator = "*";
      break;
  }

  return `What is the result of ${num1} ${operator} ${num2}?`;
}
