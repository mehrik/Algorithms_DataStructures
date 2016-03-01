function iFactorial(number) {
    var product = 1;
    for (var i = 1; i <= number; i++) {
        product *= i;
    }
    console.log(product);
}

iFactorial(3);