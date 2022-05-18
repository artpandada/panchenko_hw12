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

    this.delete = function () {
        return count = a;
    }


    this.increase = function () {

        if (count !== a) {

            for (let i = 1; i < b; i++) {
                count++;
            }

        }

        return count++;

    }

}


const counter = new createCounter(1, 2);

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.delete());
console.log(counter.increase());
console.log(counter.increase());




