//constraint: as left/right character can be only L/R & 'str' is a balanced string

function balancedString(str) {
    let temp = 0, balancedStringCount = 0;
    for (let ch of str) {
        if (ch === "L") {
            temp++;
        } else {
            temp--;
        }
        if (temp === 0) {
            balancedStringCount++;
        }
    }
    return balancedStringCount;
}

//Output:
console.log(balancedString(""));
console.log(balancedString("RLRRLLRLRL"));
console.log(balancedString("signature"));