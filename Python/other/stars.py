x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

def drawStars(arr):
    for starAmount in arr:
        if type(starAmount) == int:
            print starAmount * "*"
        else:
            print len(starAmount) * starAmount[0].lower()

drawStars(x)