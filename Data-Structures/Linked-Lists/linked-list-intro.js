/*

LINKED LISTS INTRODUCTION

Why Linked Lists?

    - Static arrays only have a pre-determined amount of memory allocated to it (e.g. 10 elements)

    - Dynamic arrays (and static arrays) also double themselves up every once in a while to create more memory to store more elements has a performance implication of O(n)

    - Arrays are also inefficient with insert/delete operations

    - Hash Tables are unfortunately unordered

    - Linked Lists are a data structure that solves some of these downsides (but has downsides of its own)

    - For instance:

        -> Insertion and deletion from a linked list happens in O(1) time because you just reset some pointers (actually it takes O(n) for both insertion and deletion if you include traversal time as you need to traverse the linked list to get to the node where you want to perform the insertion/deletion first)

        -> You can sort your data in contrast to a hash table as each node points to another one

What are Linked Lists?

    - Linked Lists are a data structure which involves a chain of nodes connected to each other through the use of pointers

    - A singly linked list is only connected in one direction while a doubly linked list is connected in both directions

    - A node is essentially an entity made up of two parts

        -> The data stored inside
        -> A "pointer" that points to the data of the next node
        -> A "pointer" that points to the data of the previous node (in a doubly linked list)

    - The first node in the chain is called the "head"

    - The last node in the chain is called the "tail". The tail node's (next) pointer points to null. This signals the termination of the linked list

What are Pointers?

    - Pointers is simply a reference to another place in memory (where something is stored)

    - Example below

*/

// Some place in memory stores {a: true}
// This place in memory can be accessed by the variable obj1 
// (i.e. the variable obj1 stores the memory address of where {a: true} is stored)
const obj1 = {a: true};

// This is a pointer because the variable obj2 "points" to whatever is stored at obj1's address in memory
const obj2 = obj1;

console.log(obj1);
console.log(obj2);

/*

GARBAGE COLLECTION AND POINTERS:

- The command delete obj1; still allows console.log(obj2); to work normally because JS is a garbage collected language
- Garbage collection is where the language auto removes from memory things that are no longer referenced in the program
- In this case, obj2 is still acting as a pointer to whatever is stored at obj1's memory address, hence {a: true} is not deleted and can be found by doing console.log(obj2);

*/
