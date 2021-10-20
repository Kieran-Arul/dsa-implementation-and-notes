/*

STACKS OVERVIEW

- Stacks are essentially a Last In First Out (LIFO) data structure

- This means that the last piece of data to enter the stack will be the first piece of data to leave the stack

- Stacks are implemented for example when we press the back/forward button on our browser

- Stacks are also used in the undo/redo buttons on Microsoft Word for example

- Stacks can be implemented using arrays or linked lists

- You would usually use an array because you can enjoy the benefits of cache locality (items located next to each other in memory). In a linked list they may be stored all over the place, hence making it slower

- Linked lists also require more memory as we need to deal with the pointers

- On the other hand, linked lists are more flexible with many nodes you can add

- Arrays may be static or if they are dynamic force you to double up your memory and create new space for it once you exceed a certain number of elements

- Properties of Stack operations:

    -> pop O(1) ---> remove item from top of the stack
    -> push O(1) ---> add item to top of the stack
    -> peek O(1) ---> look at item at the top of the stack

*/