import random
import datetime

x = []

for i in range(0, 100):
    randomNumber = int(round(random.random() * 10000))
    x.append(randomNumber)

startTime = datetime.datetime.now()

def insertionSort(list):
    for index in range(0, len(list)):
        element = list[index]
        j = index
        while j > 0 and element < list[j-1]:
            list[j] = list[j - 1]
            j -= 1
        list[j] = element

    timeElapsedInSeconds = (datetime.datetime.now() - startTime).total_seconds()
    print "time elapsed in seconds:", timeElapsedInSeconds

    return list



print insertionSort(x)