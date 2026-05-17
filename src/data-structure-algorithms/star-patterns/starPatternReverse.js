/*
    Pattern:    
    * * * * *
    * * * *
    * * *
    * *
    *
*/

function starReverse(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (j = 0; j < n - i; j++) {
            row = row + "*"
        }
        console.log(row)
    }
}

starReverse(5);