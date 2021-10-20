/*

SELECTION SORT IMPLEMENTATION

- Selection sort is a sorting algorithm that loops through an array and identifies the smallest element

- Once the smallest element is identified, it is placed at the end of the sorted part of the array

*/

function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {
        
        // Get the initial smallest element and its index
        // Will be updated in the course of the nested for loop
        let smallestElement = array[i];
        let smallestElementIndex = i;

        // Start comparing elements starting one element to the right of the initial smallest element
        for (let j = i + 1; j < array.length; j++) {
            
            // If we find an element smaller than what we know the smallest element to be thus far
            // Update the smallest element and record its index so it can be swapped later
            if (smallestElement > array[j]) {

                smallestElement = array[j];
                smallestElementIndex = j;

            }
          
        }

        // Swap the smallest element with whatever was at the start of the unsorted portion of the array
        let temp = array[i];
        array[i] = smallestElement;
        array[smallestElementIndex] = temp;
        
    }
    
    return array;

}

const myArr = [10, 9, 8, 7, 6];

console.log(selectionSort(myArr));