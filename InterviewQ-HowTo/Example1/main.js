
// Given 2 Arrays, Create a function that let's a user know (true/false) 
// whether these two Arrays contain any elements in common. 
// If you find any elements in common, return true, else return false.

// for example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

//-------------  ASK QUESTIONS, get this ---------------

// 2 params - arrays - no size limit
// return true or false

///----------- Brute Force Solution -------------------

// compare each element of array1 with each element of array2 
// = will work, BUT
// = NESTED FOR LOOPS = O(n * m) - two input arrays 
// = NOT EFFICIENT !!!

//------------ Optimal Solution ----------------------

// This solution runs O(n + m) => O(n) , This is much better for larger inputs
function containsCommonItem(array1, array2) {
    // loop through first array & create object where props === items in array
    let map = {};
    for (let i = 0; i < array1.length; i++){
        const item = array1[i]
        map[item] = true
    } 
    // loop through second array & check if item in second array exist in object
    for (let j = 0; j < array2.length; j++) {
        if (map[array2[j]]) {
            return console.log(true);
            
            
        }
    }
    return console.log(false);
}


// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'w', 'd', 'r', 'b'];

containsCommonItem(array1, array2)