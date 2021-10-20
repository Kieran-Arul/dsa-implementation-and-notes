/*

STACK IMPLEMENTATION USING ARRAYS

*/

class Node {

    constructor(value) {

        this.value = value;

    }

}

class Stack {

    constructor() {

        this.data = [];

    }

    peek() {

        if (this.isEmpty()) {

            return null;

        }

        return this.data[this.data.length - 1];

    }

    push(value) {

        let newNode = new Node(value);

        this.data.push(newNode);

        return this;

    }

    pop() {

        if (this.isEmpty()) {

            return null;

        }

        let topNode = this.data.pop();

        return topNode;

    }

    isEmpty() {

        if (this.data.length === 0) {

            return true;

        }

        return false;

    }

}

let myStack = new Stack();

myStack.push(5);
myStack.push(10);
myStack.push(15);
myStack.pop();

console.log(myStack);
