

// Doubly Linked Lists Allows us to traverse the List backwards
// Give more flexibility

// let's say we have 
// 
//   5 --> 10 --> 2 --> null   (Singly linked lists)
//
//   5 --> 10 --> 2 --> 
//     <--    <--              (Doubly Linked Lists)
//
// 
// 

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            prev: null,
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
        // set the prev pointer of the new node to the current tail
        newNode.prev = this.tail
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
        // connects the current heads prev to the new node
        this.head.prev = newNode
        // update the head to be the new Node
        this.head = newNode
        this.length++
    }


    insert(index, value) {
        // If index is greater than or equal to length, append to the end
        if (index >= this.length) return this.append(value);
    
        // If index is 0, prepend to the start
        if (index === 0) return this.prepend(value);
    
        // Find the node currently at the given index
        let prevNode = this.getNodeAtIndex(index - 1);
        let nextNode = prevNode.next;
    
        // Create the new node
        let newNode = new Node(value);
        
        // Connect newNode between prevNode and nextNode
        newNode.prev = prevNode;
        newNode.next = nextNode;
        prevNode.next = newNode;
    
        // If nextNode exists, update its prev pointer
        if (nextNode) {
            nextNode.prev = newNode;
        }
    
        // Increase length
        this.length++;
    }


    remove(index) {
        // If index is out of bounds or list is empty, return
        if (index < 0 || index >= this.length || !this.head) return;
    
        // If removing the head node
        if (index === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null; // If list becomes empty
            }
        } 
        // If removing the tail node
        else if (index === this.length - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } 
        // Removing a middle node
        else {
            let nodeToBeRemoved = this.getNodeAtIndex(index);
            let prevNode = nodeToBeRemoved.prev;
            let nextNode = nodeToBeRemoved.next;
    
            // Update pointers to bypass nodeToBeRemoved
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
    
        this.length--; // Reduce length of linked list
    }
    
    // helper function to traverse the node list
    getNodeAtIndex(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

}

const doublyLinkedList = new DoublyLinkedList(10)
doublyLinkedList.append(5)
doublyLinkedList.append(16)
doublyLinkedList.printList()

doublyLinkedList.prepend(1)
doublyLinkedList.printList()


doublyLinkedList.insert(2, 99)
doublyLinkedList.printList()