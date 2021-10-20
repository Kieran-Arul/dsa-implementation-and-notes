/*

DEPTH-FIRST SEARCH:

- This is another of the algorithms that can be used to traverse a tree or a graph and visit all its nodes

- It is commonly used to find which vertices of a graph are cut vertices/articulation points or if a path exists between a source and target node

- Time complexity of DFS is O(V+E) where V is the number of vertices and E is the number of edges

HOW DOES IT WORK:

    - Start at a particular node of choice

    - Recurse down that node until you reach a leaf or a node that has been visited

    - Once a leaf/visited node is reached, backtrack by one node and see if there another path that can be recursed into. If there is, recurse into it and then backtrack again when you reach a leaf or visited node

    - Let the process run until all nodes are visited

FOR EXAMPLE:

          9
      4       20
    1   6   15  170

    DFS will produce [9, 4, 1, 6, 20, 15, 170]

PROS AND CONS OF DFS:

- Pros:

    - Uses less memory than BFS
    - Can help us establish if a path exists from a source node to a target node

- Cons:

    - Can become slow

PRE-ORDER, POST-ORDER, IN-ORDER TRAVERSALS:

- In DFS, we can code the algorithm in 3 different ways
- Each of these 3 ways will give the same output but in a slightly different order
- Depending on our needs we may prefer our output in a certain order over another

          9
      4       20
    1   6   15  170

    Pre-order: [9, 4, 1, 6, 20, 15, 170] i.e. go deep to the left then backtrack
    Post-order: [1, 6, 4, 15, 170, 20, 9] i.e. children before parent
    In-order: [1, 4, 6, 9, 15, 20, 170] i.e. as if everything was collapsed into a list
    9 4 20 1 6 15 170

*/

/*********************** BST Version of DFS ***********************/


class Node {

    constructor(value) {

        this.value = value;
        this.left = null;
        this.right = null;

    }

}

class BinarySearchTree {

    constructor() {

        this.root = null;

    }

    lookup(value) {

        let currentNode = this.root;

        while (currentNode) {

            if (value < currentNode.value) {

                currentNode = currentNode.left;
                
            } else if (value > currentNode.value) {

                currentNode = currentNode.right;

            } else if (value === currentNode.value) {

                return true;

            }
            
        }

        return false;

    }

    recursiveLookup(node, value) {

        if (!node) {

            return false;

        } else if (node.value === value) {

            return true;

        } else if (value < node.value) {

            return this.recursiveLookup(node.left, value);

        } else if (value > node.value) {

            return this.recursiveLookup(node.right, value);

        }

    }

    insert(value) {

        let newNode = new Node(value);

        if (!this.root) {

            this.root = newNode;

            return this;

        }

        if (this.lookup(value)) {

            return this;

        }

        let currentNode = this.root;

        let newNodeInserted = false;

        while (!newNodeInserted) {

            if (newNode.value < currentNode.value) {

                let nextNode = currentNode.left;

                if (!nextNode) {

                    currentNode.left = newNode;
                    newNodeInserted = true;

                } else {

                    currentNode = nextNode;

                }

            } else if (newNode.value > currentNode.value) {

                let nextNode = currentNode.right;

                if (!nextNode) {

                    currentNode.right = newNode;
                    newNodeInserted = true;

                } else {

                    currentNode = nextNode;

                }

            }

        }

        return this;

    }

    recursiveInsert(node, value) {

        let newNode = new Node(value);

        if (!this.root) {

            this.root = newNode;

        } else if (value < node.value) {

            if (!node.left) {

                node.left = newNode;

            } else {

                this.recursiveInsert(node.left, value);

            }

        } else if (value > node.value) {

            if (!node.right) {

                node.right = newNode;

            } else {

                this.recursiveInsert(node.right, value);

            }

        }

        return this;

    }

