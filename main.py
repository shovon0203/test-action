import os
import sys

def main():
    my_input = sys.argv[1]
    print(f"Input received: {my_input}")
    my_output = f"Hello, {my_input}!"
    print(f"::set-output name=my-output::{my_output}")

if __name__ == "__main__":
    main()
