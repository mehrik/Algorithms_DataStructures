// replaces any negative number in the array with 'Dojo'

var arr = [-1, -3, 2];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) { arr[i] = 'Dojo'; }
}

console.log(arr);