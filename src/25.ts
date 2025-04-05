import numpy as np
from sympy import symbols

def calculate_sum(x):
    # Define the variable x and find its sum
    y = sum([x[i] * i for i in range(len(x))])
    return y

# Example usage
x_values = [1, 2, 3]
result = calculate_sum(x_values)
print(result)
