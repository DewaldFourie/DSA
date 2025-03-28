
// ---------- GRAPHS ----------------------------------------

// Trees, Linked-Lists and Heaps are all graphs

// Directed Graphs = one way 
// Undirected Graphs = can go in opposite direction as well

// Weighted Graphs - if their edges or connection have values 
// Unweighted Graphs - if their edges doesn't have any values

// Cyclic Graph - when you can complete a cycle(circle) between nodes with edges 
// Acyclic Graph - when there is no circular connection

// GRAPHS are :
//               Good at Relationships
//               Bad at scaling



class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = []
        this.numberOfNodes++
    }

    addEdge(node1, node2) {
        if (node1 in this.adjacentList) {
            this.adjacentList[node1].push(node2)
        } else {
            console.log(`${node1} is not a node in graph`);
        }
        if (node2 in this.adjacentList) {
            this.adjacentList[node2].push(node1)
        } else {
            console.log(`${node2} is not a node in graph`);
        }
        
    }



    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = '';
            for (let vertex of nodeConnections) {
                connections += vertex + ' ';
            }
            console.log(node + '-->' + connections);
        }
    }
}


const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');


//       3 ------ 4 ------- 5
//       |        |         |
//       |        |         |
//       1 ------ 2         6
//        \      /
//         \    /
//           0


myGraph.showConnections(); 

//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5
