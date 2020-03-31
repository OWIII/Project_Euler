const sumOfsimpleNumber = (num) => {
    let array = [],
    result = 0;

    for (let i = 2; i < num; i++) {
        if (!array[i]) {
            result+=i;
        }
        for (let j = 2 * i; j < num; j = j + i) {
            array[j] = true;
        }
    }
    return result;
}

console.log(sumOfsimpleNumber(2000000));


