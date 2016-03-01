var arr = [11, 8, 9, 5, 3];

function bubbleSort(arr) {
    var k = arr.length;
    var swapping = true;
    while(swapping) {
        swapping = false;
        for (var i = 0; i < k - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapping = true;
            }
        }
        k--;
    }
    return arr;
}

var newArr = bubbleSort(arr);
console.log(newArr);