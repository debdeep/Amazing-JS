function findSingleNumberByXOR(nums) {
    if (nums.length < 1)
        return null;

    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
        console.log(" in loops: ", xor);
    }
    return xor;
}

//Outputs:
console.log(findSingleNumberByXOR([1, 1, 3, 2, 2])); // 3
console.log(findSingleNumberByXOR([1, 2, 2])); // 1
console.log(findSingleNumberByXOR([5, 0, 0])); // 5
console.log(findSingleNumberByXOR([1])); // 1
console.log(findSingleNumberByXOR([])); // null