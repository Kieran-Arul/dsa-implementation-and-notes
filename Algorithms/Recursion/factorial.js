/*

FACTORIAL RECURSION

*/

let recursiveFactorial = number => {

    if (number === 1) {

        return number;

    }

    return number * recursiveFactorial(number - 1);

};

let iterativeFactorial = number => {

    let answer = 1;

    for (let i = 2; i <= number; i++) {
        
        answer *= i;
        
    }

    return answer;

};

console.log(recursiveFactorial(1));
console.log(iterativeFactorial(1));
