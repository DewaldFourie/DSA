

// Depth First Search (traversal)

// can be:

//           9
//       4       20
//     1   6  15   170
//
// In-order  = [1, 4, 6, 9, 15, 20, 170]

// Pre-order = [9, 4, 1, 6, 20, 15, 170]    // useful to re create a tree

// Post-order = [1, 6, 4, 15, 170, 20, 9]   

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

    // ------- REMOVE FUNCTION IS ADVANCED FOR INTERVIEWS ----------
    remove(value) {
        // check if root exist, if no root, no tree
        if (!this.root) return 'No tree Exists'
        
        let current = this.root;
        let parent = null;
        while (current) {
            if ( value < current.value ) {
                // go left
                parent = current
                current = current.left;
            }
            else if ( value > current.value ) {
                // go right
                parent = current
                current = current.right
            }
            else if ( value === current.value ) {
                // match found
                // option 1: no right child
                if ( !current.right ) {
                    // if parent node  = null
                    if (!parent) {
                        this.root = current.left
                    } else {
                        // if parent > current value, set parent.left = current.left
                        if ( current.value < parent.value ) {
                            parent.left = current.left
                        } 
                        // if parent < current value, set parent.right = current.left
                        else if ( current.value > parent.value ) {
                            parent.right = current.left
                        }
                    }

                } 
                // option 2: Right child which doesn't have a left child
                else if ( !current.right.left ) {
                    // if parent node  = null
                    if (!parent) {
                        this.root = current.left
                    } else {
                        current.right.left = current.left
                        // if parent > current value, set parent.left = current.right
                        if ( current.value < parent.value ) {
                            parent.left = current.right
                        }
                        // if parent  < current value, set parent.right = current.right
                        else if ( current.value > parent.value ) {
                            parent.right = current.right
                        }
                    }
                }
                // option 3: Right child that has a left child
                else {
                    // find the right child's left most child
                    let leftmost = current.right.left;
                    let leftmostParent = current.right;
                    while( leftmost.left ) {
                        leftmostParent =leftmost;
                        leftmost = leftmost.left;
                    }

                    // parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right
                    leftmost.left = current.left
                    leftmost.right = current.right

                    if (!parent) {
                        this.root = leftmost
                    } else {
                        if ( current.value < parent.value ) {
                            parent.left = leftmost;
                        }
                        else if ( current.value > parent.value ) {
                            parent.right = leftmost
                        }
                    }
                }
                return true
            }
        }
    }

    // IN-ORDER DFS
    DFS_inOrder() {
        return traverseInOrder(this.root, [])
    }

    // PRE-ORDER DFS
    DFS_preOrder() {
        return traversePreOrder(this.root, [])
    }

    // POST-ORDER DFS
    DFS_postOrder() {
        return traversePostOrder(this.root, [])
    }
}

// traverse function  
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

// traverse IN-ORDER function
function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list)
    }
    list.push(node.value);                    //Push to list in middle = In Order
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list
}

// Traverse Pre-Order function
function traversePreOrder(node, list) {
    list.push(node.value);                   //Push to list pre (beginning) = Pre Order
    if (node.left) {
        traversePreOrder(node.left, list)
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list
}

// Traverse Post-Order function
function traversePostOrder(node, list) {
    if (node.left) {
        traversePostOrder(node.left, list)
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value)                   //Push to list Post (after) = Post Order
    return list
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
// console.log(tree.lookup(7));
// console.log(tree.lookup(6));
// console.log(tree.lookup(20));
// console.log(tree.lookup(9));
console.log('InOrder: ' + tree.DFS_inOrder());
console.log('PreOrder: ' + tree.DFS_preOrder());
console.log('PostOrder: ' + tree.DFS_postOrder());



