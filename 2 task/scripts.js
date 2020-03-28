'use strict';

let sumOfnumbersFibonschi = (number) => {
    let sum = number;
    let indexOfCurrentElement = 0;
    let indexOfNextElement = 1;
    let array = [1, 2];
    let nextNumber = array[indexOfCurrentElement] + array[indexOfNextElement];

    let ArrayOfFiboachi = (array, indexOfCurrentElement, indexOfNextElement, nextNumber) => {
        nextNumber = array[indexOfCurrentElement] + array[indexOfNextElement];
        if (nextNumber < sum) {
            array.push(nextNumber);
            indexOfCurrentElement++;
            indexOfNextElement++;
            ArrayOfFiboachi(array, indexOfCurrentElement, indexOfNextElement, nextNumber);
        };
        return array;
    };
    return () => {
        let arrayOfNumbersFibbonachi = ArrayOfFiboachi(array, indexOfCurrentElement, indexOfNextElement, nextNumber);

        let sumOfEvenNumbers = arrayOfNumbersFibbonachi
            .filter((elem) => {
                return elem % 2 === 0;
            })
            .reduce((sum, current) => {
                return sum + current;
            }, 0);
        return sumOfEvenNumbers;
    };
};

console.log(sumOfnumbersFibonschi(4000000)());