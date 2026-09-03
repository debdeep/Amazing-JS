/*
    You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
    Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
 */
function findJewelsInStonesWithoutHelper(jewels, stones) {
    let count = 0;
    if (stones === "" && jewels === "") return count; //base condition in case any of them is missing

    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels[j] === stones[i]) { // without any helper function
                count++;
                break; //important optimization to run the code in almost 0 ms
            }
        }
    }

    return count;
}

//Output:
console.log(findJewelsInStonesWithoutHelper("zZzzzzz", "aAAbbbbzZ"));
console.log(findJewelsInStonesWithoutHelper("zZ", ""));
console.log(findJewelsInStonesWithoutHelper("", "aaapq"));
console.log(findJewelsInStonesWithoutHelper("abc", "CCcDDDD"));