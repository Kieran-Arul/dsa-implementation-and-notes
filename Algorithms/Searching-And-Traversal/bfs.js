/*

BREADTH-FIRST SEARCH:

- This is one of the algorithms that can be used to traverse a tree or a graph and visit all its nodes

- It is also commonly used to find the distances between each node

- Time complexity is O(V+E) where V is the number of nodes/vertices and E is the number of edges

HOW DOES IT WORK:

    - Start at a particular node of choice and add it to a queue

    - Pop that node from the queue and visit all its neighbours, adding each neighbour to the queue

    - Pop the node at the front of the queue and visit all its neighbours, adding each neighbour to the queue

    - Repeat previous step until all nodes are visited

- In summary, start at a particular node and visit all its neighbours. Then for each of the neighbours, visit all of their neighbours. Then for each of those neighbours, visit all their neighbours. Repeat this process until all nodes are visited.

FOR EXAMPLE:

          9
      4       20
    1   6   15  170

    BFS will produce [9, 4, 20, 1, 6, 15, 170]

PROS AND CONS OF BFS:

- PROS:

    - Able to find the shortest distance between 2 nodes

- CONS:

    - Takes up more memory than DFS

*/

/*********************** BST Version of BFS ***********************/

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

    breadthFirstSearch() {

        let visited = [];
        let queue = [];

        let currentNode = this.root;

        queue.push(currentNode);

        while (queue.length) {
            
            currentNode = queue.shift();
            visited.push(currentNode.value);

            if ((currentNode.left) && (!visited.includes(currentNode.left.value))) {

                queue.push(currentNode.left);

            }

            if ((currentNode.right) && (!visited.includes(currentNode.right.value))) {

                queue.push(currentNode.right);

            }

        }

        return visited;

    }

    breadthFirstSearchRecursive(visited, queue) {

        if (!queue.length) {

            return visited;

        }

        let currentNode = queue.shift();
        visited.push(currentNode.value);

        if ((currentNode.left) && (!visited.includes(currentNode.left.value))) {

            queue.push(currentNode.left);

        }

        if ((currentNode.right) && (!visited.includes(currentNode.right.value))) {

            queue.push(currentNode.right);

        }

        return this.breadthFirstSearchRecursive(visited, queue);

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

/*********************** GRAPH VERSION OF BFS ***********************/

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

    breadthFirstSearch(node) {

        let visited = [];
        let queue = [];

        visited.push(node);
        queue.push(node);

        while (queue.length) {

            let currentNode = queue.shift();

            this.adjacencyList[currentNode].forEach(element => {
                
                if (!visited.includes(element)) {

                    visited.push(element);
                    queue.push(element);

                }

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
console.log(myGraph.breadthFirstSearch("A"));