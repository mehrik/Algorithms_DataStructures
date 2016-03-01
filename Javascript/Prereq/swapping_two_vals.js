var arr = [2, 3, 5, 7, 6];

var temp = arr[0];
arr[0] = arr[arr.length - 1];
arr[arr.length - 1] = temp;

console.log(arr);