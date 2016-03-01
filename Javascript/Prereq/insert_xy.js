var arr = [1, 3, 5, 7]
var numberToInsert = 10;
var atIndex = 2;

for (var i = arr.length; i >= atIndex; i--) {
    arr[i] = arr[i - 1];
}

arr[atIndex] = numberToInsert;

console.log(arr);