function findCharacterByIndex(inputArr, target, i = 0, result = []) {
    if (!target) return result; //always returns [] in case of no target element to find
    if (i >= inputArr.length - 1) return result; //base case: when i reaches end of an array
    if (inputArr[i].includes(target)) result.push(i);

    return findCharacterByIndex(inputArr, target, i + 1, result); //recursive call
}

//Output:
console.log(findCharacterByIndex(["leet", "code", "match", "India"], "c"));
console.log(findCharacterByIndex(["leet", "code", "match", "India"], ""));
console.log(findCharacterByIndex(["leet", "code", "match", "India"], "e"));
console.log(findCharacterByIndex(["leet", "code&code", "match", "India"], "&"));