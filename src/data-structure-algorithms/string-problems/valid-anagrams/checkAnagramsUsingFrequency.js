function checkAnagramsUsingFrequency(s, t) {
    let f1 = {}, f2 = {};

    if (s.length !== t.length) return false; // base case

    for (let ch of s) {
        f1[ch] = (f1[ch] || 0) + 1; // 1st string character freequency generation
    }
    for (let ch of t) {
        f2[ch] = (f2[ch] || 0) + 1; // 2nd string character freequency generation
    }

    return isObjectEquals(f1, f2);
}

function isObjectEquals(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

// Outputs:
console.log(checkAnagramsUsingFrequency("evil", "vile"));   // true
console.log(checkAnagramsUsingFrequency("hello", "world")); // false
console.log(checkAnagramsUsingFrequency("anagram", "nagaram")); // true
console.log(checkAnagramsUsingFrequency("man", "mana"));    // false
