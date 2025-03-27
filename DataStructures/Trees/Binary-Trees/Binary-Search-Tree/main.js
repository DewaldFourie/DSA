
// Binary Search Tree
//
// Rules:
// 
// All Child nodes in the tree to right of the root node must be greater than the current node 
// a node can only have up to 2 children 
//

// Time Complexity is :

// Lookup = O(logN)
// insert = O(logN)
// delete = O(logN)

// this makes sense, as we have to find the correct spot to insert a new element 

// REMEMBER , an unbalanced binary search tree , just becomes a linked list worst case on one side O(n)

// PROS 
//
// Better than O(n)
// Ordered
// Flexible size

// CONS
//
// No O(1) operations


class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)
        // if empty ,set root = new node
        if (!this.root) {
            this.root = newNode
            return
        } 
        // set current to the root node
        let current = this.root
        while(true) {
            if ( value < current.value) {
                // go left
                if ( !current.left ) {
                    // set current left = new node
                    current.left = newNode;
                    return this;
                }
                // set current = current left, to repeat
                current = current.left
            } else {
                // go right
                if ( !current.right) {
                    // set current right = new node
                    current.right = newNode;
                    return this;
                }
                // set current = current right, to repeat
                current = current.right
            }
        }
    }

    lookup(value) {
        // check if root exist, if no root, no tree
        if (!this.root) return 'No tree Exists'
        // set current to the root & level 0
        let current = this.root;
        let level = 0
        while(current) {
            if ( value < current.value ) {
                // go left
                current = current.left;
                level++
            } 
            else if ( value > current.value ) {
                // go right
                current = current.right
                level++
            }
            else if ( value === current.value ) {
                // found value
                console.log(`Level: ${level === 0 ? 'root' : level}`);
                return current
            }
        }
        return 'Element not in Tree'
    }
}

// traverse function  
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

const tree = new BinarySearchTree();

//           9
//       4       20
//     1   6  15   170
//

tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(1)
tree.insert(170)
tree.insert(6)
tree.insert(15)

console.log(JSON.stringify(traverse(tree.root)))
console.log(tree.lookup(7));
console.log(tree.lookup(6));
console.log(tree.lookup(20));
console.log(tree.lookup(9));
