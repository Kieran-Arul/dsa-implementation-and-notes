/*

INSERTION SORT IMPLEMENTATION

- Insertion sort is a sorting algorithm that goes through an array and creates a sorted and unsorted portion

- On each loop, it iterates through the unsorted portion and for each element it encounters, it places into the appropriate place in the sorted portion of the array

*/

function insertionSort(array) {

    // Leave the first element as is - this will make up the sorted portion
    // Start looping from second element - this is the initial unsorted portion
    for (let i = 1; i < array.length; i++) {
        
        // Get the current element we want to insert somewhere
        let currentElement = array[i];

        // We now want to loop through the sorted portion to figure out where to insert the current element
        // The sorted portion ends one element to the left of the current element, hence j = i - 1
        let j = i - 1;

        // Loop through the sorted portion as long as we haven't reached the end and we have not found
        // the index where the current element should be inserted
        while (j >= 0 && currentElement < array[j]) {
            
            // Move each element to the right by 1 index to make space for the current element
            array[j + 1] = array[j];

            // Decrement j so we can compare the next element (to the left) in the sorted portion
            // with the current element
            j--;

        }

        // The loop terminates when we are one index to the left of where the current element should be inserted
        // Hence, we need to insert the current element in the (j + 1)th index
        array[j + 1] = currentElement;
        
    }

    return array;
    
}

const myArr = [10, 5, 15, 2, 8, 19, 12];

console.log(insertionSort(myArr));