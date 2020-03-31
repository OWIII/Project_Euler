// Производительность около 0.300 секунд

const pifagor = () => {
    let flag = true;
    let obj = {};
    debugger;
    for (let b = 1; b <= 1000; b++) {
        for (let c = 1; c <= 1000; c++) {
            if (b < c && c === ((b ** 2 - 1000 * b + 500000) / (1000 - b))) {
                flag = false;
                obj.b = b;
                obj.c = c;
                obj.a = 1000 - obj.b - obj.c;
                return obj.a * obj.b * obj.c;
            }
        }
    }
};

console.log(pifagor());