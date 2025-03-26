


class Stack {
    constructor() {
        this.array = []
    }
    

    peek() {
        // return the top value of the stack || log empty
        if (!this.array.length) return console.log('Stack is Empty');
        let topElement = this.array[this.array.length - 1]
        console.log(topElement);
        
    }

    push(value) {
        // add a value to the array(stack)
        this.array.push(value)
    }

    pop() {
        // check to see if the stack has values to pop
        if (!this.array.length) return console.log("Stack is empty");
        
        this.array.pop()
        console.log(this.array);
    }

    isEmpty() {
        !this.array.length ? console.log(true) : console.log(false)
    }

}

const myStack = new Stack();

myStack.isEmpty()

myStack.push('google')
myStack.peek()

myStack.push('Udemy')
myStack.peek()

myStack.push('discord')
myStack.peek()

console.log(myStack.array);

myStack.isEmpty()

myStack.pop();