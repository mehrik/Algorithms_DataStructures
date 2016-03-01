function helper(arr, val) {
    var finale = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i].push(val);
        finale.push(arr[i].slice(0));

        for (var k = arr[i].length - 1; k > 0; k--) {
            var temp = arr[i][k];
            arr[i][k] = arr[i][k - 1];
            arr[i][k - 1] = temp;
            finale.push(arr[i].slice(0));
        }
    }
    return finale;
}

function permutation(arr) {
    if (arr.length <= 1) { return [arr];}
    var subArr = arr.slice(0, arr.length - 1);
    var last = arr[arr.length - 1];
    return helper(permutation(subArr), last);
}

console.log(permutation([1,2,3]));
