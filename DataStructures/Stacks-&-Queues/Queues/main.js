


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        if (this.length === 0) return console.log('Queue is Empty');
        return console.log(this.first.value);
    }

    enqueue(value) {
        // create a new node to be added
        const newNode = new Node(value)
        //check if Queue is empty
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++
        console.log(this);
    }
    dequeue() {
        if (this.length === 0) return console.log('Queue is Empty');

        const dequeuedNode = this.first
        // set the first to the next value down in the queue
        this.first = this.first.next
        // if queue becomes empty
        if (!this.first) this.last = null;

        this.length--
        console.log(this);
        return dequeuedNode.value
    }

    isEmpty() {
        !this.length ? console.log(true) : console.log(false)
    }
}

const myQueue = new Queue();

//Joy
//Matt
//Pavel
//Samir

myQueue.peek()
myQueue.isEmpty()

myQueue.enqueue('Joy')
myQueue.peek() 

myQueue.enqueue('Matt')
myQueue.peek() 

myQueue.enqueue('Pavel')


myQueue.enqueue('Samir')

myQueue.dequeue()

myQueue.peek()
myQueue.isEmpty()

