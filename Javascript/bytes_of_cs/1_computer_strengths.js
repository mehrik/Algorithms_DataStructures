var arr = [24, 8, 23, 3];

function linearSearch(number, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == number) {
            return i;
        }
    }
    return false;
}

console.log("Looking for 8", linearSearch(8, arr));
console.log("Looking for -99", linearSearch(-99, arr));