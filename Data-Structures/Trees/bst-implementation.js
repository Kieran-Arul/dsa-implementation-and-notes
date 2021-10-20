/*

BINARY SEARCH TREE IMPLEMENTATION

- Both iterative and recursive methods are shown (except for the remove function as I haven't figured that out yet)

*/

class Node {

    constructor(value) {

        this.value = value;
        this.left = null;
        this.right = null;

    }

}

class BinarySearchTree {

    constructor() {

        this.root = null;

    }

    lookup(value) {

        let currentNode = this.root;

        while (currentNode) {

            if (value < currentNode.value) {

                currentNode = currentNode.left;
                
            } else if (value > currentNode.value) {

                currentNode = currentNode.right;

            } else if (value === currentNode.value) {

                return true;

            }
            
        }

        return false;

    }

    recursiveLookup(node, value) {

        if (!node) {

            return false;

        } else if (node.value === value) {

            return true;

        } else if (value < node.value) {

            return this.recursiveLookup(node.left, value);

        } else if (value > node.value) {

            return this.recursiveLookup(node.right, value);

        }

    }

    insert(value) {

        let newNode = new Node(value);

        if (!this.root) {

            this.root = newNode;

            return this;

        }

        if (this.lookup(value)) {

            return this;

        }

        let currentNode = this.root;

        let newNodeInserted = false;

        while (!newNodeInserted) {

            if (newNode.value < currentNode.value) {

                let nextNode = currentNode.left;

                if (!nextNode) {

                    currentNode.left = newNode;
                    newNodeInserted = true;

                } else {

                    currentNode = nextNode;

                }

            } else if (newNode.value > currentNode.value) {

                let nextNode = currentNode.right;

                if (!nextNode) {

                    currentNode.right = newNode;
                    newNodeInserted = true;

                } else {

                    currentNode = nextNode;

                }

            }

        }

        return this;

    }

    recursiveInsert(node, value) {

        let newNode = new Node(value);

        if (!this.root) {

            this.root = newNode;

        } else if (value < node.value) {

            if (!node.left) {

                node.left = newNode;

            } else {

                this.recursiveInsert(node.left, value);

            }

        } else if (value > node.value) {

            if (!node.right) {

                node.right = newNode;

            } else {

                this.recursiveInsert(node.right, value);

            }

        }

        return this;

    }

    remove(value) {

        if (!this.lookup(value)) {

            return "Node does not exist";

        }

        let currentNode = this.root;
        let parentNode = 0;
        let nodeToDelete = 0;
        let direction = 0;
        let targetNodeFound = false;
        let isRoot = false;

        if (this.root.value === value) {

            isRoot = true;

        }

        // Find the node to delete and establish how we got there
        while (!targetNodeFound) {

            // If the node to delete is the root
            if (currentNode.value === value) {

                nodeToDelete = currentNode;

                targetNodeFound = true;
            
            // If the value to delete is smaller than the current node
            // and the left of the current node is also not the target node
            // Then we traverse to the left
            } else if (value < currentNode.value && value !== currentNode.left.value) {

                currentNode = currentNode.left;

            // If the value to delete is bigger than the current node
            // and the right of the current node is also not the target node
            // Then we traverse to the right
            } else if (value > currentNode.value && value !== currentNode.right.value) {

                currentNode = currentNode.right;

            // If the node to the left of the current node is the target node
            } else if (currentNode.left.value === value) {

                parentNode = currentNode;
                nodeToDelete = parentNode.left;
                direction = "left";

                targetNodeFound = true;
            
            // If the node to the right of the current node is the target node
            } else if (currentNode.right.value === value) {

                parentNode = currentNode;
                nodeToDelete = parentNode.right;
                direction = "right";

                targetNodeFound = true;

            }

        }

        // CASE 2: NODE TO DELETE IS A LEAF
        if (!nodeToDelete.left && !nodeToDelete.right) {

            if (direction === "left") {

                parentNode.left = null;

            } else {

                parentNode.right = null;

            }

            if (isRoot) {

                this.root = null;

            }
        
        // CASE 2: NODE TO DELETE HAS 1 CHILD
        } else if (!nodeToDelete.left || !nodeToDelete.right) {

            // Move the left child of the deleted node to become left child of parent node
            if (nodeToDelete.left && direction === "left") {

                parentNode.left = nodeToDelete.left;
            
            // Move the left child of the deleted node to become right child of parent node
            } else if (nodeToDelete.left && direction === "right") {

                parentNode.right = nodeToDelete.left;
            
            // Move the right child of the deleted node to become left child of parent node
            } else if (nodeToDelete.right && direction === "left") {

                parentNode.left = nodeToDelete.right;

            // Move the right child of the deleted node to become right child of parent node
            } else if (nodeToDelete.right && direction === "right") {

                parentNode.right = nodeToDelete.right;

            } else if (isRoot && this.root.left) {

                this.root = nodeToDelete.left;

            } else if (isRoot && this.root.right) {

                this.root = nodeToDelete.right;

            }

        // CASE 3: NODE TO DELETE HAS 2 CHILDREN
        } else {

            // Go right once so that later we can find the min node in the right sub-tree
            let successorNodeParent = nodeToDelete.right;
            let successorNode = successorNodeParent.left;

            let successorFound = false;

            while (!successorFound) {

                // If there is no left portion of the right sub-tree
                if (!successorNode) {

                    // Then the successor's parent is the min node in the right sub-tree
                    // Copy its value to the node we want to delete
                    nodeToDelete.value = successorNodeParent.value;

                    // Get rid of the leaf
                    nodeToDelete.right = null;

                    // Terminate the loop
                    successorFound = true;
                
                // If there is a left portion of the right sub-tree
                // And once we find the min node in the right sub-tree
                } else if (!successorNode.left) {

                    // Replace the value of node to delete with the value of the min node in right sub-tree
                    nodeToDelete.value = successorNode.value;

                    // Delete the leaf whose value we took
                    successorNodeParent.left = null;

                    // Terminate the loop
                    successorFound = true;

                // If there is a left portion of the right sub-tree but we haven't found the min node
                } else {

                    // Go left until we find a leaf, which is the min node in right sub-tree
                    successorNodeParent = successorNodeParent.left;
                    successorNode = successorNodeParent.left;

                }

            }

            if (isRoot) {

                this.root = nodeToDelete;

            }

        }

    }

}

let tree = new BinarySearchTree();

tree.recursiveInsert(tree.root, 9);
tree.recursiveInsert(tree.root, 4);
tree.recursiveInsert(tree.root, 6);
tree.recursiveInsert(tree.root, 20);
tree.recursiveInsert(tree.root, 170);
tree.recursiveInsert(tree.root, 15);
tree.recursiveInsert(tree.root, 1);
tree.remove(9);

console.log(tree.root.value);