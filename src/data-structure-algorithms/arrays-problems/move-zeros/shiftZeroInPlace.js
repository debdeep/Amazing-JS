function shiftZeroInPlace(nums) {
    if (nums.length === 0)
        return null;
    if (nums.length === 1)
        return nums;

    let x = 0; //posititon
    for (i in nums) {
        if (nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }
    // fill remaining elements with zero from x position
    for (let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}

//Outputs:
console.log(shiftZeroInPlace([1, 2, 3, 0, 0, 5, 9, 0])) // [1, 2, 3, 5, 9, 0, 0, 0]
console.log(shiftZeroInPlace([0, 0, 0, 5, 9, 0])) // [5, 9, 0, 0, 0, 0]
console.log(shiftZeroInPlace([1, 0])) // [1, 0]
console.log(shiftZeroInPlace([0])) // [0]
console.log(shiftZeroInPlace([1])) // [1]