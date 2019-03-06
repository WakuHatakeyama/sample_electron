import sys
import boto3

def hello():
    sys.stdout.write("hello\r\n")
    sys.stdout.flush()

if __name__ == "__main__":
    hello()