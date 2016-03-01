import random

heads = 0
tails = 0

for attempt in range(1, 5001):
    headsOrTails = round(random.random())
    if headsOrTails == 0:
        headsOrTails = "head!"
        heads += 1
    else:
        headsOrTails = "tail!"
        tails += 1
    print "Attempt #" + str(attempt) + ": throwing a coin... it's a " + headsOrTails + "... Got " + str(heads) + " head(s) so far and " + str(tails) + " tail(s) so far"

print "Ending the program thank you!"