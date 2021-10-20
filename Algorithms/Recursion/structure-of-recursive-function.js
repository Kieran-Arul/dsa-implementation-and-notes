/*

STRUCTURE OF A RECURSIVE FUNCTION:

- Every recursive function needs at least one base case - that is a clause that will allow the function to stop adding to the call stack at some point. Once the base case is reached and the function stops recursing downwards (i.e. adding to the call stack), the call stack will then start popping the function calls

- The most recent function calls would be popped first and the first few function calls will be popped last. In other words, whatever value was returned in the base case will start "bubbling/working its way upwards" and being returned to the more recent function calls

- The recursive case is what runs when the base case is not yet achieved. When the recursive case runs, the function continues to call itself on a sub-task and adding these function calls to the call stack

- Note it is important to know the distinction of simply calling the function again recursively and explicitly returning the function

- In the former, whatever value was obtained in the base case does not bubble upwards, while in the latter, it does bubble upwards

*/