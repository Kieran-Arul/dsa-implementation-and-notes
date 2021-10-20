/*

DYNAMIC PROGRAMMING OVERVIEW

- Dynamic Programming is simply an optimisation technique for certain types of problems (i.e. makes solving those types of problems significantly more efficient)

- The main type of problem whose ideal solution involves dynamic programming is:

    - Main problem can be broken down into many sub-problems that need to be solved (recursive)

    - Sub-problems tend to be repeated (i.e. computed more than once)

    - E.g. a recursive implementation of the fibonacci sequence involves solving one sub-problem multiple times. To see this, draw the recursion tree for fib(5) for example and you will notice that fib(3), fib(2) and fib(1) are solved more than once

- Obviously it is unecessary and inefficient for sub-problems to be computed more than once because it costs both memory and time

- Dynamic programming circumvents this because it is essentially caching --> saving solutions to sub-problems so that if a sub-problem needs to be solved again, its answer can simply be taken from the cache (memoized) rather than computed again

*/

// Example of Dynamic Programming (Memoization)

// Function to add 50 to an input number
function addTo50() {

    // Put inside here to eliminate the need for it to be a global variable
    // Note this could also be done with OOP as part of the constructor function
    let cache = {};

    // When the outer function is called the first time, this inner function is stored in the variable
    // This inner function is then called with the variable 
    // and updates the cache that is also in the scope of the variable when the outer function was called
    return function (x) {

        if (!(x in cache)) {

            console.log("A very long time later...");

            cache[x] = x + 50;

        }

        return cache[x];
        
    };

}

// Empty cache initialised here
let test = addTo50();

// Runs a "very long time later"
// Cache updated
console.log(test(20));

// Immediately returned as 20 is in the cache already
console.log(test(20));