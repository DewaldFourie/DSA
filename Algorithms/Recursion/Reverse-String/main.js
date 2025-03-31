
// REVERSE A STRING => 'yoyo master' should be 'retsam oyoy'

// Iterative
function reverseString(str) {
    let data = []
    for (let i = str.length - 1; i >= 0; i--) {
        data.push(str[i])
    }
    return data.join('');
}

console.log(reverseString("yoyo master"))

//---------------------------------------------------------------------------

// Recursion
function reverseStringRecursive(str) {
    if (str === '') {
        return ''
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0)
    }
}

console.log(reverseStringRecursive("yoyo master"));

//---------------------------------------------------------------------------

// 2 Pointer Approach (in place)

function reverseStringInPlace(str) {
    let arr = str.split(''); // Convert to an array (mutable)
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap characters
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join(''); // Convert back to string
}

console.log(reverseStringInPlace("yoyo master")); 