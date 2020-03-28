'use strict';

let sumOfNumber = (number) => {
    let result = 0;
    for (let i = 1; i < number; i++) {
         i % 3 === 0 || i % 5 === 0 ? result += i : result;
    }
    return result;
};

console.log(sumOfNumber(1000));



