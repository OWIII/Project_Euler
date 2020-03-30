const difference = () => {
    let i = 1;
    let array = [];
    while ( i <= 100) {
        array.push(i);
        i++;
    }
    let squareSumOfAll = array.reduce( (accum, elem) => {
        return accum + elem;
    }, 0) ** 2;
    let sumOfSquare = array.reduce( (accum, elem) => {
        return accum + elem ** 2;
    })
    return Math.abs(sumOfSquare - squareSumOfAll);
};

console.log(difference());