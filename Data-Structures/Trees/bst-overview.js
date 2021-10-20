/*

BINARY SEARCH TREES OVERVIEW

- Binary search trees are a subset of binary trees

- Binary search trees have some defining characteristics:

    - The value of each left child node must be smaller than the value of the parent node
    - The value of each right child node must be larger than the value of the parent node

- Therefore, if you start at the root node and keep going left, you will get the smallest node
- If you start at the root node and keep going right, you will get the largest node
- Searching and lookup is very efficient because at every step you can eliminate half the tree

Balanced vs. Unbalanced BSTs:

- BSTs come with a problem whereby if one just inserts and deletes at will, the tree may become unbalanced
- I.e. where the depth of the right sub-tree varies greatly to the depth of the left sub-tree
- This is an issue because if this is allowed to occur, then operations may take up to O(n) rather than O(log N) time whereby if you go into the deep side of the BST, you just end up looping through all the nodes
- There are subsets of binary search trees such as Red-Black trees and AVL trees (covered later) which have specific rules to ensure the BSTs remain balanced (such as by rotations)

BST Pros:

    - All operations are O(log N), no O(n) operations
    - Ordered
    - Flexible size

BST Cons:

    - No O(1) operations -> the time taken for each operation will always depend on the size of the BST

*/