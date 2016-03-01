var arr = [];

for (var i = 0; i < 10; i++) {
    var randomNumber = Math.random() * 100;
    arr.push(Math.floor(randomNumber));
}

function merge(left, right) {
    var result = [];
    var idx = 0;
    var otherIdx = 0;

    while(idx < left.length && otherIdx < right.length) {
        if (left[idx] < right[otherIdx]) {
            result.push(left[idx]);
            idx++;
        } else {
            result.push(right[otherIdx]);
            otherIdx++;
        }
    }
    while (idx < left.length) {
        result.push(left[idx]);
        idx++;
    }
    while (otherIdx < right.length) {
        result.push(right[otherIdx]);
        otherIdx++;
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length < 2) { return arr; }
    var middle = parseInt(arr.length/2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

console.log("unsorted = ", arr);
console.log("sorted   = ", mergeSort(arr));

console.log(parseInt("0x12"));