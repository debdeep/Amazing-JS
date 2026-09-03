/*
    You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
    Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
 */
function findJewelsInStones(jewels, stones) {
    let count = 0;
    if (stones === "" && jewels === "") return count; //base condition in case any of them is missing

    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) { //using helper function includes()
            count++;
        }
    }

    return count;
}

console.log(findJewelsInStones("aA", "aAAbbbb"));