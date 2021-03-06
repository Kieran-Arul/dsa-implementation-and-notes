/*

HASH COLLISIONS OVERVIEW:

- Recall that the hash function is responsible for mapping the key in our key-value pair to a special code called a hash
- This hash code is then mapped to an actual memory address that stores the key-value pair
- There are some instances when the hash generated by the hash function is mapped to a memory address that is already occupied
- That is, the memory address that a new key-value pair is trying to be stored at already has a key-value pair stored there
- This is called a hash collision. I.e. when the hash function assigns a memory address that is already occupied to a new key-value pair

HOW TO RESOLVE HASH COLLISIONS:

- Separate Chaining:

    - Each memory address stores a linked list of the key-value pairs that have been assigned there
    - This solution may cause some hash table lookups to be O(n) operations as one must traverse the linked list

- Linear Probing:

    - Each memory address can only store one key-value pair
    - If a collision occurs, we need to assign the colliding key-value pair to another address
    - Let's say we have a new key-value pair (k,v). The hash function generates h(k) = i but A[i] is already occupied
    - Linear probing will then try and assign (k,v) to A[(i+1) mod N], where N is the size of the memory space
    - A[(i+1) mod N] is also occupied, then try and assign (k,v) to A[(i+2) mod N] and so on and so forth until an empty memory address can be found

- Quadratic Probing:

    - Each memory address can only store one key-value pair
    - If a collision occurs, we need to assign the colliding key-value pair to another address
    - Let's say we have a new key-value pair (k,v). The hash function generates h(k) = i but A[i] is already occupied
    - Quadratic probing will then try and assign (k,v) to A[(i + f(j)) mod N] for j = 0, 1, 2... and f(j) = j^2
    - I.e. j will keep incrementing until we find an empty memory address that can store (k,v)
    - Note that N refers to the size of the memory space
    - Quadratic probing may not find an empty memory address even if one exists

- Double Hashing:

    - Each memory address can only store one key-value pair
    - If a collision occurs, we need to assign the colliding key-value pair to another address
    - Let's say we have a new key-value pair (k,v). The hash function generates h(k) = i but A[i] is already occupied
    - We will now use a secondary hash function, that is usually h'(k) = q - (k mod q), where q is a constant and q < N and q is prime, to help find (k,v) an empty memory address
    - Double hasing will then try and assign (k,v) to A[(i + f(j)) mod N] for j = 0, 1, 2... and f(j) = jh'(k)
    - I.e. j will keep incrementing until we find an empty memory address that can store (k,v)
    - Note that N refers to the size of the memory space

*/