var arr = [];

for (var i = 0; i < 4; i++) {
    var randomNumber = Math.random() * 100;
    arr.push(Math.floor(randomNumber));
}

function swap(arr, indexOne, indexTwo) {
    var temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
}

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var minIdx = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) { minIdx = j; }
        }
        swap(arr, i, minIdx);
    }
    return arr;
}
console.log(arr);
console.log(selectionSort(arr));