/*

FIRST RECURRING CHARACTER

- The focus of this file will be creating an algorithm based on a hash table that allows us to determine the first recurring character of an array of characters

- E.g. [2, 4, 5, 6, 2, 4, 3, 9] should return 2
- [2, 3, 4, 5, 6, 7] should return undefined

*/

let firstRecurringCharacter = arr => {

    let occurrenceHashTable = {};

    for (let i = 0; i < arr.length; i++) {
        
        // If collision would occur
        if (arr[i] in occurrenceHashTable) {

            return arr[i];

        // If there would be collision, add the element to the hash table
        } else {

            occurrenceHashTable[arr[i]] = "hello";

        }
        
    }

    // If we go through the whole loop and do not find a recurring character
    return "undefined";

};

let myArray = [2, 4, 5, 5, 6, 2, 3, 9];

console.log(firstRecurringCharacter(myArray));
