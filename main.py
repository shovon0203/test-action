import os

def main():
    secret_pass = os.getenv('PASS')
    if secret_pass:
        print(f"Secret PASS: {secret_pass}")
        my_output = f"Your secret is {secret_pass}"
        print(f"::set-output name=my-output::{my_output}")
    else:
        print("No secret PASS found.")

if __name__ == "__main__":
    main()


