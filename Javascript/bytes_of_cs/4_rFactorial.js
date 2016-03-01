function rFactorial(number) {
    if (number <= 2) { return number; }
    else { return number * rFactorial(number - 1); }
}

console.log(rFactorial(4));