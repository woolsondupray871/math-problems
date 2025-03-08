// Generate a random math problem
const generateMathProblem = () => {
  // Randomly select a type of math operation
  const op = Math.random() < 0.5 ? '+' : '-';

  // Generate two random numbers
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);

  // Generate the problem statement
  let problem = `${num1} ${op} ${num2}`;

  // Return the generated problem
  return problem;
};
