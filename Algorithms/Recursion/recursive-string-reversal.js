/*

RECURSION STRING REVERSAL:

*/

function reverseString(myString) {

    let stringLength = myString.length;

    if (stringLength === 1) {

        return myString;

    }

    return reverseString(myString.slice(1, stringLength)) + myString[0];
    
}

console.log(reverseString("kieran"));