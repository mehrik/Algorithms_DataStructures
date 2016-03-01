import random
import datetime

x = []

start = datetime.datetime.now()

for i in range(0, 100):
    numberToAppend = int(round(random.random() * 10000))
    x.append(numberToAppend)

def bubbleSort(list):
    unsorted = True
    length = len(list) - 1
    while unsorted:
        unsorted = False
        for idx in range(0, length):
            if list[idx] > list[idx + 1]:
                temp = list[idx]
                list[idx] = list[idx + 1]
                list[idx + 1] = temp
                unsorted = True
        length -= 1
    totalTimeElapsedInSeconds = (datetime.datetime.now() - start).total_seconds()
    print "Total time elapsed in seconds:", totalTimeElapsedInSeconds
    return list

print bubbleSort(x)
