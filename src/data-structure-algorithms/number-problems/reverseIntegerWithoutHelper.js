function reverseNumber(number) {
    let rev = 0;
    let n = number;
    if (number < 0) {
        return "Negative Number can never be Palindrome..!";
    }
    if (number === 0) {
        return 0;
    }
    while (n > 0) {
        rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }
    return rev;
}

//Outputs:
console.log(reverseNumber(1234)); //4321
console.log(reverseNumber(0)); // 0
console.log(reverseNumber(-123)); // Negative Number can never be Palindrome..!