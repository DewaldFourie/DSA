
// Quick Sort
// (divide and conquer)
// PIVOT


// O(n log(n))

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
    if (left < right) {
        let pivotIndex = partition(array, left, right);

        // Recursively apply quickSort to left and right partitions
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
}

function partition(array, left, right) {
    let pivot = array[right]; // Choose the last element as pivot
    let i = left; // Pointer for the smaller element

    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            swap(array, i, j);
            i++;
        }
    }

    swap(array, i, right); // Place the pivot in its correct position
    return i;
}

function swap(array, firstIndex, secondIndex) {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
}

// Call quickSort with first and last index
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);