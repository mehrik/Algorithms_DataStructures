print "Scores and Grades"

for count in range(0, 10):
    enterScore = input("Score: ")
    if enterScore < 60:
        grade = "F"
    elif enterScore < 70:
        grade = "D"
    elif enterScore < 80:
        grade = "C"
    elif enterScore < 90:
        grade = "B"
    else:
        grade = "A"
    print "Your grade is", grade

print "End of program bye!"