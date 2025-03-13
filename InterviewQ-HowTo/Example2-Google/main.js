
// You are given a collection of numbers and a sum 
// You need to find a pair in the collection that is equal to that sum
// return true or false
// not necessarily ordered 

// Example: 
// [1, 2, 3, 9] and sum = 8;
// or
// [1, 2, 4, 4] and sum = 8;




let collection = [1, 2, 6, 9]
let sum = 8

// ----------------- Brute Force Approach ----------------------------------

// go through the collection and add two values to each other until a sum
// 
function findPairSumBrute(collection, sum) {
    for (let i = 0; i < collection.length; i++) {
        // go through collection again to add another value
        for (let j = 0; j < collection.length; j++) {
            if (i !== j && collection[i] + collection[j] === sum) {
                return console.log(true);
            }
        }
    }
    return console.log(false);
    
}


// Two issues: 
// 1 - it takes a lot of time , this is nested for loop, this will be O(n^2)
// 2 - If there is a val that is halve of sum it counts that value twice when i = j
// P.S saw that by adding (i !== j) to the IF statement, it will eliminate issue 2


// ----------------- My Approach  ----------------------------------

// Brute Force Approach has a very bad bigO need better time complexity
// loop through array and create a new collection to store the compliments of the sum and input collection 
// then loop through input collection and see if there is a compliment for each value to make sum
// if yes, return true, else return false

// ----------------- My Solution  ----------------------------------

function findPairSumOptimal(collection, sum) {
    let set = new Set();
    for (let i = 0; i < collection.length; i++) {
        if(set.has(collection[i])){
            return console.log(true);
        }
        set.add(sum - collection[i])
    }
    return console.log(false);
}

findPairSumOptimal(collection, sum); 


// ----------------- My Comments  ----------------------------------

// This solution works with my testing verbal and physically makes sense
// This is O(n) so much better time complexity
// Space Complexity is also O(n) because of Set(), but still better approach
// Tested with 'a' , null, [] => still works fine in JS
// One thing that I realized is that 
// IF collection range [0....n] thus +
// in this step: 
//
//   set.add(sum - collection[i])
// 
// I can add a check to see if the sum - collection[i] > sum , because then the compliment 
// won't matter as there is no negatives
// same with 0 if collection > 0;
// this will help reduce the set size and prevent operations not needed



