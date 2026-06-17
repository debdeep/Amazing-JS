/*
    In this approach we have used tail Recursion Concept which will compute sum on the go instead of waiting to calculate sum after recursion ends.
    This is an optimized approach to recursively send computed results in each recursive call.

    Dry run for sumTailRecursive(5, 0):

    Call 1: num=5, acc=0 → next: sumTailRecursive(4, 5)
    Call 2: num=4, acc=5 → next: sumTailRecursive(3, 9)
    Call 3: num=3, acc=9 → next: sumTailRecursive(2, 12)
    Call 4: num=2, acc=12 → next: sumTailRecursive(1, 14)
    Call 5: num=1, acc=14 → next: sumTailRecursive(0, 15)
    Call 6: num=0 → base case → return 15

    Final result: 15
 */
function sumTailRecursive(num, sum = 0) {
    if (num === 0) return sum; // when base case reached return cumulative sum
    return sumTailRecursive(num - 1, sum + num);
}

// Outputs:
console.log(sumTailRecursive(5));  // 15
console.log(sumTailRecursive(10)); // 55
