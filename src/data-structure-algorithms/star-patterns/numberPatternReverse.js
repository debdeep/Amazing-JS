/*
    Pattern: 
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
 */
function reversePattern(n) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < n - i; j++) {
            row = row + (j + 1);
        }
        console.log(row);
    }
}

reversePattern(10)