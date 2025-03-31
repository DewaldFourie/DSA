
// Iterative
function reverseString(str) {
    let data = []
    for (let i = str.length - 1; i >= 0; i--) {
        data.push(str[i])
    }
    return data.join('');
}

console.log(reverseString("yoyo master"))


// Recursion
function reverseStringRecursive(str) {
    if (str === '') {
        return ''
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0)
    }
}

console.log(reverseStringRecursive("yoyo master"));
