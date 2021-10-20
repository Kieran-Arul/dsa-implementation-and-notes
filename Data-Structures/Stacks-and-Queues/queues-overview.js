/*

QUEUES OVERVIEW

- Queues are essentially a First In First Out (FIFO) data structure

- This means that the first piece of data to enter the stack will be the first piece of data to leave the stack

- Queues would be implemented in things such as restaurant apps, or when booking a taxi/concert etc.

- Properties of Queue operations:

    -> enqueue O(1) ---> add item to the back of the queue
    -> dequeue O(1) ---> remove item from the front of the queue
    -> peek O(1) ---> look at item at the front of the queue

- You would almost never use arrays to implement a queue because removing anything but the last item from an array is very inefficient O(n) operation. In queues, a dequeue operation involves removing the first element

- Usually you would use a Linked List to implement a queue as deleting the head of the LL just involves moving some pointers around

*/