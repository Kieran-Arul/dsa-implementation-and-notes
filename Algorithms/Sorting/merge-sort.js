/*

MERGE SORT IMPLEMENTATION

- Merge sort is an algorithm that recursively splits an array into half until there is only one element left

- It then returns this element, meaning we will return one element from the left portion and one from the right portion when we hit the base case

- Then, we apply a merge function to the left and right portions (which are already sorted) to combine it into one sorted array

- This sorted array will start bubbling up and then merging with the other array that bubbles up

- Eventually we will have on big sorted array

*/

function merge(left, right) {

    let leftIndex = 0;
    let rightIndex = 0;
    let sorted = [];

    while (leftIndex < left.length && rightIndex < right.length) {

        if (left[leftIndex] <= right[rightIndex]) {

            sorted.push(left[leftIndex]);

            leftIndex++;

        } else {

            sorted.push(right[rightIndex]);

            rightIndex++;

        }
        
    }

    sorted = sorted.concat(left.slice(leftIndex));
    sorted = sorted.concat(right.slice(rightIndex));

    return sorted;
    
}

function mergeSort(array) {

    if (array.length === 1) {

        return array;

    }

    let midpoint = (array.length) / 2;

    let leftPortion = mergeSort(array.slice(0, midpoint));
    let rightPortion = mergeSort(array.slice(midpoint));
    
    return merge(leftPortion, rightPortion);

}

const myArr = [19, 15, 162, 82, 92, 15, 12, 10, 99];

console.log(mergeSort(myArr));
