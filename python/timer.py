import sys
import numpy as np
from time import sleep

def timer():
    for i in range(1000):
        sys.stdout.write(str(np.sin(i*np.pi/90)) + "\r\n")
        sys.stdout.flush()
        sleep(0.01)

if __name__ == "__main__":
    timer()