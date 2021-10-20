/*

GRAPHS OVERVIEW

- Graphs are a very commonly used data structure because they are useful in modelling real-world relationships

- A graph is essentially models a collection of nodes and how they are related to each other

- Each entity is called a node/vertex and each connection between two nodes is called an edge

GRAPH CHARACTERISTICS:

- A graph may be directed or undirected:

    - A directed graph implies that one can only travel in one way between two nodes

    - An undirected graph implies that the direction does not matter when travelling between two nodes

- A graph may also be weighted or unweighted:

    - A weighted graph implies that an edge between two nodes has a certain magnitude or quantitative relationship (such as modelling the distance between 2 cities)

    - An unweighted graph implies that an edge between 2 nodes does not have any magnitude. I.e. it is purely a qualitative relationship

- A graph may also be cyclic or acyclic:

    - A cyclic graph is one where at least one graph cycle exists - that is, where a route exists such that you can return to your starting point having visited each node, except the starting node, only once

    - An acyclic graph is one where no graph cycles exist

HOW CAN GRAPHS BE REPRESENTED:

1. Edge List

    - A list of lists
    - Each sub-list in the main list details an edge that exists in the graph
    - E.g. const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]
    - This implies there is an edge between 0 and 2, there is an edge between 2 and 3 and so on

2. Adjacency List:

    - A list of lists
    - The index of each sub-list corresponds to the node/vertex in question
    - The elements of the sub-list refers to the nodes that the node in question shares an edge with
    - E.g. const graph = [[2], [2, 3], [0, 1, 3], [1, 2]]
    - This implies node 0 shares an edge with node 2, node 1 shares an edge with node 2 and node 3 and so on

3. Adjacency Matrix:

    - A list of lists
    - The index of each sub-list refers to the node in question
    - The number of elements in each sub-list is equal to the number of nodes in the graph
    - The index of each element in the sub-list refers to the node in question
    - Each element in the sub-list is either a 0 or 1, telling you whether the node in question shares an edge with a particular node
    - E.g. const graph = [
        [0, 0, 1, 0],
        [0, 0, 1, 1],
        [1, 1, 0, 1],
        [0, 1, 1, 0]
    ]
    - This implies that node 0 only shares an edge with node 2, node 3 shares an edge with nodes 1 and 2 and so on

*/