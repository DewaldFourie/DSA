
// Given a number N, return the index value of the Fibonacci sequence
// where the sequence is 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ....

// each value is the sum of the previous 2 values
// for N = 5 -> 2 + 3 

// Iterative 

function fibonacciIterative(n) {      // O(n)
    if (n === 0) return 0;
    if (n === 1) return 1;
    let first = 0;
    let second = 1;
    let currentSum = 0;

    for (let i = 2; i <= n; i++) {
        currentSum = first + second;
        first = second;
        second = currentSum
    }

    return currentSum

}

console.log(fibonacciIterative(8));



// ------------------------------------------------------------------

// Recursive

function fibonacciRecursive(n) {    // O(2^n)  
    if (n === 0) return 0;       //  BASE CASE
    if (n === 1) return 1;       //     ||

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(8));
