function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max) + 1;
}

console.log(getRandomNumber(10));
