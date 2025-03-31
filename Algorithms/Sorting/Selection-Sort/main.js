

// Selection sort 
// is also one of the simpler ways
//
// it sets a value as the min and scans ahead to find a smaller min and replaces the val[i] with the min
//
// O (n^2)


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    // for loop 1 
    for (let i = 0; i < array.length; i++) {
        // set min to i
        let min = i
        // for loop 2 from i+1 
        for (let j = i + 1; j < array.length; j++) {
            // if loop 2 j < current min 
            if ( array[j] < array[min] ) {
                // set min to that j value
                min = j
            }  
        }
        // Swap only if a smaller element was found
        if (min !== i) {
            [array[i], array[min]] = [array[min], array[i]];
        }

    }
    return array
}

console.log(selectionSort(numbers));