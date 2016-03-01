var arr = [0, 10, 18, 20, 50, 88, 1001];

function helper(arr, value, start, end) {
    if (value < arr[start] ||  value > arr[end]) {
        return false;
    }

    var mid = Math.floor((start + end) / 2);
    if (value == arr[mid]) { return true; }
    if (start == end) { return false; }

    if (value < arr[mid]) { return helper(arr, value, start, mid - 1); }
    else if (value > arr[mid]) { return helper(arr, value, mid + 1, end); }
}

function binarySearch(arr, value) {
    return helper(arr, value, 0, arr.length - 1);
}

console.log("true  =", binarySearch(arr, 0));
console.log("true  =", binarySearch(arr, 10));
console.log("true  =", binarySearch(arr, 18));
console.log("true  =", binarySearch(arr, 20));
console.log("true  =", binarySearch(arr, 50));
console.log("true  =", binarySearch(arr, 88));
console.log("true  =", binarySearch(arr, 1001));

console.log("false =", binarySearch(arr, -1));
console.log("false =", binarySearch(arr, 2000));

console.log("false =", binarySearch(arr, 9));
console.log("false =", binarySearch(arr, 11));


