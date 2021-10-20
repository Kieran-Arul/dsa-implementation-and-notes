/*

BUBBLE SORT IMPLEMENTATION

- Bubble sort is a sorting algorithm that compares neighbouring elements

- If the left element is greater than the right, then they are swapped

- This has the effect of "bubbling" the biggest element in the input up to the end of the array

*/

function bubbleSort(arr) {
    
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        
        for (let j = 0; j < length; j++) {
            
            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
            
        }
        
    }

    return arr;

}

let myArr = [10, 9, 8, 7, 6, 5, 4];

console.log(bubbleSort(myArr));