import numpy as np

# Define a function to calculate the Fibonacci sequence up to n terms
def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib_sequence = [0, 1]
    for i in range(2, n):
        next_fib = fib_sequence[-1] + fib_sequence[-2]
        fib_sequence.append(next_fib)
    return fib_sequence

# Generate a random number of terms up to n
n_terms = np.random.randint(3, 10)  # Ensure the generated numbers are between 3 and 9
fibonacci_numbers = fibonacci(n_terms)

print(fibonacci_numbers)
