/*

FIBONACCI RECURSION

*/

function iterativeFibbonacci(number) {
    
    let sequenceArray = [0, 1];

    for (let i = 2; i < number; i++) {
        
        let nextValue = sequenceArray[i - 1] + sequenceArray[i - 2];
        sequenceArray.push(nextValue);

    }

    return sequenceArray[number - 1];

}

function recursiveFibbonacci(number) {

    if (number === 1) {

        return 0;

    } else if (number === 2 || number === 3) {

        return 1;

    }

    return recursiveFibbonacci(number - 1) + recursiveFibbonacci(number - 2);
    
}

console.log(iterativeFibbonacci(7));
console.log(recursiveFibbonacci(7));