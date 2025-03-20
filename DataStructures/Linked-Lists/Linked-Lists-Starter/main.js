
// LINKED LISTS

// const basket = ['apples', 'grapes', 'pears'];

// linked list: apples --> grapes --> pears

// apples 
// 8947  --> grapes
//            8742  --> pears
//                        372 --> null

// ----------- Why do you think Linked Lists may be better than Arrays or HashTables ?

// 1 - Just like Arrays it traverses through the list O(n) until pointer to null
// 2 - Just like HashTables it is easier to delete or insert as there is no INDEX shifting
// 3 - BUT, there is an order to linked list, unlike hashTables, so you can have SORTED data

// Understand what is a Pointer  -----> A reference to a place in memory / node / object

// const obj1 = { a: true };
// const obj2 = obj1;        // this creates a pointer , obj2 reference obj1


// Create a Link List in JavaScript
// 10 --> 5 --> 16

let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return console.log(array);
        
    }

    append(value) {

        // create the new node pointing to null
        const newNode = new Node(value)
        // Connects the current tail (old last node) to the new node
        this.tail.next = newNode;
        // Updates the tail pointer to point to the new last node
        this.tail = newNode
        this.length++
    }

    prepend(value) {

        // create the new node pointing to null
        const newNode = new Node(value)
        // connect the newNode pointer to the head
        newNode.next = this.head
        // update the head to be the new Node
        this.head = newNode
        this.length++
    }

    insert(index, value) {
        // check if index > array length, just append value to end
        if (index >= this.length) {
            this.append(value)
            return this
        }
        // check if index === 0, just prepend value to head
        if (index === 0) {
            this.prepend(value)
            return this
        }

        // create a pre node and set equal to head
        let pre = this.head
        // traverse linked list, till index - 1, set this to pre
        for (let i = 0; i < index - 1; i++) {
            pre = pre.next
        }
        // create an aft node & set = pre pointer
        let aft = pre.next
        // create new node that will be inserted
        let newNode = new Node(value)
        // set new node pointer to point to aft node
        newNode.next = aft
        // set pre node pointer to point to new node
        pre.next = newNode
        // increase length of linkedList
        this.length++
    }


}

const linkedList = new LinkedList(10)


linkedList.append(5)
linkedList.append(16)
linkedList.prepend(1)

linkedList.printList()

linkedList.insert(0, 20)

linkedList.printList()