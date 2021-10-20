/*

DOUBLY LINKED LIST IMPLEMENTATION

*/

class Node {

    constructor(value) {

        this.value = value;
        this.next = null;
        this.prev = null;

    }

}

class LinkedList {

    constructor(headValue) {

        // Initialises the first node
        this.head = new Node(headValue);

        // The last node is also the first node as there is only one node when the LL is initialised
        this.tail = this.head;

        // Length of the Linked List at initialisation is 1
        this.length = 1;

    }

    traverseToIndex(index) {

        // Starts at beginning of LL
        let currentNode = this.head;

        // Traverses list until we are at the node we want
        for (let i = 0; i < index; i++) {
            
            currentNode = currentNode.next;

        }

        // Return the desired node
        return currentNode;

    }

    // Add node to end of LL
    append(newValue) {

        let newNode = new Node(newValue);

        // Append newNode after the old tail
        this.tail.next = newNode;

        // Ensure the newNode's previous pointer references the old tail
        newNode.prev = this.tail;

        // Make the new tail the new node that has just been appended
        this.tail = newNode;

        // Increment the length of the linked list
        this.length++;

        // Returns our updated linked list
        return this;

    }

    // Add node to beginning of LL
    prepend(newValue) {

        let newNode = new Node(newValue);

        // Next node after newNode is the old head
        newNode.next = this.head;

        this.head.prev = newNode;

        // New head is newNode
        this.head = newNode;

        this.length++;

        return this;

    }

    insert(index, value) {

        if (index < 0 || index > this.length) {

            return "List Index Out of Range";
        
        // I.e. user actually wants to prepend
        } else if (index === 0) {

            return this.prepend(value);
        
        // I.e. user actually wants to append
        } else if (index === this.length) {

            return this.append(value);

        } else {

            let newNode = new Node(value);

            // Index - 1 because we want the left neighbour
            let leftNeighbour = this.traverseToIndex(index - 1);

            // newNode --> newNode.next (originally leftNeighbour --> newNode.next)
            newNode.next = leftNeighbour.next;
            
            // newNode <-- newNode.next
            newNode.next.prev = newNode;

            // leftNeighbour --> newNode
            leftNeighbour.next = newNode;

            // leftNeighbour <-- newNode
            newNode.prev = leftNeighbour;

            // Increments the length of the LL
            this.length++;

        }

        return this;

    }

    remove(index) {

        if (index < 0 || index > this.length) {

            return "List Index Out of Range";
        
        // If we want to delete the first element (current head)
        } else if (index === 0) {

            // The node right of the old head becomes the new head
            this.head = this.head.next;

            // The new head's previous pointer is updated to null
            this.head.prev = null;

        // If the node to delete is the current tail
        } else if (index === this.length - 1) {

            let leftNeighbour = this.traverseToIndex(index - 1);

            // leftNeighbour --> nodeToDelete (tail)
            let nodeToDelete = leftNeighbour.next;

            // Sets leftNeighbour --> null
            leftNeighbour.next = nodeToDelete.next;

            // Makes the left neighbour the new tail
            this.tail = leftNeighbour;

        // If the node to delete is neither the head nor the tail
        } else {

            let leftNeighbour = this.traverseToIndex(index - 1);

            // leftNeighbour --> nodeToDelete
            let nodeToDelete = leftNeighbour.next;

            // leftNeighbour --> nodeToDelete --> nodeToDelete.next BECOMES leftNeighbour --> nodeToDelete.next
            leftNeighbour.next = nodeToDelete.next;

            // leftNeighbour <-- nodeToDelete.next
            nodeToDelete.next.prev = leftNeighbour;

        }

        this.length--;

        return this;
        
    }

    // Traverses the LL and prints values from head to tail
    printValues() {

        let currentNode = this.head;

        for (let i = 0; i < this.length; i++) {
            
            console.log(currentNode.value);

            currentNode = currentNode.next;
            
        }

    }

    // Traverses the LL and prints values from tail to head
    printValuesReverse() {

        let currentNode = this.tail;

        for (let i = 0; i < this.length; i++) {
            
            console.log(currentNode.value);

            currentNode = currentNode.prev;
            
        }

    }

}

// Testing

let myLinkedList = new LinkedList(10);

myLinkedList.append(11);
myLinkedList.append(12);
myLinkedList.append(13);
myLinkedList.append(14);
myLinkedList.append(999);
myLinkedList.remove(5);
myLinkedList.remove(0);

console.log("Values from Head to Tail");
myLinkedList.printValues();

console.log("Values from Tail to Head");
myLinkedList.printValuesReverse();
