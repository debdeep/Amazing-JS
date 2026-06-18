/*
    In this program, we have to check whether the provided number is Power of 2 or not, if True returns true else false using Bitwise approach
    powerOfTwoBitwise(1) = 2^0= 1 so true
    powerOfTwoBitwise(5) = 2^(anyNumber) != 5 so false
    powerOfTwoBitwise(16) = 2^(4) = 16 so true | 2^(0) = 1 -> 2^(1) = 2 -> 2^(3)= 8 -> 2^(4)=16
    
    Logic: Powers of 2 have exactly one 1 bit in binary | Constant time, one-liner, very efficient.(Best Approach)
*/
function powerOfTwoBitwise(num) {
    return num > 0 && (num & (num - 1)) === 0;
}

console.log(powerOfTwoBitwise(5));  // false
console.log(powerOfTwoBitwise(1));  // true
console.log(powerOfTwoBitwise(16)); // true