


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    

    peek() {
        // return the top value of the stack || log empty
        if (!this.top) return console.log("Stack is empty");
        console.log(this.top.value);
    }

    push(value) {
        //create a new node to add on top of stack
        const newNode = new Node(value);
        // check if there is not a top (empty)
        if (!this.top) {
            // First node then is both top and bottom
            this.top = newNode 
            this.bottom = newNode 
        } else {
            // new node points to previous top
            newNode.next = this.top;
            // Update top to be the new node now
            this.top = newNode
        }

        this.length++
        console.log(this);
        
    }

    pop() {
        // check to see if the stack has values to pop
        if (!this.length) return console.log("Stack is empty");

        const poppedNode = this.top
        // set the top to the next value down in the stack
        this.top = this.top.next
        // // If the list becomes empty
        if (!this.top) this.bottom = null;

        this.length--
        console.log(this);
        return poppedNode.value
    }

    isEmpty() {
        !this.length ? console.log(true) : console.log(false)
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

myStack.pop()
myStack.peek()

myStack.isEmpty()

