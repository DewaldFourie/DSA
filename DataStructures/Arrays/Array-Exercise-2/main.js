
// Given 2 Arrays that are sorted, can you merge the two Arrays and return
// a still sorted array

// [0,3,4,31] & [4, 6, 30] => should be => [0,3,4,4,6,30,31] 

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

let mergeSortedArrays = (array1 ,array2) => {

    let newArr = array1.concat(array2)
    let sortedArr = newArr.sort((a, b) => a - b)
    return console.log(sortedArr);
    
}

mergeSortedArrays(array1, array2);


//-------------------------- OR -----------------------

let mergeSortedArrays2 = (array1, array2) => {

    let newArr = [];
    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            newArr.push(array1[i]);
            i++
        } else {
            newArr.push(array2[j])
            j++
        }
    }

    while (i < array1.length) {
        newArr.push(array1[i]);
        i++
    }

    while (j < array2.length) {
        newArr.push(array2[j])
        j++
    }

    return console.log(newArr);
    
}

mergeSortedArrays2(array1, array2)