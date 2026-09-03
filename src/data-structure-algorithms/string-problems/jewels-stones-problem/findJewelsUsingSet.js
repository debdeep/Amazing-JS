//console.log(process.memoryUsage());
function findJewelsUsingSet(jewels, stones) {
    let count = 0;
    let jSet = new Set(jewels);

    for (let i = 0; i < stones.length; i++) {
        if (jSet.has(stones[i])) {
            count++;
        }
    }

    return count;
}

//Output:
console.log(findJewelsUsingSet("zZzzzzz", "aAAbbbbzZ"));
//console.log(process.memoryUsage());  // measuring heap usage after executing the function 
console.log(findJewelsUsingSet("zZ", ""));
console.log(findJewelsUsingSet("", "aaapq"));
console.log(findJewelsUsingSet("abc", "CCcDDDD"));