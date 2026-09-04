function palindromeCheck(s) {
    if (s === " ") return true;
    let str = s.toLowerCase();
    let filteredString = "", rev = "";

    for (let i = 0; i < str.length; i++) {
        if ((str[i].charCodeAt() >= "a".charCodeAt() && str[i].charCodeAt() <= "z".charCodeAt()) ||
            (str[i].charCodeAt() >= "0".charCodeAt() && str[i].charCodeAt() <= "9".charCodeAt())
        ) {
            filteredString = filteredString + str[i];
            rev = str[i] + rev;
        }
    }
    //console.log(rev);
    return filteredString === rev;
}

console.log(palindromeCheck("A man, a plan, a canal: Panama"));
console.log(palindromeCheck(" "));
console.log(palindromeCheck("Man a Man"));