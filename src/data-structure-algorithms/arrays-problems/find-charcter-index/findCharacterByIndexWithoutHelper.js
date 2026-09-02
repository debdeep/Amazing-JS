function findCharacterByIndexWithoutHelper(arr, target) {
    const result = [];
    if (!target) return result;

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        for (let j = 0; j < word.length; j++) {
            if (word[j] === target) {   // direct character comparison
                result.push(i);
                break; // ✅ stop after first match in this word
            }
        }
    }
    return result;
}

// Outputs
console.log(findCharacterByIndexWithoutHelper(["leet", "code", "match", "India"], "")); // []
console.log(findCharacterByIndexWithoutHelper(["leet", "code", "match", "India"], "c")); // [1,2]
console.log(findCharacterByIndexWithoutHelper(["leet", "code"], "e"));                   // [0,1]
console.log(findCharacterByIndexWithoutHelper(["leet", "code&code", "match", "India"], "&")); // [1]
