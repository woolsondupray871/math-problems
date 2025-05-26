import sympy as sp
from sympy import symbols, Eq, solve

x = symbols('x')
eq1 = Eq(x + 2, x * (3 - x))
sol = solve(eq1)
print(sol)
