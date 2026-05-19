function reverseNumber(num) {
    // Step 1: Convert number to string
    let str = num.toString();
    // Step 2: Split string into array of characters
    let arr = str.split("");
    // Step 3: Reverse the array
    let reversedArr = arr.reverse();
    // Step 4: Join back into string
    let reversedStr = reversedArr.join("");
    // Step 5: Convert back to number
    return parseInt(reversedStr, 10);
}

// Outputs:
console.log(reverseNumber(1234)); // 4321
console.log(reverseNumber(0)); // 0
console.log(reverseNumber(-123)); // 321