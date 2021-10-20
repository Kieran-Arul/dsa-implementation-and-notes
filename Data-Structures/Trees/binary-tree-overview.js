/*

BINARY TREES OVERVIEW

- The defining characteristics of a binary tree is that:

    - Each node can only have 0, 1 or 2 children
    - Each child node can only have 1 parent node

- A perfect binary tree is one where:

    - All nodes except the leaf nodes have two children
    - Leaf nodes are all at the same height/level
    - Each layer has double the number of nodes as the previous layer
    - The number of nodes on the bottom layer is equal to the sum of nodes on all the previous layers + 1
    - I.e. in a perfect binary tree, about half of the total number of nodes is on the bottom layer

- A full binary tree is one where:

    - All nodes except the leaf nodes have two children
    - Leaf nodes MAY NOT be at the same level as each other
    - Every node has either 0 or 2 children

- O(log N):

    - Most trees have insert, delete and lookup Big-Os of O(log N)
    - In terms of lookup, the reason for this is that if we have arranged the binary tree properly, the maximum number of left/right decisions we will have to make before we find the desired node is equal to the height of the tree
    - We know that: Total number of nodes = 2^h - 1, where the layers go 0, 1, 2... and the height of the root node is 1, height of a tree with layers 0 and 1 is 2, etc
    - Taking logs of both sides, we will approximately see that log N = h, hence making lookups an O(log N) operation since the max number of decisions is equal to the height of the tree

*/