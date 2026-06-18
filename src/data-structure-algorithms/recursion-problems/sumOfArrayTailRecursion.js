/*
    This is an tail recursive approach of recursion which will calculate sum on the go before recursion during recursive calls and a optimized one
*/
function sumTailRecursion(nums, n = nums.length, sum = 0) {
    if (n === 0) return sum;
    //console.log(nums, n-1, sum + nums[n-1]);
    return sumTailRecursion(nums, n - 1, sum = sum + nums[n - 1]);
}

// Outputs:
console.log(sumTailRecursion([1, 2, 3, 4, 5]));  // 15
console.log(sumTailRecursion([11, 22, 33, 44, 55])); //165