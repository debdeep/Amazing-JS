/*
    Factorial of a numbers is type of mathematical operation below-
    FORMULA: n!= n + (n-1)! till n becomes 1
    5! = 5 * (5-1)! = 5 * 4! ->  5 * 4 (3)! = 5 * 4  * 3 * (2)! -> 5 * 4  * 3 * 2 * (1)!  -> 5 * 4  * 3 * 2 * 1 -> 120 
*/
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

//Outputs:
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800
console.log(factorial(1000)); // Infinity