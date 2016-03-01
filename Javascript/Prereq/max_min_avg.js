var arr = [1, 5, 10, -2];

var max = arr[0];
var min = arr[0];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) { max = arr[i]; }
    if (arr[i] < min) { min = arr[i]; }
    sum += arr[i];
}

var average = sum / arr.length
console.log("max:", max, "min:", min, "average:", average);