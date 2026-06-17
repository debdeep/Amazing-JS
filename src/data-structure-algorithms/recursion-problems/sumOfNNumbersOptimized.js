/*
    In this approach we have used tail Recursion Concept which will compute sum on the go instead of waiting to calculate sum after recursion ends.
    This is an optimized approach to recursively send computed results in each recursive call.
    5 + sumBottomUp(4) -> 4 + sumBottomUp(3) -> 3 + sumBottomUp(2) -> 2 + sumBottomUp(1) -> 1 + sumBottomUp(0) -> sumBottomUp(0) (base Hits)
    
    Now the stack unwinds (work happens after recursion returns): LIFO approach
    
    Call 5: 1 + 0 = 1
    Call 4: 2 + 1 = 3
    Call 3: 3 + 3 = 6
    Call 2: 4 + 6 = 10
    Call 1: 5 + 10 = 15

    Final result: 15
 */
function sumTailRecursive(num, sum = 0) {
    if (num === 0) return sum; // when base case reached return cumulative sum
    return sumTailRecursive(num - 1, sum + num);
}

// Outputs:
console.log(sumTailRecursive(5));  // 15
console.log(sumTailRecursive(10)); // 55
