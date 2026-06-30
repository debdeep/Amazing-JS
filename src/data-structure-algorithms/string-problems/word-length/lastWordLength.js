function lastWordLength(line) {
    let words = line.trim().split(" ");
    return words[words.length - 1].length;

}

console.log(lastWordLength('I am Debdeep Majumder'));  // 8
console.log(lastWordLength('  Debdeep Majumder  '));  // 8
console.log(lastWordLength("Hello Sivaji")); // 6
console.log(lastWordLength("")); // 0
console.log(lastWordLength("Deba")); // 4 
