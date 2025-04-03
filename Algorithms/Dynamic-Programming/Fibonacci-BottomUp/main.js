//

// Bottom Up approach to Fibonacci

// This types of problems are not so easy to see even though there is a solution like this

function fibonacci(n) {
    let answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        answer.push(answer[i-2] + answer[i-1]);
    }
    return answer.pop()
}

console.log(fibonacci(7));
