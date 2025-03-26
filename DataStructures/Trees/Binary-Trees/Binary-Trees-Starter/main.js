
// Binary Tree

// each node can only have 0, 1 or 2 node children
// each children node can only have 1 parent node
// each node represents a certain state

function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// Perfect Binary tree = All nodes are filled in, bottom layer is full
//        vs
// Full Binary tree = A node has either 0 or 2 children, never 1

//
// Perfect Binary Tree Properties
// 
//    1-  Number of total nodes on each level doubles as we move down the tree
//    2-  Number of nodes on last level = sum of all the other nodes + 1
//          (this means half of the data is at the very bottom, can be efficient)
//

// can calculate as follows

// level 0: 2^0 = 1
// level 1: 2^1 = 2
// level 2: 2^2 = 4
// level 3: 2^3 = 8

// # total nodes = 2^h - 1  where h is the height of the tree

// this is where O(log N) comes in 
