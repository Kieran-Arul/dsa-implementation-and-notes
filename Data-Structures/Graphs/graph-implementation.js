/*

GRAPH IMPLEMENTATION

*/

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

}

let myGraph = new Graph();

myGraph.addNode("0");
myGraph.addNode("1");
myGraph.addNode("2");

myGraph.addEdge("0", "1");
myGraph.addEdge("1", "2");

console.log(myGraph.adjacencyList);
