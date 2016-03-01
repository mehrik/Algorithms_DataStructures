users = {
    'Students': [ 
        {'first_name': 'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ],
    'Instructors': [
        {'first_name' : 'Michael', 'last_name' : 'Choi'},
        {'first_name' : 'Martin', 'last_name' : 'Puryear'}
    ]}

for status in users:
    count = 1
    print status
    for person in users[status]:
        nameLength = len(person["first_name"]) + len(person["last_name"])
        print count, person["first_name"], person["last_name"], nameLength
        count += 1