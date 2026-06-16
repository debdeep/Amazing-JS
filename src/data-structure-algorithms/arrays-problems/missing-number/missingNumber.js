function missingNumber(nums) {
    let n = nums.length;
    let totalSum = (n * (n + 1) / 2);
    let partialSum = 0;

    for (i in nums) {
        partialSum = partialSum + nums[i];
    }
    return totalSum - partialSum;
}

//Outputs:
console.log(missingNumber([1, 2, 3, 0, 5, 6, 7])); // 4 
console.log(missingNumber([1, 2, 3])); // 0
console.log(missingNumber([1, 0, 2])); // 3
console.log(missingNumber([1])); // 0
console.log(missingNumber([])); // 0