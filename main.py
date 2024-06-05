import os

def main():
    my_input = os.getenv('MY_INPUT', 'default value')
    secret_pass = os.getenv('PASS')
    print(f"Input received: {my_input}")
    print(f"Secret PASS: {secret_pass}")
    my_output = f"Hello, {my_input}! Your secret is {secret_pass}"
    print(f"::set-output name=my-output::{my_output}")

if __name__ == "__main__":
    main()

