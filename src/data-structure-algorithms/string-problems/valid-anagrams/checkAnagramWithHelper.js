/*
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    Constraints: str1 and str2 consist of lowercase English letters.
*/
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    return normalize(str1) === normalize(str2);
}

function normalize(inputString) {
    return inputString
        .toLowerCase()
        .replace(/[^a-z]/g, "")   // only lowercase letters
        .split("")
        .sort()
        .join("");
}

// Outputs:
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("evil", "vile"));       // true
console.log(isAnagram("hello", "world"));     // false
console.log(isAnagram("man", "mana"));        // false