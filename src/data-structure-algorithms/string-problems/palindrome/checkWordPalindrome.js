function checkWordPalindrome(str) {
    let i = 0, j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

// Outputs:
console.log(checkWordPalindrome(" ")); // true
console.log(checkWordPalindrome("MANA"));   // false
console.log(checkWordPalindrome("mam"));  // true
console.log(checkWordPalindrome("madam"));  // true