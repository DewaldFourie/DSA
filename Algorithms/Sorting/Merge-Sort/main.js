
// Merge Sort
// (divide and conquer)

// One of the most efficient ways to sort a list

// Typically performs better that other sorting algorithms

// O(n log(n))

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    // Split Array in into right and left
    const mid = Math.floor(array.length/2)
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    // Recursively sort both halves and merge them
    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // merge two sorted arrays
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    // Add any remaining elements
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);