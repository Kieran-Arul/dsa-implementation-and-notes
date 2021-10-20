/*

RECURSION OVERVIEW

- Recursion is not actually an algorithm

- It is more like a concept that is applied in many algorithms

- Recursion is basically the idea of calling a function within itself but on a sub-task of the original input

- Recursion is usually used when you need to solve a big task that is made up of/involves many repetitive sub-tasks - note the distinction between a different task and a sub-task. A sub-task is a subset of a bigger task while a different task is just a different task altogether

WHAT IS STACK OVERFLOW:

- The stack is the place in memory where all our function calls are stored

- If we have a recursive function that calls itself over and over again with no termination clause, then the size of the call stack will grow indefinitely as our function is added to it over and over again

- I.e. none of the functions are getting popped from the call stack

- The stack has a limited capacity and once that is exceeded, stack overflow is said to occur, crashing the program

*/