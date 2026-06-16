function findSingleNumber(nums) {
    if (nums.length < 1)
        return null;
    let nums_sorted = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums_sorted.length; i += 2) {
        if (nums_sorted[i] !== nums_sorted[i + 1]) {
            return nums_sorted[i];
        }
    }

}

//Outputs:
console.log(findSingleNumber([1, 1, 3, 2, 2])); // 3
console.log(findSingleNumber([1, 2, 2])); // 1
console.log(findSingleNumber([5, 0, 0])); // 5
console.log(findSingleNumber([1])); // 1
console.log(findSingleNumber([])); // null