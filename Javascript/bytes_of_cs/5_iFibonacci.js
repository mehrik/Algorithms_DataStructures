function iFibonacci(num) {
    var arr = [0, 1];
    for (var i = 0; i < num; i++) {
        var temp = arr[1];
        arr[1] = arr[1] + arr[0];
        arr[0] = temp;
    }
    return arr[0];
}

console.log(iFibonacci(3));