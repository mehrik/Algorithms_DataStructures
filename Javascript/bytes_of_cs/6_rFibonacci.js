function rFibonacci(num) {
    if (num <= 1) {
        return num;
    }
    return rFibonacci(num - 2) + rFibonacci(num - 1);
}

console.log(rFibonacci(2));