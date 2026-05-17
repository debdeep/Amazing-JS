/*
    Pattern:
    1
    10
    101
    1010
    10101
 */
function binaryNumberPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "", toggle = 1;
        for (let j = 0; j < i + 1; j++) {
            row = row + toggle;
            if (toggle == 1)
                toggle = 0;
            else
                toggle = 1;
        }
        console.log(row);
    }

}

binaryNumberPattern(5);