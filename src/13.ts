  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  
  const generateMathProblem = () => {
    const operator = ["+", "-", "*", "/"][getRandomNumber(0, 3)];
    const num1 = getRandomNumber(1, 9);
    const num2 = getRandomNumber(1, 9);
    let problem;
  
    if (operator === "+") {
      problem = `${num1} + ${num2}`;
    } else if (operator === "-") {
      problem = `${num1} - ${num2}`;
    } else if (operator === "*") {
      problem = `${num1} * ${num2}`;
    } else if (operator === "/") {
      problem = `${num1} / ${num2}`;
    }
  
    return problem;
  };