var arr = [];
for (var i = 0; i < 10; i++) {
    var randomNumber = Math.random() * 10;
    arr.push(Math.floor(randomNumber));
}

function findEnd(arr, start) {
    var end = start + 1;
    for (var i = end; i < arr.length; i++) {
        if (arr[i] > arr[start]) { return i; }
        if (arr[i] > arr[end]) { end = i; }
    }
    return end;
}

function calculate(arr, start, end) {
    var count = 0;
    for (var i = start + 1; i < end; i++) {
        count += arr[i];
    }
    var min = Math.min(arr[start], arr[end]);
    var totalIdx = Math.abs(start - end) - 1;
    var water = min * totalIdx - count;
    return water;
}

function calculateWater(arr) {
    var start = 0;
    var totalCount = 0;
    var end = findEnd(arr, start);
    while (start < arr.length - 1) {
        totalCount += calculate(arr, start, end);
        start = end;
        end = findEnd(arr, start);
    }
    return totalCount;
}

console.log(arr);
console.log(calculateWater(arr));
console.log(calculateWater([1,2,1]));
console.log(calculateWater([]));
console.log(calculateWater([5,2,2,2]));
console.log(calculateWater([1,2,1]));
console.log(calculateWater([7,0,3]));
console.log(calculateWater([1,2,1,4,1,7]));
console.log(calculateWater([7,1,2,1,7]));