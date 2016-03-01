var arr = [true, 2, "A", "COlin"];

function revArray(arr) {
    var last = arr.length - 1;
    for (var i = 0; i < last; i++) {
        var temp = arr[last];
        arr[last] = arr[i];
        arr[i] = temp;
        last--;
    }
    console.log(arr);
}

revArray(arr);