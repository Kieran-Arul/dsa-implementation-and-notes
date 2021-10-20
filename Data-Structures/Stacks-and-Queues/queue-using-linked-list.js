/*

QUEUE IMPLEMENTATION USING LINKED LIST

*/

class Node {

    constructor(value) {

        this.value = value;
        this.next = null;

    }

}

class Queue {

    constructor() {

        this.first = null;
        this.last = null;
        this.length = 0;

    }

    peek() {

        return this.first;

    }

    enqueue(value) {

        let newNode = new Node(value);

        if (this.length === 0) {

            this.last = newNode;

            this.first = this.last;

        } else {

            this.last.next = newNode;

            this.last = newNode;

        }

        this.length++;

        return this;



    }

    dequeue() {

        if (this.isEmpty()) {

            this.last = null;

            return null;

        }

        let targetNode = this.first;

        this.first = targetNode.next;

        this.length--;

        return targetNode;

    }

    isEmpty() {

        if (this.length === 0) {

            return true;

        }

        return false;

    }

}

let myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.enqueue(15);

let firstDeq = myQueue.dequeue();
let secondDeq = myQueue.dequeue();
let thirdDeq = myQueue.dequeue();

console.log(firstDeq.value);
console.log(secondDeq.value);
console.log(thirdDeq.value);