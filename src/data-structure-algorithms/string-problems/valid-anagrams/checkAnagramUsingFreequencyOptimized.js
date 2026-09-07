function checkAnagramsUsingFrequency(s, t) {
    let f1 = {};

    if (s.length !== t.length) return false; // base case

    for (let ch of s) {
        f1[ch] = (f1[ch] || 0) + 1; // 1st string character freequency generation
    }

    for (let item of t) {
        if (!f1[item]) {
            return false;
        } else {
            f1[item]--;
        }
    }
    return true;
}


// Outputs:
console.log(checkAnagramsUsingFrequency("evil", "vile"));   // true
console.log(checkAnagramsUsingFrequency("hello", "world")); // false
console.log(checkAnagramsUsingFrequency("anagram", "nagaram")); // true
console.log(checkAnagramsUsingFrequency("man", "mana"));    // false
