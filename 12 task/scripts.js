// Очень медленный алгоритм, время выполнения около 2 часов

const triangularNumber = () => {
    let flag = true;
    let count = 0;
    let myNumber;
    let maxCount = 0;
    let triangle = 0;
    for (let i = 1; flag; i++) {
        triangle += i;

        for (let i = 1; i <= triangle; i++) {
            if (triangle % i === 0) {
                count++;
            }
        }
        myNumber = triangle;
        if (count > maxCount) {
            maxCount = count;
            if (maxCount > 500) {
                flag = false;
            }
        }
        count = 0;
    }
    return myNumber;
};

console.log(triangularNumber());