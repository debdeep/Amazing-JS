/*
    Normal Bubble sort is not a best optimized sorting algoright having as worst case complexity of O(N^2) but we could improve the algo to
    O(N) incase inpt array is a sorted one where again bubble sorting not required.
    This modified bubblesort is a optimized one

 */
function modifiedBubbleSort(nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        let swappingHappened = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                swappingHappened =  true;
            }
        }
        console.log(i);
        if(!swappingHappened) break;
    }
    return nums;

}

// Outputs:
console.log(modifiedBubbleSort([0, 5, 1, 2, 1]));  // [0, 1, 1, 2, 5]
console.log(modifiedBubbleSort([1, 2, 3, 4, 5])); //  [1, 2, 3, 4, 5] // this also is useful in this case only
