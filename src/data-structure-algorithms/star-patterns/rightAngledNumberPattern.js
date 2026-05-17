/*
    Pattern-
    1
    12
    123
    1234
    12345
*/
function printNumberPattern(n) {
    for (i = 0; i < n; i++) {
        let row = "";
        for (j =0; j <= i; j++) {
            row = row + (j+1)
        }
        console.log(row);
    }
}

printNumberPattern(5);