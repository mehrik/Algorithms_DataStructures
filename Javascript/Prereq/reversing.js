var arr = [-3, 5, 1, 3, 2, 10, 11];

for (var i = 0; i < arr.length/2; i++) {
    var temp = arr[i];
    var swap = arr.length - 1 - i
    arr[i] = arr[swap];
    arr[swap] = temp;
}

console.log(arr);