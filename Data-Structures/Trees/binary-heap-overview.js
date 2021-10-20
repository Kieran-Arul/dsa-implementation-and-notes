/*

BINARY HEAPS OVERVIEW

- The heap data structure is NOT the same as the memory heap (where variables are stored)

- A binary heap is another type of binary tree

- However, its properties (and its purpose) are different to that of a binary search tree

- A max heap has the property that the value of every parent is bigger than its children

- I.e. in a max heap, each lower layer has values smaller than an upper layer

- A min heap has the property that the value of every parent is smaller than its children

- I.e. in a min heap, each lower layer has values larger than an upper layer

- Heaps are very useful in implementing priority queues or even sorting numbers through HeapSort

- The key operations in working with heaps are:

    - Heapify:

        - Maintains the heap property of a heap
        - Works by starting at the given node and then recursing downward and swapping elements upwards to maintain the heap property
    
    - BuildHeap:

        - Builds a heap from a set of numbers
        - Given a set of numbers in an array, build a tree out of it (which will not yet be a heap)
        - Works by calling Heapify on each node starting from the right-most node on the bottom layer (right-most element in the input array) and working in descending order of indices
        - This has the effect of swapping smaller elements to move downwards and larger elements to bubble upwards

    - HeapExtractMax/Min:

        - Obtains the max/min value of the heap

*/