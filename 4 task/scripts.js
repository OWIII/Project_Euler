const palindrom = (number) => {
    let arrayOfPalindroms =[];
    for (let i = number; i >= 100; i--) {
        for (let j = number; j >= 100; j--) {
            let result = i * j;
            let str = String(result);
            let isPalindrom = str.split('').reverse().join('') === str;
            if (isPalindrom) {
                arrayOfPalindroms.push(result);
            }
        }
    }
    return Math.max.apply(null, arrayOfPalindroms);
};

console.log(palindrom(999));