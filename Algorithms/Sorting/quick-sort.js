/*

QUICK SORT

- The quick sort algorithm is made up of the main algorithm as well as a pivot algorithm

- The purpose of the pivot algorithm is to select a pivot from the input list and then ensure that the pivot is in the correct position

HOW DOES THE ALGORITHM WORK?

- We start off with the input array

- We then pass the input array into the pivot function

- The pivot function will move all numbers bigger than the pivot number to the right of it and all numbers smaller than the pivot number to the left of it

- The result of this is that the pivot will be in the correct position of the array while the numbers to its left and right will remain unsorted

- We then recurse onto the left and right sub-lists applying the pivot algorithm to each of them

- This recursion will continue until the base case is reached (i.e. the input array only contains a single element)

- Then the functions on the call stack will start getting popped and each of the elements will start getting put in their correct positions since they would all have been the pivot at some point, which means we know what position in the array they should be in

- We would then have the sorted list

- Average case: O(nlogn)
- Worst case: O(n^2)

*/
