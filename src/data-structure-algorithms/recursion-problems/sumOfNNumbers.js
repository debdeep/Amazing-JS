/*
    In this approach we have used the bottom‑up recursive style.
    The sum is calculated only after recursion returns (work happens after recursion ends).
    This is the normal recursive approach where the problem is broken into smaller parts.

    Dry run for sumRecursive(5):

    sumRecursive(5) -> 5 + sumRecursive(4)
    sumRecursive(4) -> 4 + sumRecursive(3)
    sumRecursive(3) -> 3 + sumRecursive(2)
    sumRecursive(2) -> 2 + sumRecursive(1)
    sumRecursive(1) -> 1 + sumRecursive(0)
    sumRecursive(0) -> base case returns 0

    Now the stack unwinds (LIFO):

    Call 5: 1 + 0 = 1
    Call 4: 2 + 1 = 3
    Call 3: 3 + 3 = 6
    Call 2: 4 + 6 = 10
    Call 1: 5 + 10 = 15

    Final result: 15
 */
function sumRecursive(num) {
    if (num === 0) return 0; // base case
    return num + sumRecursive(num - 1);
}

// Outputs:
console.log(sumRecursive(5));  // 15
console.log(sumRecursive(10)); // 55
