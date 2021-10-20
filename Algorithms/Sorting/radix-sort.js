/*

RADIX SORT

- Radix sort is slightly different from the previous sorting algorithms in that it is not comparison based

- This sorting method only works with numbers unlike the other algorithms

- Although its time complexity is O(nk), which seems to be faster than O(nlogn), in practice, it is usually about the same, if not slower

- Radix sort would only be faster than algorithms like quicksort or merge sort when what we are sorting is numbers in a specific range

HOW DOES RADIX SORT WORK:

    - Establish what number system we are working in

    - Create the same number of buckets as the base we are working in (e.g. if we are working in base-10, create 10 buckets)

    - Loop through the array and put each number into the bucket that corresponds with its right-most digit

    - Recreate a new array by taking each number out of its bucket from bottom to top, left-most bucket to right-most bucket

    - Loop through the array again and put each number into the bucket that corresponds with its second right-most digit

    - Recreate a new array by taking each number out of its bucket from bottom to top, left-most bucket to right-most bucket

    - Repeat this process until we are using the left-most digit to choose which bucket to put numbers in

    - The resultant array that is obtained now by taking each number out of its bucket from bottom to top, left-most bucket to right-most bucket, will be sorted

*/