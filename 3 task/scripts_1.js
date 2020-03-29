// Очень долгий алгоритм

let bigSimpleDivider = (number) => {
    let count = 0;
    let maxNumber;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
            for (let j = 3; j * j < i; j += 2) {
                if (i % j === 0) {
                    count++;
                }
                if (count > 0) {
                    break;
                }
            }
            if (count === 0) {
                maxNumber = i;
            }
        }
    }
    return maxNumber;
};

console.log(bigSimpleDivider(600851475143));