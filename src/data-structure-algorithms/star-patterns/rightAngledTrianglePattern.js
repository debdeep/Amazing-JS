/* 
    Pattern-
    *
    **
    ***
    ****
*/
function halfPyramid(rowCount) {
    for (i = 0; i < rowCount; i++) {
        let row = ""
        for (j = 0; j < i + 1; j++) {
            row = row + "*"
        }
        console.log(row)
    }
}

halfPyramid(4)