function stringPalindromeWithoutExtraSpace(s) {
    let i = 0, j = s.length - 1;
    while (i < j) {
        // Skip non-alphanumeric on the left
        if (!s[i].match(/[a-z0-9]/i)) {
            ++i;
            continue;
        }
        // Skip non-alphanumeric on the right 
        else if (!s[j].match(/[a-z0-9]/i)) {
            --j;
            continue;
        }
        // Compare normalized characters
        else if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

//Output:
console.log(stringPalindromeWithoutExtraSpace("A man, a plan, a canal: Panama"));
console.log(stringPalindromeWithoutExtraSpace(" "));
console.log(stringPalindromeWithoutExtraSpace("Man a Man"));