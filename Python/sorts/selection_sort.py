import random
import datetime

startTime = datetime.datetime.now()

x = []

for i in range(0, 10000):
    randomNumber = int(round(random.random() * 10000))
    x.append(randomNumber)

def swap(list, indexOne, indexTwo):
    temp = list[indexOne]
    list[indexOne] = list[indexTwo]
    list[indexTwo] = temp

def selectionSort(list):
    start = 0
    end = len(list) - 1

    while start < end:
        min = start
        max = end

        for index in range(start, end + 1):
            if list[index] < list[min]:
                min = index
            elif list[index] > list[max]:
                max = index
        swap(list, min, start)
        swap(list, max, end)
        start += 1
        end -= 1

    timeElapsedInSeconds = (datetime.datetime.now() - startTime).total_seconds()
    print "time elapsed in seconds:", timeElapsedInSeconds
    return list

selectionSort(x)
