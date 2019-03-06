import sys
from time import sleep

def timer():
    for i in range(10):
        sys.stdout.write(str(i) + "\r\n")
        sys.stdout.flush()
        sleep(1)

if __name__ == "__main__":
    timer()