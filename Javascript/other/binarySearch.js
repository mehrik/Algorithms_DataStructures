function binarySearch(value, arr) {
    if (value > arr[arr.length - 1] || value < arr[0]) {
        return false;
    } else {
        return helper(value, arr, 0, arr.length - 1);
    }
}

function helper(value, arr, lower, upper) {
    var midpoint = Math.floor((upper + lower) / 2);

    if (value == arr[midpoint] || value == arr[lower] || value == arr[upper]) {
        return true;
    }

    if (lower == upper) {
        return false;
    }

    return (value < arr[midpoint]) ? helper(value, arr, lower, midpoint) : helper(value, arr, midpoint, upper);
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("False =", binarySearch(0, arr));
console.log("False =", binarySearch(11, arr));

console.log("True =", binarySearch(1, arr));
console.log("True =", binarySearch(2, arr));
console.log("True =", binarySearch(3, arr));
console.log("True =", binarySearch(4, arr));
console.log("True =", binarySearch(5, arr));

