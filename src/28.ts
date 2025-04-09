import numpy as np
from scipy.stats import norm

def calculate_ttest(data1, data2):
    # Perform t-test on two datasets
    t_statistic, p_value = norm.kstest(data1, data2)
    return t_statistic, p_value

# Example usage
data1 = [np.random.randn(50), np.random.randn(50)]
data2 = [np.random.randn(50), np.random.randn(50)]

t_statistic, p_value = calculate_ttest(data1, data2)
print(f'T-statistic: {t_statistic}, P-value: {p_value}')
