//

// Bottom Up approach to Fibonacci

// This types of problems are not so easy to see even though there is a solution like this

function fibonacci(n) {
    if(n <= 1) return n

    let prev2 = 0;
    let prev1 = 1; 
    for (let i = 2; i <= n; i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current 
    }
    return prev1
}

console.log(fibonacci(7));
