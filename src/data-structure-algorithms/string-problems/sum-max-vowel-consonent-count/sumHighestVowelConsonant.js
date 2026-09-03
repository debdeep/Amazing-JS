function sumHighestVowelConsonant(s) {
    const vSet = new Set(["a", "e", "i", "o", "u"]);
    const frequency = {};
    let vCount = 0, cCount = 0;

    for (let item of s) {
        frequency[item] = (frequency[item] || 0) + 1;
    }

    for (let ch in frequency) {
        if (vSet.has(ch)) {
            vCount = Math.max(vCount, frequency[ch]);
        } else {
            cCount = Math.max(cCount, frequency[ch]);
        }
    }
    return vCount + cCount
}

//Output:
console.log(sumHighestVowelConsonant("debajo"));
console.log(sumHighestVowelConsonant("success"));