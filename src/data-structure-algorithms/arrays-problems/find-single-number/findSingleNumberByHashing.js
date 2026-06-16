function findNumberByHash(nums) {
    if (nums.length < 1) return null;

    let hash = {}; //to store count of numbers
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === 1) {
            return nums[i];
        }
    }
    //return hash;
}

//Outputs:
console.log(findNumberByHash([1, 1, 3, 2, 2])); // 3
console.log(findNumberByHash([1, 2, 2])); // 1
console.log(findNumberByHash([5, 0, 0])); // 5
console.log(findNumberByHash([1])); // 1
console.log(findNumberByHash([])); // null