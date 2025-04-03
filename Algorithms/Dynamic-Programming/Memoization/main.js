

// Dynamic Programming

// REDUCE THE TIME AND SPACE COMPLEXITY , Big O

// It is a way to solve problems by breaking it down into a collection of sub-problems
// Solving each of those sub-problems justs once and storing(caching) their solutions
// Incase next time the same sub-problem occurs

// Caching (cache)
// - way to store values so you can use them later on 
// - holds a piece of data in an easily accessible box


//------ Memoization -------------------------------------------
// 
// a specific form of caching 

// a basic function
// function addTo80(n) {
//     return n + 80
// }

// // if you run it 3 times

// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(5));

// It will have to do it 3 times
// What if the function is not basic, but takes a long time ?
// this is where caching and Memoization helps

// create a cache (memory object)
// let cache = {}

// function memoizedAddTo80(n) {
//     // check if the n value has been done already ?
//     if (n in cache) {
//         // if yes ? return n (no need to run the whole logic function again)
//         return cache[n]
//     } else {
//         // if no ? run the logic function and store the value in cache
//         cache[n] = n + 80
//         return cache[n];
//     }
// }

//  First, the cache memory is empty, logic will run = may take time
// console.log(memoizedAddTo80(10));
//  now, the value 80 is in the cache memory, logic not needed to run = much faster
// console.log(memoizedAddTo80(10));

// BUT !!!!

// In Programming it is not best practice to save memory or cache in the global scope like above
//

// So we need to use CLOSURES


// This is best Practice
function memoizedAddTo80() {
    let cache = {}
    return  function(n) {
        // check if the n value has been done already ?
        if (n in cache) {
            // if yes ? return n (no need to run the whole logic function again)
            return cache[n]
        } else {
            // if no ? run the logic function and store the value in cache
            cache[n] = n + 80
            return cache[n];
        }
    }

}

// then do this
const memoized = memoizedAddTo80();

// First, the cache memory is empty, logic will run = may take time
console.log('1 -', memoized(5));
console.log('1 -', memoized(6));
// now, the values 5 & 6 is in the cache memory, logic not needed to run = much faster
console.log('2 -', memoized(5));
console.log('2 -', memoized(6));
