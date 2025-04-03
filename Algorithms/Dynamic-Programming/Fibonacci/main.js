//


// Fibonacci in Dynamic Programming

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ......

// in recursion we did it like this
// But, how efficient is this function ???
// let's see

let calculationsSlow = 0;

/// remember this is O(2^n)
function fibonacciRecursive(n) {
    calculationsSlow++
    if (n < 2) {
        return n
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

// if I do fib(7) 
console.log('SLOW RECURSIVE');
console.log('SlowerFib = ', fibonacciRecursive(7));  
console.log('# of calculations', calculationsSlow);
console.log('');
console.log('');
// 
// takes me 41 calculations....
//
// thus it is not very efficient ....
//
// BUT, with dynamic programming we can go down 
//
// from O(2^n)  to  O(n)   ,   This is MUCH better
//
//

let calculationsFast = 0

function fibonacci() {
    const cache = {};
    return function fib(n) {
        calculationsFast++
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n
            } else {
                cache[n] = fib(n - 1) + fib(n - 2)
                return cache[n]
            }
        }
    }   
}

// Now if you use this fibonacci function, it should be much more efficient

const fasterFib = fibonacci();

console.log('FAST DYNAMIC');
console.log('Fasterfib = ', fasterFib(7));
console.log('# of calculations', calculationsFast);

// takes me 13 calculations....
// time complexity = O(n) , but space complexity gets traded off a bit here because of cache = {}

// Thus 13 is much faster and better than 41

// With Fib(35) it gets really interesting
//
// The Recursive Slow method takes 29860703 calculations
//
//                  VS
//
// The Dynamic Fast method takes only 69 calculations....
