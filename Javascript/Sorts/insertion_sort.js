var arr = [1, 8, 9, 5, 3, 2];

function insertion_sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        var j = i;
        while (j > 0 && arr[j-1] > element) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = element;
    }
    console.log(arr);
    return arr;
}

insertion_sort(arr);