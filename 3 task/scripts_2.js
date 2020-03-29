// Оптимальный алгоритм

let bigSimpleDivider = (number) => {
    for (let d = 1; d < number / 2; d++) {
        if (number % d === 0) {
            let i = number / d;
            if (i === 5 || i === 2)
                return i;
            if (i % 10 === 1 || i % 10 === 3 || i % 10 === 7 || i % 10 === 9) {
                let easy = true;
                for (let j = 3; j ** 2 <= i; j++) {
                    easy = i % j !== 0;
                    if (!easy) break;
                }
                if (easy) return i;
            }
        }
    }
};

console.log(bigSimpleDivider(600851475143));