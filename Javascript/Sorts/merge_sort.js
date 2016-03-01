var arr1 = [4];
var arr2 = [8, 23, 42, 108];
var arr3 = [108, 15, 50, 4, 8, 42, 23, 16];

function merge(arr1, arr2) {
    var output = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            output.push(arr1[i]);
            i++;
        } else {
            output.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        output.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        output.push(arr2[j]);
        j++;
    }
    return output;
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        var left = mergeSort(arr.slice(0, arr.length/2));
        var right = mergeSort(arr.slice(arr.length/2));
        return merge(left, right);
    }
    
}
console.log(mergeSort(arr3));