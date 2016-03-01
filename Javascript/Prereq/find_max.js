var arr = [-3, 3, 5, 7];
var max = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) { max = arr[i] };
}

console.log(max)