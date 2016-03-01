// create array with 10 random values between 0 to 100

var arr = [];

for (var i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 101));
}

console.log(arr);