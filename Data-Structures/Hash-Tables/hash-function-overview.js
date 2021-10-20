/*

HASH FUNCTIONS OVERVIEW

- Accessing the value that is stored in this location of memory can be done by calling the key of the key-value pair
- What determines the index of memory that a key-value pair is stored at is the hash function
- Essentially, what happens is that the key of the key-value pair is passed into the hash function
- The hash function, based on how it is designed, will spit out some sort of code like h76b5hfyisu829 for example
- The computer will then map this code to an actual address in memory and store the key-value pair there 
- When the key is called, the computer will then return the value that is stored at that address in memory in O(1) time since we are not looping over anything but just directly accessing some index in memory

*/