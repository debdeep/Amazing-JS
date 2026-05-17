function digitCount(number) {
    if(typeof(number) === 'number') {
        console.log(typeof (number));
        let counter = 0;
        if (number === 0) {
            return 1;
        }
        number = Math.abs(number);
        while (number >0) {
            console.log(`Number is now: ${number} && Counter is: ${counter}`);
            number = Math.floor(number / 10);
            counter++;
        }
        return counter;
    }
    return "Input type should be number only"
}

//outputs:
console.log(digitCount(124567)); // 6
console.log(digitCount(124)); // 3
console.log(digitCount(0)); // 1
console.log(digitCount(-123)); // 123
console.log(digitCount("abc")); // Input type should be number only
