const kollats = () => {
    let maxcount = 1,
        maxelem;
    for (let i = 13; i<= 999999; i++) {
        let count = 1;
        let j = i;
        while (j > 1) {
            if (j % 2 === 0) {
                j = j / 2;
            } else {
                j = 3 * j + 1;
            }
            count++;
        }
        if (count > maxcount) {
            maxelem = i;
            maxcount = count;
        }
    }
    return maxelem;
};

console.log(kollats());


