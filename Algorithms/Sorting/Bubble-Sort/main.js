

// Bubble Sort is one of the simplest sorting algorithms but also 
// one of the least efficient
//
// O(n^2)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    // set swapped, it is automatically true
    let swapped
    // setup do-while loop, while swapped is true
    do {
        swapped = false // set swap to false
        for (let i = 0; i < array.length - 1; i++) {
            // if val 1 > val 2, then swap
            if (array[i] > array[i+1]) {
                // swap value 1 and 2 around
                [array[i], array[i+1]] = [array[i+1], array[i]]
                swapped = true  // set swapped to true because of the condition
            }
        }
    } while (swapped);
    return array
}


bubbleSort(numbers);
console.log(numbers);