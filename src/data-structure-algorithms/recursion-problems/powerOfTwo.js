/*
    In this program, we have to check whether the provided number is Power of 2 or not, if True returns true else false
    powerOfTwo(1) = 2^0= 1 so true
    powerOfTwo(5) = 2^(anyNumber) != 5 so false
    powerOfTwo(16) = 2^(4) = 16 so true | 2^(0) = 1 -> 2^(1) = 2 -> 2^(3)= 8 -> 2^(4)=16
*/
function powerOfTwo(num) {
    if (num === 1) return true;
    if (num === 0) return false;
    if (num % 2 === 0) {
        return powerOfTwo(num / 2)
    }
    return false;
}

//Outputs:
console.log(powerOfTwo(5)); // false
console.log(powerOfTwo(1)); // true
console.log(powerOfTwo(16)); // true