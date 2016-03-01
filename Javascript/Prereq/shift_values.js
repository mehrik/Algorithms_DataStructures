// arr[i] = arr[i + 1]
// if !arr[i + 1], arr[i] = 0?
// if !arr[i + 1] arr[i] = temp

var arr = [1, 5, 10, 7, -2];
var temp = arr[0];
for (var i = 0; i < arr.length; i++) {
    !arr[i + 1] ? arr[i] = temp : arr[i] = arr[i + 1];
}

console.log(arr);

