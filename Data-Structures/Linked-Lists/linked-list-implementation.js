/*

LINKED LIST IMPLEMENTATION (with reverse method)

*/

class Node {

    constructor(value) {

        this.value = value;
        this.next = null;

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

            // Makes the node after new node be what was orginally to the right of the current node
            newNode.next = leftNeighbour.next;

            // Makes the newNode which become right of the current node
            leftNeighbour.next = newNode;

            // Increments the length of the LL
            this.length++;

        }

        return this;

    }

    remove(index) {

        if (index < 0 || index > this.length) {

            return "List Index Out of Range";
        
        } else if (index === 0) {

            this.head = this.head.next;

            this.length--;

            return this;

        }
        
        // Index - 1 because we want the left neighbour
        let leftNeighbour = this.traverseToIndex(index - 1);

        let nodeToDelete = leftNeighbour.next;

        leftNeighbour.next = nodeToDelete.next;

        // If we are deleting the last element, update the tail
        if (index === this.length - 1) {

            this.tail = leftNeighbour;

        }

        this.length--;

        return this;

    }

    // Traverses the LL, prints all node values (mostly for testing)
    printValues() {

        let currentNode = this.head;

        for (let i = 0; i < this.length; i++) {
            
            console.log(currentNode.value);

            currentNode = currentNode.next;
            
        }

    }

    reverseAlternative() {

        let headNodeValue = this.head.value;

        let reversedLinkedList = new LinkedList(headNodeValue);

        let currentNode = this.head.next;

        for (let i = 0; i < this.length - 1; i++) {
            
            reversedLinkedList.prepend(currentNode.value);

            currentNode = currentNode.next;
            
        }

        return reversedLinkedList;

    }

    reverse() {

        if (this.length === 1) {

            return this.head;

        }

        let firstNode = this.head;

        // Makes the original head become the new tail
        this.tail = this.head;

        let secondNode = firstNode.next;

        // As temp contains the third node after the two current ones we compare [1, 2, 3]
        // We need to make sure the 3rd node is not null to continue
        while (secondNode) {

            // Let's say we have [1, 2, 3] as the original
            // temp will store the node containing 3
            let temp = secondNode.next;

            // Adjusts the next pointer of 2 to reference 1
            secondNode.next = firstNode;

            // The node 2 becomes the new first node (which is what 3 will then reference in the next iteration)
            firstNode = secondNode;

            // This will now contain 3 whose next pointer will then reference 2 in the next iteration
            secondNode = temp;

        }

        // Head here still refers to the original head (1)
        // Its next must become null as its the new tail
        this.head.next = null;

        // firstNode would refer to the old tail as secondNode would now refer to null
        // since we are out of the while loop
        this.head = firstNode;

        return this;

    }

}

let myLinkedList = new LinkedList(10);

myLinkedList.append(11);
myLinkedList.append(12);
myLinkedList.append(13);
myLinkedList.append(14);
myLinkedList.append(999);
myLinkedList.remove(5);
myLinkedList.insert(2, 399);

myLinkedList.printValues();