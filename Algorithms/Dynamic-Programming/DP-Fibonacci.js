function fibMaster() {

    let cache = {};

    return function fibJunior(n) {

        if (n in cache) {

            // pass

        } else if (n < 2) {

            return n;

        } else {

            cache[n] = fibJunior(n - 1) + fibJunior(n - 2);

        }

        return cache[n];
        
    };
    
}

let test = fibMaster();

console.log("Closure version", test(10));

/*********************** Class Version: ***********************/

class FibCalculator {

    constructor() {
        
        this.cache = {};
        this.calculations = 0;

    }

    calculateTerm(n) {

        this.calculations++;

        if (n in this.cache) {
            
            // pass

        } else if (n < 2) {

            return n;

        } else {

            this.cache[n] = this.calculateTerm(n - 1) + this.calculateTerm(n - 2);

        }

        return this.cache[n];

    }

}

let classVersion = new FibCalculator();

console.log("Class version", classVersion.calculateTerm(3), classVersion.calculations);