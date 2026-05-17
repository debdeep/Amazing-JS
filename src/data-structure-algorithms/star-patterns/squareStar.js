/*
    Pattern-

    * * * *
    * * * *
    * * * *
    * * * *
*/

function printPattern(starCount) {
    for (i = 0; i < starCount; i++) {
        let row = "";
        for (j = 0; j < starCount; j++) {
            row = row + "*"
            console.log("")
        }
        console.log(row);
    }
}

printPattern(4)