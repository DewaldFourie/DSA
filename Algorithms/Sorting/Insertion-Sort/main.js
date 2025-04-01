
// Insertion Sort 
// works well with small datasets

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1
        
        // move elements that are greater than current one step ahead
        while ( j >= 0 && array[j] > current ) {
            array[j + 1] = array[j];
            j--
        }
        // Insert current element at correct position
        array[j + 1] = current;
    }
    return array
}

console.log(insertionSort(numbers));