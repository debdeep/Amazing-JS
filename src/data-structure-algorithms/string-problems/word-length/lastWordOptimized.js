function lastWordLength(line) {
    let n = line.length - 1;
    let count = 0;

    while (n >= 0) {
        if (line[n] === " ") {
            if (count > 0) break; // stop once last word counted
        } else {
            count++;
        }
        n--;
    }
    return count;
}

console.log(lastWordLength('I am Debdeep Majumder'));  // 8
console.log(lastWordLength('  Debdeep Majumder  '));  // 8
console.log(lastWordLength("Hello Sivaji")); // 6
console.log(lastWordLength("")); // 0
console.log(lastWordLength("Deba")); // 4 