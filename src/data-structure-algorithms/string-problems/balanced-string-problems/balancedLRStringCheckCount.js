//constraint: as left/right character can be only L/R

function balancedString(str) {
    let leftCount = 0, rightCount = 0, balancedStringCount = 0;
    for (let ch of str) {

        if (ch === "L") {
            leftCount++;
        } else {
            rightCount--;
        }
        if (leftCount === rightCount) {
            balancedStringCount++;
            leftCount = 0;
            rightCount = 0;
        }
    }
    return balancedStringCount;
}

//Output:
console.log(balancedString(""));
console.log(balancedString("RLRRLLRLRL"));
console.log(balancedString("signature"));