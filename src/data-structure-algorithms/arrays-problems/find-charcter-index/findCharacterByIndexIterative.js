function findByIndexCharacter(inputArr, target) {
    let i = 0, result = [];
    if (!target) {
        return result;
    }
    while (i <= inputArr.length - 1) {
        if (inputArr[i].includes(target)) {
            result.push(i);
        }
        i++;
    }
    return result;
}

//Output:
console.log(findByIndexCharacter(["leet", "code", "match", "India"], "a"));
console.log(findByIndexCharacter(["leet", "code", "match", "India"], ""));
console.log(findByIndexCharacter(["leet", "code", "match", "India"], "ee"));
console.log(findByIndexCharacter(["leet", "code", "match", "India"], "&"));