    remove(value) {

        if (!this.lookup(value)) {

            return "Node does not exist";

        }

        let currentNode = this.root;
        let parentNode = 0;
        let nodeToDelete = 0;
        let direction = 0;
        let targetNodeFound = false;
        let isRoot = false;

        if (this.root.value === value) {

            isRoot = true;

        }

        while (!targetNodeFound) {

            if (currentNode.value === value) {

                nodeToDelete = currentNode;

                targetNodeFound = true;
            
            } else if (value < currentNode.value && value !== currentNode.left.value) {

                currentNode = currentNode.left;

            } else if (value > currentNode.value && value !== currentNode.right.value) {

                currentNode = currentNode.right;

            } else if (currentNode.left.value === value) {

                parentNode = currentNode;
                nodeToDelete = parentNode.left;
                direction = "left";

                targetNodeFound = true;
            
            } else if (currentNode.right.value === value) {

                parentNode = currentNode;
                nodeToDelete = parentNode.right;
                direction = "right";

                targetNodeFound = true;

            }

        }

        // CASE 2: NODE TO DELETE IS A LEAF
        if (!nodeToDelete.left && !nodeToDelete.right) {

            if (direction === "left") {

                parentNode.left = null;

            } else {

                parentNode.right = null;

            }

            if (isRoot) {

                this.root = null;

            }
        
        // CASE 2: NODE TO DELETE HAS 1 CHILD
        } else if (!nodeToDelete.left || !nodeToDelete.right) {

            if (nodeToDelete.left && direction === "left") {

                parentNode.left = nodeToDelete.left;
            
            } else if (nodeToDelete.left && direction === "right") {

                parentNode.right = nodeToDelete.left;
            
            } else if (nodeToDelete.right && direction === "left") {

                parentNode.left = nodeToDelete.right;

            } else if (nodeToDelete.right && direction === "right") {

                parentNode.right = nodeToDelete.right;

            } else if (isRoot && this.root.left) {

                this.root = nodeToDelete.left;

            } else if (isRoot && this.root.right) {

                this.root = nodeToDelete.right;

            }

        // CASE 3: NODE TO DELETE HAS 2 CHILDREN
        } else {

            let successorNodeParent = nodeToDelete.right;
            let successorNode = successorNodeParent.left;

            let successorFound = false;

            while (!successorFound) {

                if (!successorNode) {

                    nodeToDelete.value = successorNodeParent.value;

                    nodeToDelete.right = null;

                    successorFound = true;
                
                } else if (!successorNode.left) {

                    nodeToDelete.value = successorNode.value;

                    successorNodeParent.left = null;

                    successorFound = true;

                } else {

                    successorNodeParent = successorNodeParent.left;
                    successorNode = successorNodeParent.left;

                }

            }

            if (isRoot) {

                this.root = nodeToDelete;

            }

        }

    }

    // Good example of a recursive backtracking algorithm
    DFSInOrder(node, visited) {

        if (node.left) {

            this.DFSInOrder(node.left, visited);

        }

        visited.push(node.value);

        if (node.right) {

            this.DFSInOrder(node.right, visited);

        }

        return visited;

    }

    DFSPreOrder(node, visited) {

        visited.push(node.value);

        if (node.left) {

            this.DFSPreOrder(node.left, visited);

        }

        if (node.right) {

            this.DFSPreOrder(node.right, visited);

        }

        return visited;

    }

    DFSPostOrder(node, visited) {

        if (node.left) {

            this.DFSPostOrder(node.left, visited);

        }

        if (node.right) {

            this.DFSPostOrder(node.right, visited);

        }

        visited.push(node.value);

        return visited;

    }

}

const myBST = new BinarySearchTree();
myBST.insert(9);
myBST.insert(4);
myBST.insert(6);
myBST.insert(20);
myBST.insert(170);
myBST.insert(15);
myBST.insert(1);

/*********************** GRAPH VERSION OF DFS ***********************/

class Graph {

    constructor() {

        this.numberOfNodes = 0;
        this.adjacencyList = {};

    }

    addNode(value) {

        let existingNodes = Object.keys(this.adjacencyList);

        if (existingNodes.includes(value)) {

            console.log("Node already exists");

        } else {

            this.adjacencyList[value] = [];

            this.numberOfNodes++;

        }

        return this;

    }

    addEdge(node1, node2) {

        let existingNodes = Object.keys(this.adjacencyList);

        if (existingNodes.includes(node1) && existingNodes.includes(node2)) {

            if (this.adjacencyList[node1].includes(node2) && this.adjacencyList[node2].includes(node1)) {

                console.log("Edge between these 2 nodes already exists");

            } else {

                this.adjacencyList[node1].push(node2);
                this.adjacencyList[node2].push(node1);

            }

        } else {

            console.log("Node 1 or node 2 may not yet exist in the graph");

        }

        return this;

    }

    depthFirstSearch(node, visited) {

        if (!visited.includes(node)) {

            visited.push(node);

            this.adjacencyList[node].forEach(element => {
                
                this.depthFirstSearch(element, visited);

            });

        }

        return visited;

    }

}

let myGraph = new Graph();
myGraph.addNode("A");
myGraph.addNode("B");
myGraph.addNode("C");
myGraph.addNode("D");
myGraph.addNode("E");
myGraph.addNode("F");

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "D");
myGraph.addEdge("B", "E");
myGraph.addEdge("C", "F");
myGraph.addEdge("E", "F");
console.log(myGraph.depthFirstSearch("A", []));