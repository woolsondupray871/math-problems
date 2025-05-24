def calculate_expression(expression):
    try:
        result = eval(expression)
        print(f"The expression {expression} evaluates to: {result}")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
calculate_expression("2 + 3 * (5 - 1)")
