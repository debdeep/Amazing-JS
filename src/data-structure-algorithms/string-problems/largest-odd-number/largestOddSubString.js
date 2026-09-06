function largestOddSubString(num) {
    // Traverse from the end to find the rightmost odd digit
    for (let i = num.length - 1; i >= 0; i--) {
        if (parseInt(num[i]) % 2 === 1) {
            // Return substring from start to this index

            return num.substring(0, i + 1); // as substring doesnot count end so adding 1 with counter value
        }
    }
    return ""; // No odd digit found
}

// Outputs:
console.log(largestOddSubString("12345")); // 5
console.log(largestOddSubString("420600000000000000000"));   // ""
console.log(largestOddSubString("12345678901234567890"));  // 1234567890123456789