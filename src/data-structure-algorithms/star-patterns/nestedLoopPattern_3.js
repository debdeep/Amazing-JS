function printPattern() {
    for (i = 4; i > 0; i--) {
        for (j = 0; j < i; j++) {
            console.log(i, j);
        }
    }
}

printPattern();