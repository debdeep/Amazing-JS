function printPattern() {
    for (i = 4; i > 0; i--) {
        console.log("\n")
        for (j = 0; j < i; j++) {
            console.log("i="+i, " j=" +j);
        }
    }
}

printPattern();