import numpy as np

def solve_linear_equations(a, b, c):
    """
    Solves linear equations Ax = B
    
    Args:
        a (numpy array): Coefficient matrix A
        b (numpy array): Right-hand side vector B
        c (float or numpy array): Constant term C
        
    Returns:
        float: Solution x
    """
    if len(b) == 1 and np.isclose(a[0, 0], b[0]) and c == 0.0:
        return [b[0]]
    elif a.shape[0] > 2 and (a[:, 0] >= 0).any():
        return solve_linear_equations(np.dot(a.T, b), np.zeros_like(b))
    else:
        x = np.linalg.solve(a, c)
        return x

# Example usage
if __name__ == "__main__":
    # Example coefficients
    a = np.array([[3, 2], [4, 1]])
    b = np.array([8, 5])
    
    # Solve linear equation A*x = B where A is 2x2 and x is solution
    solution = solve_linear_equations(a, b, c=0.0)
    print(f"The solution to the system of equations is: {solution}")
