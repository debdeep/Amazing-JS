function printPattern() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j <= i; j++) {
            console.log(i, j);
        }
    }
}

printPattern();