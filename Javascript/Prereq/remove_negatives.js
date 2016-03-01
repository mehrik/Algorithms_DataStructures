var arr = [-3, 5, 1, -3, -3, -3, 3, -10, -2, 2, 10];

var negCount = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        // increase negative count
        negCount++;
        // shift over values to the left
        for (var j = i; j < arr.length - negCount; j++) {
            arr[j] = arr[j + 1];
        }
        // reset i back to original index, since we
        // need to check for the new value
        i--;
    }
}

while (negCount > 0) {
    arr.pop()
    negCount--;
}

console.log(arr);