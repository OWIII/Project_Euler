const sumOfNumber = () => {
    let number = 2**1000;
    let bigNumber = BigInt(number);
    let str = bigNumber + '';
    
    return str.split('').reduce( (accum, elem) => {
        return accum + (+elem);
    }, 0);
    
};

console.log(sumOfNumber());

