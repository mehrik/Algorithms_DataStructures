function rotateArr(arr, shiftBy) {
    // if shiftBy is >= shiftBy length, it makes the shiftBy into the smallest version
    shiftBy = shiftBy % arr.length;
    var count = 0;
    var i = 0;
    var saved = arr[0];
    var temp;
    while (count < arr.length) {
        var i = i + shiftBy;
        if (i >= arr.length) {
            i -= arr.length;
        }

        // Save value that will be replaced
        temp = arr[i];

        // Set replaced position to previously saved value;
        arr[i] = saved;

        // the new saved value to replace the future position is temp
        saved = temp;

        // increase count
        count++;
    }

    return arr;
}

function rotateArr2(arr, shiftBy) {
    // if shiftBy is greater than length of arr
    // shiftBy % arr.length will the the amount to shift by
    shiftBy = shiftBy % arr.length;

    // Do this loop the amount of shiftBy
    for (var count = 0; count < shiftBy; count++) {

        // Save the last value in the array
        var last = arr[arr.length - 1];

        // Shift each value over by 1
        for (var i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }

        // Set the first value to last one that was saved
        arr[0] = last;
    }

    return arr;
}

var arr = [0, 1, 2, 3, 4];
var arr2 = [0, 1, 2, 3, 4, 5];

console.log(rotateArr2(arr, 8));
console.log(rotateArr2(arr2, 8));



