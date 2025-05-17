import random
import string

def generate_random_string(length):
    """
    Generate a random string of specified length.
    
    :param length: The desired length of the generated string.
    :return: A randomly selected string of the given length.
    """
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

random_string = generate_random_string(10)
print(random_string)
