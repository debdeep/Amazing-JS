function lastWordLengthWithoutHelper(line) {
    let n = line.length - 1;
    let count = 0;
    //trim white spaces at end
    while (n >= 0) {
        if (line[n] === " ") {
            --n;
        } else {
            break;
        }
    }
    // word character count
    while (n >= 0) {
        if (line[n] !== " ") {
            --n;
            count++;
        } else {
            break;
        }
    }
    return count;

}

console.log(lastWordLengthWithoutHelper('I am Debdeep Majumder'));  // 8
console.log(lastWordLengthWithoutHelper('  Debdeep Majumder  '));  // 8
console.log(lastWordLengthWithoutHelper("Hello Sivaji")); // 6
console.log(lastWordLengthWithoutHelper("")); // 0
console.log(lastWordLengthWithoutHelper("Deba")); // 4 