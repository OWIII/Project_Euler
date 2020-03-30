const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let flag = false;

const dividerEveryElement = (array) => {
    let i = 20;
    while (!flag) {
        flag = array.every(elem => {
                return i % elem === 0
        });
        
        if (!flag) {
            i++;
        } else {
            return i;
        };
    };
};

console.log(dividerEveryElement(array));