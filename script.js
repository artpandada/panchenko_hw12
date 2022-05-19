'use strict';


const sum = (() => {

    let result = 0;


    return (a) => {

        result += a;

        return result;
    }
})();






function createCounter(a, b) {

    let count = a;

    const increase = function () {
        if (count !== a) {
            for (let i = 1; i < b; i++) {
                count++;
            }
        }

        return count++;
    }

    increase.del = function () {
        return count = a;
    }
    return increase;
}


const counter = createCounter(1, 2);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter.del());
console.log(counter());
console.log(counter());



