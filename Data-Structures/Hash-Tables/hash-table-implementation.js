/*

HASH TABLE IMPLEMENTATION

*/

// Specifies a hash table data structure
class HashTable {

    // Is run every time we create an instance of a hash table
    // size argument specifies how many buckets our "hash table" will have
    // Hash table is based on an array
    constructor(size) {

        this.data = new Array(size);

    }

    // This is our hash function
    // The _ tells other developers this is meant to be a private method (only used within the class)
    // Should never be called by an instance of the class. Only called by other class methods
    _hash(key) {

        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            
            // Computes what bucket to put a certain key in
            // Current number + integer between 0 and 65535 * index
            // Then get the remainder when that number is divided by the size of the hash table
            // key.charCodeAt(i) is the 16-bit integer that corresponds to the utf-16 code point 
            // of the character at the index i --> that's why its 0 to 65535 (max 16-bit number)
            // % ensures that the hash number is always between 0 and the size of the hash table
            hash = (hash + key.charCodeAt(i) * i) % this.data.length

        }

        return hash;

    }

    // This method will store the key value pair at a specific bucket in the hash table
    set(key, value) {

        // Obtains the bucket that this key value pair should go into
        let bucket = this._hash(key);
        
        // Checks that there is nothing already in that bucket (i.e. no hash collision)
        // If not, add an array in that bucket
        // The array is to handle collisions so that we can put multiple key-value pairs in the same bucket
        // I.e. each bucket will have a list of lists
        // Its a little bit like a linked list where each bucket can have multiple key-value pairs within
        if (!this.data[bucket]) {
            
            this.data[bucket] = [];

        }

        // Adds the key-value pair to that array in the bucket
        // If there is a collision, the outer array for that bucket will already exist
        // The colliding key-value pair will just be added as another array within that outer array
        this.data[bucket].push([key, value]);

        return this.data;

    }

    get(key) {

        let bucket = this._hash(key);
            
            // Checks if the bucket contains any key value pairs
            if (this.data[bucket]) {
                
                // Cannot use forEach as the return this.data[bucket][i][1] would not be in a loop
                // It would be in a callback function which would not stop
                // Refer to MDN docs of forEach if this does not make sense
                // Or try implementing this with forEach and see what happens

                // Loops over each k-v pair
                for (let i = 0; i < this.data[bucket].length; i++) {

                    if (this.data[bucket][i][0] === key) {

                        return this.data[bucket][i][1]

                    }

                }

            }

            // If the key does not exist in the hash table
            return undefined

    }

    keys() {

        // Array to store all keys
        let hashTableKeys = [];

        // Gets entire hash table
        let currentHashTable = this.data;

        // Iterates over each bucket
        currentHashTable.forEach(bucket => {

            // If the current bucket is not empty
            if (bucket) {

                // Iterate over each list (kv pair) in the bucket
                bucket.forEach(kvPair => {

                    // Push the first element of the kv pair (i.e. the key) into the list
                    hashTableKeys.push(kvPair[0])
    
                });

            }

        });

        // Return list of keys
        return hashTableKeys;

    }

}

let myHashTable = new HashTable(50);

myHashTable.set("grapes", 10000);
myHashTable.set("apples", 300);
myHashTable.set("pineapples", 500);

console.log(myHashTable.get("grapes"));
console.log(myHashTable.keys())