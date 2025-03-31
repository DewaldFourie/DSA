
// --------- RECURSION ------------------------

// Recursion can lead to stack overflow
// (INFINITE LOOPS)

// function  inception() {
//     inception()
// }

// will give "Maximum call stack size exceeded"

// EVERY RECURSIVE function needs to have a BASE CASE

// let counter = 0;                must be      let counter = 0;  
// function inception() {                       function inception() {
//     if (counter > 3) {                           if (counter > 3) {
//         return 'done'                                return 'done'      BASE CASE
//     }                                            }
//     counter++                                    counter++
//     inception();                                 RETURN inception();    RECURSIVE CASE
// }                                            }

//  ^ this function above looks like this:

// inception(inception(inception(inception('done'))))
// (won't return anything because done gets lost and undefined is returned)

// Must have a base case and RETURN the value to the outermost function !!!

// Three RULES :

//              1. Identify BASE CASE
//              2. Identify RECURSIVE CASE
//              3. Get closer and closer and RETURN when needed (Usually have 2 RETURNS)

