function maxConsecutiveOnes(nums) {
    let count = 0;
    let maxCount = 0; //to store last maximum consecutive one's
    for (i in nums) {
        if (nums[i] === 1) {
            count++;
            maxCount = Math.max(maxCount, count);  // to be updated in case of 1 only
        } else {
            count = 0;
        }
    }
    return maxCount;

}

//Outputs:
console.log(maxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1])); // 3
console.log(maxConsecutiveOnes([1, 1, 0, 0, 1, 0, 0])); // 2
console.log(maxConsecutiveOnes([1, 0])); // 1
console.log(maxConsecutiveOnes([1])); // 1
console.log(maxConsecutiveOnes([])); // 0