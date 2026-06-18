/*
    In this program, we check whether the provided number is a Power of 2.
    If true → return true, else → return false.

    Examples:
    powerOfTwoBitwise(1)  = 2^0 = 1   → true
    powerOfTwoBitwise(5)  = not equal to any 2^n → false
    powerOfTwoBitwise(16) = 2^4 = 16  → true
    Sequence: 2^0 = 1 → 2^1 = 2 → 2^2 = 4 → 2^3 = 8 → 2^4 = 16

    Logic:
    - Powers of 2 have exactly one '1' bit in their binary representation.
    - Example: 8 = 1000, 16 = 10000
    - Subtracting 1 flips all lower bits (e.g., 16 → 15 = 01111).
    - So n & (n - 1) = 0 only for powers of 2.
    - This check runs in constant time, one-liner, very efficient.
    - Best approach for interviews and production code.
*/
function powerOfTwoBitwise(num) {
    return num > 0 && (num & (num - 1)) === 0;
}

console.log(powerOfTwoBitwise(5));   // false
console.log(powerOfTwoBitwise(1));   // true
console.log(powerOfTwoBitwise(16));  // true
console.log(powerOfTwoBitwise(0));   // false
