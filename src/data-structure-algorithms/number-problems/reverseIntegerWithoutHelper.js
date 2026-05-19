function reverseNumber(number) {
    let nCopy = number; //copy of the original number
    let n = Math.abs(number);
    let rev = 0;

    if (n === 0) {
        return 0;
    }

    while (n > 0) {
        rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }

    return (nCopy < 0) ? -rev : rev;
}

//Outputs:
console.log(reverseNumber(1234)); // 4321
console.log(reverseNumber(121251)); // 152121
console.log(reverseNumber(0)); // 0
console.log(reverseNumber(-123)); //