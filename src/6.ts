 import random

def get_random_ts_code():
    numbers = list(range(1, 10))
    operators = ["+", "-", "*", "/"]
    equation = ""

    for i in range(3):
        number1 = random.choice(numbers)
        number2 = random.choice(numbers)
        operator = random.choice(operators)

        equation += f"{number1} {operator} {number2}"

    return equation