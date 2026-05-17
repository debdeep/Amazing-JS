/*
    Pattern-
    1
    2 2
    3 3 3
    4 4 4 4
    5 5 5 5 5
*/
function printNumberPattern(n) {
    for (i = 0; i < n; i++) {
        let row = "";
        for (j = 0; j <= i; j++) {
            row = row + (i + 1)
        }
        console.log(row);
    }
}

printNumberPattern(5);