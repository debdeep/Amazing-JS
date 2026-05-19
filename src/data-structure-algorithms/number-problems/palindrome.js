function checkPalindrome(number) {
    let rev = 0;
    let n = number;
    if (number === 0) {
        return "0 is always Palindrome";
    }
    while (n > 0) {
        let rem = n % 10;
        //console.log(`rev before: ${rev}`);
        rev = (10 * rev) + rem;
        //console.log(`rev After: ${rev}\n`);
        n = Math.floor(n / 10);
    }
    if (rev === number) return "Palindrome";
    else return "Not a Palindrome";

}

//outputs:
console.log(checkPalindrome(121)); // Palindrome
console.log(checkPalindrome(121121)); // Palindrome
console.log(checkPalindrome(123456)); // Not a Palindrome
console.log(checkPalindrome(-121)); // Not a Palindrome
console.log(checkPalindrome(0)); // 0 is always Palindrome



