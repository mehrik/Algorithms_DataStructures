var arr =  [1,3, 5, 7];
var y = 3;
var count = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) { count++; }
}

console.log(count);