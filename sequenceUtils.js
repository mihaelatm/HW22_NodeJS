"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFibonacci = generateFibonacci;
exports.generatePrimeNumbers = generatePrimeNumbers;
function generateFibonacci(limit) {
    var fibonacci = [0, 1];
    while (true) {
        var nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if (nextNumber > limit)
            break;
        fibonacci.push(nextNumber);
    }
    return fibonacci;
}
function generatePrimeNumbers(limit) {
    var primes = [];
    for (var num = 2; num <= limit; num++) {
        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            primes.push(num);
    }
    return primes;
}
