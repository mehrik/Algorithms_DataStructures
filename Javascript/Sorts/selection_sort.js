var arr = [1, 8, 9, 5, 3, 2];

function swap(arr, indexOne, indexTwo) {
    var temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
}

function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var min = i;
        for (var j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(arr, min, i);
    }
    return arr;
}

console.log(selectionSort(arr));
