var arr = [1,3,5,7,20];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}

var average = sum / arr.length;

console.log(average);