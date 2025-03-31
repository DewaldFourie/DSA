

// Write two functions that finds the factorial of any number. 
// one should just use a for loop, the other one should use a recursive function

// Iterative  (easy)
function findFactorialIterative(number) {     // O(n)
    let result = 1;
    for (let i = number; i > 0; i--){
        result *= number
        number--
    }
    return result
}

console.log(findFactorialIterative(5));

// ------------------------------------------------------------------


// Recursive 
function findFactorialRecursive(number) {      // O(n)
    if (number === 0) return 1
    return number * findFactorialRecursive(number - 1)
}

console.log(findFactorialRecursive(5));

// The recursive function works as follows
//
// findFactorialRecursive(5 * findFactorialRecursive(4 * findFactorialRecursive(3 * findFactorialRecursive(2 * findFactorialRecursive(1 * (1))))))
//
// it works it's way back, thus the final (burt first, will be number = 0, thus return 1)
// thus: 1 * 1 * 2 * 3 * 4 * 5 = 120

// think about the CALL STACK
