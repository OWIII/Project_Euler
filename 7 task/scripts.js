const simpleNumber = () => {
    let myNumber;
    let count = 4;
    let ease = true;
    while (count !== 10001) {
        for (let i = 8; count !== 10001; i++) {
            for (let j = 2; j < i; j++) {
                 if ((i % j === 0)) {
                    ease = false;
                    break;
                } else {
                    ease = true;
                }
            }
            if (ease) {
                myNumber = i;
                count++
            }
        }
    }
    
    return myNumber;
}

console.log(simpleNumber());