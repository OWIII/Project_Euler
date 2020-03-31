//Производительность около 5.500 секунд

const pifagor = () => {
    let flag = true;
    let result;
    for (let i = 1; i <= 1000; i++) {
        for (let j = 1; j<= 1000; j++) {
            for (let d = 1; d <= 1000; d++) {
                if (i < j && j < d) {
                    if (i + j + d === 1000 && i ** 2 + j ** 2 === d ** 2) {
                        flag = false;
                        result = i * j * d;
                    }
                }
            }
        }
    }
    return result;
};

console.log(pifagor());