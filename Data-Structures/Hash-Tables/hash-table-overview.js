/*

HASH TABLE OVERVIEW:

- Hash tables are one of the most commonly used data structures

- Hash tables are already built into many programming languages (e.g. dictionaries in Python, objects in JavaScript)

- A hash table is basically a way of storing a key-value pair at a particular index in memory

- Hash tables allow you to access values by calling their key through the form hashtablevariablename.key = value. This has the advantage over an array of being able to access a value not only by some index number but rather by a key that holds some significance to the value

----------------------------------------------------------------

HOW ARE THESE KEY-VALUE PAIRS ALLOCATED TO MEMORY?

- The key is passed into a hash function

- This hash function performs some operation on the key, where the result will determine which index in memory this key-value pair is stored. Note that both the key and the value is stored at this index in memory

----------------------------------------------------------------

KEY BIG-O VALUES OF HASH TABLE METHODS:

- Insert: O(1)
- Lookup: O(1) but possible O(n)
- Delete O(1)
- Search O(1)

*/