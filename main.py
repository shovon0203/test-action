import os

def main():
    secret_pass = os.getenv('PASS')
    print(f"Secret PASS: {secret_pass}")
    my_output = f"Your secret is {secret_pass}"
    print(f"::set-output name=my-output::{my_output}")

if __name__ == "__main__":
    main()

