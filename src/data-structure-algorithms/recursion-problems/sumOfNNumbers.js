/*
    In this approach we have used bottom up recursive approach to calculate results and finl sum gets calculated once recursion ends.(work before call)
    This is an normal recursive approach where problem is being broken into smaller parts for results. 

    sumTailRecursive(5, 0) -> sumTailRecursive(4, 5) -> sumTailRecursive(3, 9) -> sumTailRecursive(2, 12) -> sumTailRecursive(1, 14) -> sumTailRecursive(0, 15) -> base Hits and retuns 15
 */
function sumRecursive(num) {
    if (num === 0) return 0; // when base case reached return cumulative sum
    return num + sumRecursive(num - 1);
}

// Outputs:
console.log(sumRecursive(5));  // 15
console.log(sumRecursive(10)); // 55
