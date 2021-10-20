/*

QUEUE IMPLEMENTATION USING STACKS

*/

class Node {

    constructor(value) {

        this.value = value;

    }

}

class SpecialQueue {

    constructor() {

        this.first = [];
        this.last = [];

    }

    peek() {

        if (this.last.length > 0) {

            return this.last[0];

        }

        return this.first[this.first.length - 1];

    }

    enqueue(value) {

        let newNode = new Node(value);
        
        // This is a crucial step as we need to make sure the length we put into the
        // for loop is the original length before we start popping otherwise it will update on each iteration
        let length = this.first.length;

        // Does not run if we have not dequeued before
        // If we have, places items into the .last array ordered from first to last
        for (let i = 0; i < length; i++) {
            
            this.last.push(this.first.pop());
            
        }

        // Adds the new item being added to the end of the .last array
        this.last.push(newNode);

        return this;

    }

    dequeue() {

        // This is a crucial step as we need to make sure the length we put into the
        // for loop is the original length before we start popping otherwise it will update on each iteration
        let length = this.last.length;

        // Places items into the .first array ordered from last to first
        for (let i = 0; i < length; i++) {
            
            this.first.push(this.last.pop());
            
        }

        // As final item in .first array is the earliest item that was enqueued
        return this.first.pop();

    }

}

let mySpecialQueue = new SpecialQueue();

mySpecialQueue.enqueue(333);
mySpecialQueue.enqueue(555);
mySpecialQueue.enqueue(999);

console.log(mySpecialQueue.dequeue());
console.log(mySpecialQueue.dequeue());
console.log(mySpecialQueue.dequeue());
