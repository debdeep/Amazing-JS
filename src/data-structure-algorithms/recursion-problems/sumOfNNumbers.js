function sumOfNNumbers(num, sum = 0) {
    if (num === 0) return sum; // when base case reached return cumulative sum
    return sumOfNNumbers(num - 1, sum + num);
}

// Outputs:
console.log(sumOfNNumbers(5));  // 15
console.log(sumOfNNumbers(10)); // 55
