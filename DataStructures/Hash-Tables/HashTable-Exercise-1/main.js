
// Google Question = RECURRING CHARS

// Given an Array = [2,5,1,2,3,5,1,2,4]
// What is the FIRST recurring char of the collection ?
// It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

let arr1 = [2,5,1,2,3,5,1,2,4]
let arr2 = [2,1,1,2,3,5,1,2,4]
let arr3 = [2,3,4,5]


function findFirstRecurringChar(input) {
    let mySet = new Set()
    for (let i = 0; i < input.length; i++){
        if (mySet.has(input[i])) {
            return console.log(input[i]);
        }
        mySet.add(input[i])
    }
    return console.log(undefined);
    
}

findFirstRecurringChar(arr1) // = 2
findFirstRecurringChar(arr2) // = 1
findFirstRecurringChar(arr3) // = undefined


// Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

arr4 = [2,5,5,2,3,5,1,2,4]

findFirstRecurringChar(arr4); // = 5
