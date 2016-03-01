// first choose an element for the pivo
// put all elements with value less than pivot to left side
// put all the items with values > pivot to right side
// call quicksort on both sublists

var arr = [];

for (var i = 0; i < 20; i++) {
    var randomNumber = Math.random() * 100;
    arr.push(Math.floor(randomNumber));
}

function quickSort(arr) {
    if (arr.length <= 1) { return arr; }

    var pivot = arr[0]
    var left = [];
    var right = [];

    for (var i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    var leftArr = quickSort(left);
    var rightArr = quickSort(right);

    return leftArr.concat([pivot]).concat(rightArr)
}

console.log(quickSort(arr));