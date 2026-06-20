/*
    Linear Search is on of the simplest way of searching an element inside an array. We will search the target element by element inside the given array or data set
    and returns 1 if element found or -1 in case of no match, we could also return index in case of target matches in array.
    Complexity:  Time: Worst Case O(N) when scan entire array & Best Case O(1) when element found at first index | Space: O(1)
*/

function linearSearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return 1; // returns 1 if found
        }
    }
    return -1; // returns -1 if not found

}

// Outputs:
console.log(linearSearch([0, 1, 1, 2, 3], 1));  // 1
console.log(linearSearch([0, 1, 8, 2, 3], 3)); // 1
console.log(linearSearch([0, 1, 1, 2, 3, 5, 8, 13, 21, 34], -34)); // -1
console.log(linearSearch([], 1)); // -1