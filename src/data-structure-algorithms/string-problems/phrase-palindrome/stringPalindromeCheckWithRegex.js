/*
    A phrase is a Palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
    it reads the same forward and backward. Alphanumeric characters include letters and numbers.
    Given a string s, return true if it is a palindrome, or false otherwise.
    Constraints: s consists only of printable ASCII characters.
*/
function phasePalindromeCheck(str) {
    if (str === " ") return true;

    let convertedString = str.trim().toLowerCase();

    const filteredString = convertedString.split("").filter(function (char) {
        return /[a-z0-9]/.test(char);
    }).join("");

    //console.log(filteredString);
    let i = 0, j = filteredString.length - 1; //2 pointers added to check values from start with end towards mid
    while (i < j) {
        if (filteredString[i] !== filteredString[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

//Output:
console.log(phasePalindromeCheck("A man, a plan, a canal: Panama"));
console.log(phasePalindromeCheck(" "));