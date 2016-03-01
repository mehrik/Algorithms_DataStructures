var arr = [];

for (var i = 0; i < 4; i++) {
    var randomNumber = Math.random() * 100;
    arr.push(Math.floor(randomNumber));
}

function quickSort(arr) {
    if (arr.length === 0) { return []; }
    var pivot = arr[0];
    var left = [];
    var right = [];

    for (var idx = 1; idx < arr.length; idx++) {
        if (arr[idx] < pivot) {
            left.push(arr[idx]);
        } else {
            right.push(arr[idx]);
        }
    }

    return quickSort(left).concat(pivot).concat(quickSort(right));
}
console.log("unsorted = ", arr);
console.log("sorted   = ", quickSort(arr));