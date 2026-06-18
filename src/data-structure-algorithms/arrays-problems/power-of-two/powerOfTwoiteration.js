/*
    In this Iterative program, we have to check whether the provided number is Power of 2 or not, if True returns true else false
    powerOfTwoIterative(1) = 2^0= 1 so true
    powerOfTwoIterative(5) = 2^(anyNumber) != 5 so false
    powerOfTwoIterative(16) = 2^(4) = 16 so true | 2^(0) = 1 -> 2^(1) = 2 -> 2^(3)= 8 -> 2^(4)=16

    Logic: Keep dividing the number by 2 using modulo approach till it reaches 1 or in between if becomes odd aprt from 1 return false
*/
function powerOfTwoIterative(num) {
    if (num === 0) return false;
    while (num > 1) {
        if (num % 2 !== 0) return false;
        num = num / 2;
    }
    return true;
}

console.log(powerOfTwoIterative(5));  // false
console.log(powerOfTwoIterative(1));  // true
console.log(powerOfTwoIterative(16)); // true
console.log(powerOfTwoIterative(0)); // false