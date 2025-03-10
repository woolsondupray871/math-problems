function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getProblem() {
  const a = getRandomInt(10);
  const b = getRandomInt(10);
  const operator = ["+", "-", "*", "/"][getRandomInt(4)];
  let result;
  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    result = a / b;
  }
  return `${a} ${operator} ${b} = ${result}`;
}
