/*

STACK IMPLEMENTATION USING LINKED LISTS

*/

class Node {

    constructor(value) {

        this.value = value;
        this.next = null;

    }

}

class Stack {

    constructor() {

        this.top = null;
        this.bottom = null;
        this.length = 0;

    }

    peek() {

        if (this.isEmpty()) {

            return null;

        }

        return this.top;

    }

    push(value) {

        let newNode = new Node(value);

        newNode.next = this.top;

        this.top = newNode;

        if (this.length === 0) {

            this.bottom = this.top;

        }

        this.length++;

        return this;

    }

    pop() {

        let topNode = this.top;

        this.top = this.top.next;

        this.length--;

        if (this.isEmpty()) {

            this.bottom = null;

        }

        return topNode;

    }

    isEmpty() {

        if (this.length === 0) {

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
myStack.pop();
myStack.pop();

console.log(myStack.top);
console.log(myStack.bottom);
