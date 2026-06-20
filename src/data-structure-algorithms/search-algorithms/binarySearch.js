/*
    Binary Search is on of the efficient way of searching an element inside an array.
    Logic: We will take two pointers as left, right on the initial array and left will point to index 0 and right will point to last element of array index,
            Then We will calculate median by (left + right)/2 and once done will check medium index element is EQUALS to targetor not if yes simply returns if not 
            Then we should check whether median index element is < target then right side we need to search only(as sorted array) and continue the same again and during that left pointer will become (median index + 1).
            if median index element is > target and do the above on the left side as target is smaller and right pointer will be (median index - 1)
    Only catch is that it can be applied to ONLY arrays which are sorted 
    Complexity:  Time: Worst Case O(logN) & Best Case O(1) when element found at first index | Space: O(1) during iterative & O(logn) during recursive
*/

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (right >= left) {
        let midIndex = Math.floor((left + right) / 2);
        if (nums[midIndex] === target) {
            return midIndex;
        }
        else if (nums[midIndex] < target) {
            left = midIndex + 1;
        }
        else if (nums[midIndex] > target) {
            right = midIndex - 1;
        }
    }
    return -1
}

// Outputs:
console.log(binarySearch([0, 1, 1, 2, 3], 1));  // 2
console.log(binarySearch([-1, 0, 2, 2, 4], 4)); // 4
console.log(binarySearch([0, 1, 2, 3, 5, 8, 13, 21, 34], 13)); // 6
console.log(binarySearch([0, 1, 2, 3, 5, 8, 13, 21, 34], 35)); // -1
console.log(binarySearch([5], 5)); // -1