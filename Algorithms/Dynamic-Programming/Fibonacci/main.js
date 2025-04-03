//


// Fibonacci in Dynamic Programming

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ......

// in recursion we did it like this
// But, how efficient is this function ???
// let's see

let calculations = 0;

/// remember this is O(2^n)
function fibonacciRecursive(n) {
    calculations++
    console.log('# of calculations: ', calculations);
    
    if (n < 2) {
        return n
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

// if I do fib(7) 
console.log(fibonacciRecursive(7));  
// 
// takes me 43 calculations....
//
// thus it is not very efficient ....
//
// BUT, with dynamic programming we can go down 
//
// from O(2^n)  to  O(n)   ,   This is MUCH better
//


