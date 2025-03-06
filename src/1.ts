// Generate a random math problem
const randomProblem = () => {
  // Create an array of numbers from 1 to 10
  const nums = Array(10).fill().map((_, i) => i + 1);
  // Shuffle the array of numbers
  const shuffledNums = nums.sort(() => Math.random() - 0.5);
  // Return a random math problem
  return `${shuffledNums[0]} ${shuffledNums[1]} ${shuffledNums[2]}`;
};

// Call the function to generate a random math problem
const problem = randomProblem();
console.log(problem);
