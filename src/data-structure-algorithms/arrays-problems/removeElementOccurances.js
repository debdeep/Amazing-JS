function removeElementOccurrences(nums, val) {
    let x = 0; // position to overwrite
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            console.log(`Element found for removal: ${nums[i]}\n`);
        }
        if (nums[i] !== val) {
            nums[x] = nums[i];
            x++;
        }
    }
    // Trim the array to new length
    nums.length = x;
    return nums;
}

//Outputs:
console.log(removeElementOccurrences([3, 2, 2, 3, 2, 3], 3)); // [2, 2, 2]
console.log(removeElementOccurrences([0, 1, 2, 2, 3, 0, 4, 2], 2)); // [0,1,3,0,4]
console.log(removeElementOccurrences([1, 1, 1], 1)); // []
console.log(removeElementOccurrences([1, -1, 1, 2, 2], 1)); // [-1, 2, 2]
console.log(removeElementOccurrences([11, 9, 3, 99, 0], 9)); // [11, 3, 99, 0]
