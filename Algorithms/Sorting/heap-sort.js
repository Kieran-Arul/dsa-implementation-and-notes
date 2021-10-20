/*

HEAP SORT

WHAT IS A HEAP:

- A (binary) heap is a tree-like data structure characterised by the parent nodes always being bigger than its child nodes

- Heaps are very useful when trying to implement a priority queue for example

- This is because with heaps the max/min node will always be the root

MAIN METHODS WHEN DEALING WITH HEAPS:

- heapExtractMax or heapExtractMin: Returns the value of the root node, replaces it with the value of the last leaf, then uses heapify to maintain the heap property of the tree

- buildHeap: Constructs a heap from an unsorted array, does so by putting elements into a tree such that if you looked at the tree layer by layer from left to right, the order of the elements will be the same as their order in the initial array, then calls heapify on each node starting from the last leaf, going right to left from the bottom layer to the top until the root node

- heapify: Maintains the heap property when nodes are added/removed from the heaps

- heapSort: Sorts an array of numbers using a heap

HOW DOES HEAPIFY WORK:

- Heapify(A, v, n), where A is the heap itself, v is the index of the node we are calling heapify on, n is the size of the heap (i.e. length of the array)

- Start at the node v and compare it to its two children

- If one of the children is bigger than v, swap them

- If a swap takes place, recurse into the node that was swapped to become a child and compare it to its children

- Terminate the recursion when either the node we are calling heapify on is a leaf or no swaps take place

HOW DOES HEAP SORT WORK:

- Start at the final leaf node and loop through until you get to the second-last node

- On each iteration, swap the node we are currently on with the root node

- Call heapify on the root node

- Array will be sorted in place

HEAP SORT TIME/SPACE COMPLEXITY:

- O(nlogn) - time complexity
- O(1) - space complexity

*/