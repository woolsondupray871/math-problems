function calculateSum(numbers: number[]): number {
  let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
